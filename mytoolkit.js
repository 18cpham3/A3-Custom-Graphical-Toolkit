import {SVG} from './svg.min.js';

var MyToolkit = (function() {
    //Button widget 
    
    var Button = function(){
        var draw = SVG().addTo('body').size('100%','100%');
        var clickEvent = null
        
        // group button components
        var btnGroup = draw.group();
        
        // create button
        var btn = draw.rect(86,35).fill("#BC4E76");
        var txt = draw.text("Button 1").fill('#F6F3F7').move(15,8);
        

        
        // customize button
        btn.radius(20);

        // add to button group
        btnGroup.add(btn);
        btnGroup.add(txt);
        txt.font('middle');
        ;
        
        // callbacks
        btnGroup.mouseover(function(){
            btn.fill({ color: 'pink'}).stroke({ width: 0, linecap: 'round', linejoin: 'round' })
        })
        btnGroup.mouseout(function(){
            btn.stroke({ width: 0, linecap: 'round', linejoin: 'round' }).fill("#BC4E76")
            txt.fill("white");
        })
        btnGroup.mouseup(function(){
            btn.fill({ color: 'orange'})
        })
        btnGroup.click(function(event){
            btn.fill({ color: '#FA9189'}).stroke({ color:"#BC4E76", width: 2, linecap: 'round', linejoin: 'round' }).fill("white")
            txt.fill("#BC4E76");
            if(clickEvent != null)
                clickEvent(event)
        })
        return {
            setText: function(text){
                txt.text(text);
                btn.width();
                // change size
                btn.size(txt.length() + 30,35)
            },
            move: function(x, y) {
                btnGroup.move(x, y);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            }, 
            setColor: function(color){
                btn.fill(color);
                btnGroup.mouseout(function(){
                    btn.stroke({ width: 0, linecap: 'round', linejoin: 'round' }).fill(color)
                    txt.fill("white");
                })
                btnGroup.click(function(event){
                    btn.fill({ color: '#FA9189'}).stroke({ color:color, width: 2, linecap: 'round', linejoin: 'round' }).fill("white")
                    txt.fill(color);
                })
            }
        }
    }

    // Checkbox Widget
    var Checkbox = function() {
        var draw = SVG().addTo('body').size('100%','100%').width(900).height(30);
        var checkbox = draw.group()
        var checkBox1 = draw.group()
        var check = draw.group()
        var clickEvent = null;
        var check;


        // checkbox text
        var txt = draw.text('Checkbox item').move(35, 8);
        // create checkbox
        var box = draw.rect(25,25).stroke({ color:"#BC4E76", width: 3, linecap: 'round', linejoin: 'round' }).fill("white").move(3,3);
        var line = draw.line(0, 0, 18, 18).move(6.5, 6.5).stroke({ color: '#A6C9C6', width: 2, linecap: 'round' })
        var line2 = draw.line(0, 18, 18, 0).move(6.5, 6.5).stroke({ color: '#A6C9C6', width: 2, linecap: 'round' })
        
        // customize textbox
        //#7594BD
        box.radius(2);
        // group checkbox
        
        check.add(line);
        check.add(line2);
        checkBox1.add(box);
        checkBox1.add(txt);
        checkBox1.add(check);
        checkbox.add(checkBox1)
        // checkbox.move(20,20);
        
        
    //[30,40], [50,10], [70,40], [50,60], [30,40]
    // var polyline = draw.polyline([[30,40], [40,10], [50,40]])
    // polyline.fill('#BC4E76').move(20, 10)
    // polyline.stroke({ width: 4, linecap: 'round', linejoin: 'round' })

        // callbacks
        checkBox1.mouseover(function(){
            box.stroke({color: 'pink', width: 3, linecap: 'round', linejoin: 'round' })
            line.stroke({ color:"silver", width: 2, linecap: 'round', linejoin: 'round' }).fill("white");
            line2.stroke({ color:"silver", width: 2, linecap: 'round', linejoin: 'round' }).fill("white");
        })
        checkBox1.mouseout(function(){
            if (check.visible() == true){
                box.stroke({color: '#BC4E76', width: 3, linecap: 'round', linejoin: 'round' })
                line.stroke({ color:"#A6C9C6", width: 2, linecap: 'round', linejoin: 'round' }).fill("white");
                line2.stroke({ color:"#A6C9C6", width: 2, linecap: 'round', linejoin: 'round' }).fill("white");
            }
            else{
                box.stroke("silver");
            }
        })
        // btnGroup.mouseup(function(){
        //     btn.fill({ color: 'orange'})
        // })
        

        checkBox1.click(function(event){
            // console.log(check.visible());
            if(check.visible() == true){
                check.hide();
                // if(check.visible() == false){
                //     box.stroke("gray");
                // };
            }
            else{
                check.show();
            }
            
            if(clickEvent != null)
                clickEvent(event)
        })
        return{
            move: function(x, y) {
                checkbox.move(x, y);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            setText: function(text){
                txt.text(text);
            }
        }
    }

    // radiobutton
    var Radiobuttons = function(r) {
        // console.log(r);
        var draw = SVG().addTo('body').size('100%','100%').height(r.length* 50);
        var radioButtons = draw.group()
        var y = 0;
        var buttons = new Array();
        for (var i = 0; i < r.length; i++){
            y+=40
            // console.log(r[i][0]);
            var outerButton = draw.circle(27).fill('white').stroke({ color:"#c2d6d6", width: 2, linecap: 'round', linejoin: 'round' }).move(0, y);
            var txt = draw.text(r[i][0]).move(35,y+5);
            var button = draw.circle(19).fill('#8DB9B6').move(4, y+4);
            if (r[i][1] == false){
                button.hide();
            }
            buttons.push(outerButton);
            radioButtons.add(outerButton);
            radioButtons.add(txt);
            radioButtons.add(button);
        }
        // console.log(radioButtons.first().y());
        // console.log(radioButtons.get(1).y());
        // console.log(radioButtons.get(2).y());
        // radioButtons.each(function(event){
        //     console.log()
        // });
        // buttons.map(e => e.addEventListener(){
        //     console.log(e);
        // )};
        
        // callbacks
        // buttons.each(function(item){
        //     console.log(item);
        // });
        console.log(buttons);
        outerButton.click(function(event){
            console.log(outerButton.attr());
        });
        buttons.map(e => e.addEventListener("click", function(){ 
            console.log("hello"); 
        }));
        return{
            move: function(x, y) {
                radioButtons.move(x, y);
            }
        }

    }

    // textbox
    var Textbox = function() {
        var clicked = false;
        var draw = SVG().addTo('body').size('100%','100%');
        var textbox = draw.group();
        var box = draw.rect(180, 25).stroke({ color:"silver", width: 1}).fill('white');
        box.radius(2);
        var caret = draw.rect(2,15).move(6,5).fill('gray');
        var runner = caret.animate().width(0);
        runner.loop(2000,10,10);
        caret.hide();
        var text = draw.text("").move(3,-1.5);
        
        textbox.add(box);
        textbox.add(text);
        textbox.click(function(event){
            caret.show();
            box.stroke('#3D5A80');
            console.log(event);
            
        });
        textbox.mouseover(function(event){
            caret.show();
            box.stroke('#3D5A80');
        });
        textbox.mouseout(function(event){
            caret.hide();
            box.stroke('silver');
        });
        
            SVG.on(window, 'keyup', (event) => {
                var enterInput = "";
                console.log(event.keyCode);
                box.stroke({ color:'#3D5A80', width: 1.5});
                caret.show();
                // console.log(event.key);
                var eventNum = [16, 17, 18, 20, 33, 34,35,36, 37, 45, 174, 175, 176, 177, 178]
                if (event.keyCode == 8){
                    console.log(text.text());
                    text.text(text.text().substring(0, text.text().length-1));
                    caret.move(text.length()+3);
                    if (text.length() < 180){
                        box.size(180, 25);
                    }
                }
                else if(eventNum.includes(event.keyCode)){
                    console.log("Pass");
                }
                else if(event.keyCode == 13 || event.keyCode == 46 ){
                    enterInput = text.text();
                    text.text("");
                    caret.move(6,5);
                    box.size(180, 25);
                    console.log(enterInput);  
                }
                else if(event.keyCode == 27 ){
                    box.stroke({ color:"silver", width: 2}).fill('white');
                    text.text('');
                    caret.move(6,5);
                    caret.hide();
                }
                else{
                    // text.remember('oldText', text.text());
                    text.text(text.text() + event.key);
                    caret.move(text.length()+3);
                    if (text.length() > 180){
                        box.size(10 + text.length(), 25);
                    }   
                }
            })
        
        
    }

    // scrollbar
    var Scrollbar = function() {
        var draw = SVG().addTo('body').size('100%','100%').height(400);
        var scrollbar = draw.group();
        var scroll = draw.rect(18, 150).stroke({ color:"#3D5A80", width: 2}).fill('white');
        var upBtn = draw.rect(18, 20).stroke({ color:"#3D5A80", width: 2}).fill('white').move(0,-22);
        var thumb = draw.rect(14, 35).fill('#A6C9C6').move(2,1);
        thumb.radius(3);
        scroll.radius(3);
        // draw.polyline([[30,40], [40,30], [50,40]]).fill('#BC4E76').move(20, 10).stroke({ width: 4, linecap: 'round', linejoin: 'round' }).move(0,5);
        var downBtn = draw.rect(18, 20).stroke({ color:"#3D5A80", width: 2}).fill('white').move(0,152);
        //  draw.polyline([[-30,-40], [-40,-30], [-50,-40]]).fill('#BC4E76').move(20, 10).stroke({ width: 4, linecap: 'round', linejoin: 'round' }).move(0,165);
        var upArrow =  draw.text("⯅").move(1.5,-19);
        var downArrow = draw.text("⯆").move(1.5,152);
        downBtn.radius(3);
        upBtn.radius(3);
        var down = draw.group();
        var up = draw.group();
        down.add(downBtn);
        down.mouseover(function(event){
            downBtn.fill('#9FB4D1');
        })
        down.mouseout(function(event){
            downBtn.fill('white');
        })
        down.click(function(event){
            downBtn.fill('#3D5A80');
        })
        up.mouseover(function(event){
            upBtn.fill('#9FB4D1');
        })
        up.click(function(event){
            upBtn.fill('#3D5A80');
        })
        up.mouseout(function(event){
            upBtn.fill('white');
        })
        scroll.mouseover(function(event){
            scroll.fill('#E6EFEF');
        })
        scroll.mouseout(function(event){
            scroll.fill('white');
        })
        thumb.mouseover(function(event){
            thumb.fill('#6AA0A0');
        })
        thumb.mouseout(function(event){
            thumb.fill('#A6C9C6');
        })
        up.add(upBtn);
        down.add(downArrow);
        up.add(upArrow);
        scrollbar.add(scroll);
        scrollbar.add(thumb);
        scrollbar.add(down);
        scrollbar.add(up);
        scrollbar.move(0,10);
        var clickinterval = 35;
        down.click(function(event){
            if (thumb.y() <= downBtn.y() - 40){
            thumb.move(thumb.x(), thumb.y()+clickinterval);
            // thumb.dy(clickinterval);
            console.log(down.y());
            console.log(thumb.y());
            }
        });
        up.click(function(event){
            // console.log(upBtn.width());
            console.log(up.y());
            if (thumb.y() > upBtn.width() + 20){
            thumb.move(thumb.x(), thumb.y()-clickinterval);
            // thumb.dy(-clickinterval);
            console.log(thumb.y());
            }
            // else if (thumb.y() - clickinterval < upBtn.y()){
            //     thumb.move(thumb.x(), 0);
            // }
        });
        scroll.click(function(event){
            console.log(event);
            thumb.dy(event.clientY-thumb.y());
            console.log(thumb.y());
        });
        thumb.click(function(event){
            console.log("clicked");
            SVG.on(window, 'onmousedown', (event) => {
                    console.log('down');
                });
        });
        // Make sure you are capturing events from your inner and outer rectangles (if that's how you have built your thumbbar)
        // Capture your mouse position from ClientY rather than PageY
        // actions do you need to take with the mouse to get it to move and in what sequence do they happen in
        //direction - make sure to consider up, down, and no movement
        // SVG.on(window, 'keyup', (event) => {

        // });
        return {
            // move: function(x, y) {
            //     btn.move(x, y);
            // },
            // onclick: function(eventHandler){
            //     clickEvent = eventHandler
            // }
        }
    }

    // progressbar
    var Progressbar = function(){
        var draw = SVG().addTo('body').size('100%','100%');
        var progressbar = draw.group();
        var  bar = draw.rect(200, 15).stroke({ color:"#3D5A80", width: 1.5}).fill('white');
        var progress = draw.rect(20, 12).fill("#BC4E76").move(1,1.5);
        progressbar.add(bar);
        progressbar.add(progress);
        progressbar.move(1,1);
    }

    var Custom = function(){
        var draw = SVG().addTo('body').size('100%','100%');
        var toggleButton = draw.group();
        var container = draw.rect(54,30).stroke({color:"#A6C9C6", width: 2}).fill('white');
        var x = container.x() + 3;
        var toggle = draw.circle(25,25).stroke({color:"#DDA6BA", width: 2}).fill('white').move(x,2.5);
        container.radius(15);
        
        toggleButton.add(container);
        toggleButton.add(toggle);
        toggleButton.move(10,10);

        toggle.mouseover(function(event){
            toggle.fill("#DDA6BA");
        });
        toggle.mouseout(function(event){
            toggle.fill("white");
        });
        toggleButton.click(function(event){
            console.log(toggle.x());
            if (toggle.x() == container.x()+3){
                container.fill("#B3D0CE").stroke("#5D9895");
                toggle.fill("#BC4E76").stroke("#BC4E76");
                // toggle.animate.move(toggle.x()+23, 2.5);
                toggle.x(toggle.x()+23);
                toggle.mouseover(function(event){
                    toggle.fill("#C15C81").stroke('#C15C81');
                });
                toggle.mouseout(function(event){
                    toggle.fill("#BC4E76");
                });
            }
            else{
                container.fill("white").stroke("#A6C9C6");
                toggle.fill('white').stroke("#DDA6BA");
                toggle.x(toggle.x()-23);
                toggle.mouseover(function(event){
                    toggle.fill("#DDA6BA").stroke("#DDA6BA");
                });
                toggle.mouseout(function(event){
                    toggle.fill("white");
                });
            }
        
        })
        return{
            move: function(x,y){
                toggleButton.move(x,y);

            }
        }
    }

return {Button, Checkbox, Radiobuttons, Textbox, Scrollbar, Progressbar, Custom}
}());

export{MyToolkit}