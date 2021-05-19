import {SVG} from './svg.min.js';
var draw = SVG().addTo('body').size('100%','100%').height(1000);
var page = draw.group();
page.rect(10000,10000).fill('white');
var MyToolkit = (function() {

    var Button = function(){
        // var draw = SVG().addTo('body').size('100%','100%');
        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null
        
        // create button
        var btnGroup = draw.group();
        var btn = draw.rect(86,35).fill("#BC4E76");
        var txt = draw.text("Button 1").fill('#F6F3F7').move(15,8);
       
        // customize button
        btn.radius(20);

        // button group
        btnGroup.add(btn);
        btnGroup.add(txt);
        txt.font('middle');
        
        // add to page
        page.add(btnGroup);
        
        // callbacks
        btnGroup.mouseover(function(){
            btn.fill({ color: 'pink'}).stroke({ width: 0, linecap: 'round', linejoin: 'round' })
            
        })
        btnGroup.mouseout(function(){
            btn.stroke({ width: 0, linecap: 'round', linejoin: 'round' }).fill("#BC4E76")
            txt.fill("white");
        })
        btnGroup.mouseup(function(){
            btn.fill({ color: '#3D5A80'})
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
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler;
            },
            onmouseout: function(eventHandler){
                mouseoverEvent = eventHandler;
            },
            onmouseup: function(eventHandler){
                mouseoutEvent = eventHandler;
            },
            onmouseover: function(eventHandler){
                mouseupEvent = eventHandler;
            }
        }
    }

    var Checkbox = function() {
        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null

        var draw = SVG().addTo('body').size('100%','100%').width(900).height(50);
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
        box.radius(2);

        // checkbox group
        check.add(line);
        check.add(line2);
        checkBox1.add(box);
        checkBox1.add(txt);
        checkBox1.add(check);
        checkbox.add(checkBox1)

        // add to page
        page.add(checkbox);
        
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
        checkBox1.click(function(event){
            if(check.visible() == true){
                check.hide();
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
                draw.height(draw.height() + checkbox.height());
                draw.width(draw.width() + checkbox.width()+100);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            setText: function(text){
                txt.text(text);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            onmouseout: function(eventHandler){
                mouseoverEvent = eventHandler
                console.log(eventHandler);
            },
            onmouseover: function(eventHandler){
                mouseupEvent = eventHandler
            }
        }
    }

    var Radiobuttons = function(r) {
        // var draw = SVG().addTo('body').size('100%','100%').height(r.length* 50);

        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null

        var radioButtons = draw.group()
        var y = 0;
        var buttons = new Array();
        var allFalse = true;
        var button = draw.circle(19).fill('#8DB9B6').move(4, y+4);
        button.hide();

        // create and group RadioButtons
        for (var i = 0; i < r.length; i++){
            y+=40
            // console.log(r[i][0]);
            var outerButton = draw.circle(27).fill('white').stroke({ color:"silver", width: 2, linecap: 'round', linejoin: 'round' }).move(0, y);
            var txt = draw.text(r[i][0]).move(35,y+5);
            if (r[i][1] == true){
                button.move(4, y+4);
                button.show();
                allFalse = false;
            }
            buttons.push(outerButton);
            radioButtons.add(outerButton);
            radioButtons.add(txt);
            radioButtons.add(button);
        }
        
        // add to page
        page.add(radioButtons);
        
        outerButton.mouseover(function(event){
            outerButton.stroke('blue');
        })
        if (allFalse == true){
            button.show().move(4, 44);
        }
        
        // callbacks
        buttons.map(e => e.node.addEventListener("click", function(){ 
            button.move(e.x()+4, e.y()+4);
           
        }));
        buttons.map(e => e.node.addEventListener("mouseover", function(){ 
            e.stroke("#67A29C");
            
        }));
        buttons.map(e => e.node.addEventListener("mouseout", function(){ 
            e.stroke("silver");
            e.fill("white");
        }));
        button.mouseover(function(event){
            button.fill("white").stroke({color:'#B3D0CE', width:2});
        })
        button.mouseout(function(event){
            button.fill("#8DB9B6").stroke({color:'#8DB9B6', width:0});
        })
        return{
            move: function(x, y) {
                radioButtons.move(x, y);
            }
        }
    }

    var Textbox = function() {
        // var draw = SVG().addTo('body').size('100%','100%');
        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null

        var textbox = draw.group();
        var box = draw.rect(180, 25).stroke({ color:"silver", width: 1}).fill('white');
        var text = draw.text("").move(3,-1.5);
        var caret = draw.rect(2,20).move(textbox.x() + text.length()+3,textbox.y()).fill('gray');
        var runner = caret.animate().width(0);
        runner.loop(2000,10,10);

        caret.hide();
        box.radius(2);

        // textbox group
        textbox.add(box);
        textbox.add(text);
        textbox.add(caret);
        page.add(textbox);

        //callbacks
        textbox.click(function(event){
            caret.show();
            box.stroke('#3D5A80');
            // console.log(event);
            if(clickEvent != null)
                clickEvent(event)
            
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

                var eventKeyNum = [16, 17, 18, 20, 33, 34, 35, 36, 37, 44, 45, 91, 174, 175, 176, 177, 178]
                if (event.keyCode == 8){
                    console.log(text.text());
                    text.text(text.text().substring(0, text.text().length-1));
                    caret.move(textbox.x() + text.length()+3);
                    if (text.length() < 180){
                        box.size(180, 25);
                    }
                }   
                else if(eventKeyNum.includes(event.keyCode)){
                    console.log("Special eventkey " + event.keyCode);
                }
                else if(event.keyCode == 13 || event.keyCode == 46 ){
                    enterInput = text.text();
                    text.text("");
                    caret.move(textbox.x(),textbox.y());
                    box.size(180, 25);
                    console.log(enterInput);  
                }
                else if(event.keyCode == 27 ){
                    box.stroke({ color:"silver", width: 2}).fill('white');
                    text.text('');
                    caret.move(textbox.x(),textbox.y());
                    caret.hide();
                }
                else{
                    text.text(text.text() + event.key);
                    caret.move(textbox.x() + text.length()+3);
                    if (text.length() > 180){
                        box.size(10 + text.length(), 25);
                    }   
                }
            })
            return{
                move: function(x, y) {
                    textbox.move(x, y);
                },
                onclick: function(eventHandler){
                    clickEvent = eventHandler
                }
            }
    }

    var Scrollbar = function() {
        // var draw = SVG().addTo('body').size('100%','100%').height(400);

        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null

        var scrollbar = draw.group();
        var scroll = draw.rect(16, 180).stroke({ color:"#3D5A80", width: 1}).fill('white').move(1,2);
        var upBtn = draw.rect(18, 19).fill('silver').move(0,-19);
        var thumb = draw.rect(12, 35).fill('#A6C9C6').move(upBtn.x() + 3, upBtn.y() + 22);
        thumb.radius(3);
        scroll.radius(3);
        var downBtn = draw.rect(18, 19).fill('silver').move(0,183);
        var upArrow =  draw.text("⯅").move(1.5,-14);
        var downArrow = draw.text("⯆").move(1.5,179);
        downBtn.radius(6);
        upBtn.radius(6);
        var down = draw.group();
        var up = draw.group();

        //scrollbar group
        down.add(downBtn);
        up.add(upBtn);
        down.add(downArrow);
        up.add(upArrow);
        scrollbar.add(scroll);
        scrollbar.add(down);
        scrollbar.add(up);
        scrollbar.add(thumb);
        scrollbar.move(0,10);

        // add to page
        page.add(scrollbar);

        // callbacks
        down.mouseover(function(event){
            downBtn.fill('#9FB4D1');
        })
        down.mouseout(function(event){
            downBtn.fill('silver');
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
            upBtn.fill('silver');
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
        var clickinterval = 35;
        down.click(function(event){
            console.log(thumb.y());
            console.log(scroll.height());
            // if (thumb.y() < scroll.height()){
            // thumb.move(thumb.x(), thumb.y()+clickinterval);
            if(thumb.y() < down.y()-50){
                thumb.move(thumb.x(),thumb.y()+clickinterval)
            }
        });
        up.click(function(event){
            // console.log(upBtn.width());
            if(thumb.y()-40 > up.y()){
                thumb.move(thumb.x(),thumb.y()-clickinterval)
            
            }
            // else if (thumb.y() - clickinterval < upBtn.y()){
            //     thumb.move(thumb.x(), 0);
            // }
        });
        scroll.click(function(event){
            console.log(event);
            thumb.dy(event.offsetY-thumb.y()-scroll.height()+150);
            console.log(event.clientY-thumb.y()-scroll.height());
        });

        // thumb drag (doesn't work :( ))
        // console.log(scrollbar);
        // thumb.mouseup(function()){}
        // thumb.mousedown(function(){
        //     scroll.click(function(event){
        //         // console.log(event);
        //         thumb.dy(event.offsetY-thumb.y()-scroll.height()+150);
        //         console.log(event.clientY-thumb.y()-scroll.height());
        //     });
            
        //     SVG.on(scroll,'mousemove',(event)=>{
        //         console.log(thumb.point(event.pageX, event.pageY));
        //         if (event.clientY >thumb.y()){
        //             console.log(thumb.y());
        //             if(thumb.y()<scroll.height()){
        //                 thumb.dy(thumb.x(),event.clientY+thumb.y())             
        //             }
        //         }
        //     })
        // })
        // Make sure you are capturing events from your inner and outer rectangles (if that's how you have built your thumbbar)
        // Capture your mouse position from ClientY rather than PageY
        // actions do you need to take with the mouse to get it to move and in what sequence do they happen in
        //direction - make sure to consider up, down, and no movement
        // SVG.on(window, 'keyup', (event) => {

        // });
        return {
            move: function(x, y) {
                scrollbar.move(x, y);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            }
        }
    }

    var Progressbar = function(inc, interval){
        var increment = 0;
        var draw = SVG().addTo('body').size('100%','100%');
        var progressbar = draw.group();
        var bar = draw.rect(250, 12).stroke({ color:"#3D5A80", width: 1.5}).fill('white');
        var progress = draw.rect(0, 9).fill("#BC4E76").move(1,2);

        // progressbar group
        progressbar.add(bar);
        progressbar.add(progress);
        page.add(progressbar);
        
        progressbar.move(1,1);

        return{
            move: function(x,y){
                progress.move(x,y)
                bar.move(x,y)
            },
            setWidth: function(width){
                progress.width(width)
            },
            getWidth: function(width){
                bar.width()
            },
            getIncrement: function(){
                console.log(increment)
            },
            setIncrement: function(inc){
                increment += inc;
                progress.size(0,10)
                var runner = progress.animate({
                    duration: 2000,
                    when: 'now',
                    swing: true,
                    // times: 5,
                    wait: 200
                  }).width(increment).loop()
            },
        }
    }

    var Toggle = function(){
        var draw = SVG().addTo('body').size('100%','100%');
        var toggleButton = draw.group();
        var container = draw.rect(54,30).stroke({color:"#91AACA", width: 2}).fill('white');
        var x = container.x() + 3;
        var toggle = draw.circle(25,25).stroke({color:"#91AACA", width: 2}).fill('white').move(x,2.5);
        container.radius(15);
        
        // toggle group
        toggleButton.add(container);
        toggleButton.add(toggle);
        toggleButton.move(10,10);

        // add to page
        page.add(toggleButton);

        // callback
        toggle.mouseover(function(event){
            toggle.fill("#91AACA");
        });
        toggle.mouseout(function(event){
            toggle.fill("white");
        });
        toggleButton.click(function(event){
            console.log(toggle.x());
            if (toggle.x() == container.x()+3){
                container.fill("#91AACA")
                toggle.fill("#91AACA").stroke("#3C587C");
                toggle.x(toggle.x()+23);
                toggle.mouseover(function(event){
                    toggle.fill("#5075A5").stroke('#5075A5');
                });
                toggle.mouseout(function(event){
                    toggle.fill("#3C587C").stroke('#3C587C');
                });
            }
            else{
                container.fill("white").stroke("#91AACA");
                toggle.fill('white').stroke("#91AACA");
                toggle.x(toggle.x()-23);
                toggle.mouseover(function(event){
                    toggle.fill("#91AACA").stroke("#91AACA");
                });
                toggle.mouseout(function(event){
                    toggle.fill("white").stroke("#91AACA");
                });
            }
        })
        return{
            move: function(x,y){
                toggleButton.move(x,y);
            }
        }
    }

return {Button, Checkbox, Radiobuttons, Textbox, Scrollbar, Progressbar, Toggle}
}());

export{MyToolkit}