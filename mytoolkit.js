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
                // change 
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
        console.log(r);
        var draw = SVG().addTo('body').size('100%','100%').height(r.length* 50);
        var radioButtons = draw.group()
        var y = 0;
        var buttons = [];
        for (var i = 0; i < r.length; i++){
            y+=40
            // console.log(r[i][0]);
            var outerButton = draw.circle(27).fill('white').stroke({ color:"#c2d6d6", width: 2, linecap: 'round', linejoin: 'round' }).move(0, y);
            var txt = draw.text(r[i][0]).move(35,y+5);
            // console.log(outerButton.y());
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
        radioButtons.each(function(event){
            console.log()
        });
        // callbacks
        // buttons.each(function(item){
        //     console.log(item);
        // });
        outerButton.click(function(event){
            console.log(outerButton.attr());
        });

        return{
            move: function(x, y) {
                radioButtons.move(x, y);
            }
        }

    }

    // textbox
    var Textbox = function() {
        var draw = SVG().addTo('body').size('100%','100%');
        var textbox = draw.rect(180, 25).stroke({ color:"silver", width: 2}).fill('white');
        textbox.radius(2);
        var caret = draw.rect(2,15).move(7,6).fill('gray');
        var runner = caret.animate().width(0);
        runner.loop(2000,10,10);
        caret.hide();
        var text = draw.text("").move(3,-1.5);
        textbox.click(function(event){
            caret.show();
            textbox.stroke('#3D5A80')
            //remove cntrl shift alt
            SVG.on(window, 'keyup', (event) => {
                
                // console.log(event.key);
                text.text(text.text() + event.key);
                caret.move(text.length()+3);
                // if (text.length > textbox.size()){
                //     textbox.size(textbox.x() + text.length, 25);
                // }
                
            })
        });
        


        
        
    }

    // scrollbar
    var Scrollbar = function() {
        var draw = SVG().addTo('body').size('100%','100%').height(300);
        var textbox = draw.rect(20, 150).stroke({ color:"#4E7E7A", width: 2}).fill('white');
        var upBtn = draw.rect(20, 20).stroke({ color:"#3D5A80", width: 2}).fill('white');
        var scroll = draw.rect(18, 30).fill('#9FB4D1').move(1,21);
        
        var upArrow =  draw.polyline([[30,40], [40,30], [50,40]]).fill('#BC4E76').move(20, 10).stroke({ width: 4, linecap: 'round', linejoin: 'round' }).move(0,5);
        var downBtn = draw.rect(20, 20).stroke({ color:"#3D5A80", width: 2}).fill('white').move(0,150);
        var downArrow = draw.polyline([[-30,-40], [-40,-30], [-50,-40]]).fill('#BC4E76').move(20, 10).stroke({ width: 4, linecap: 'round', linejoin: 'round' }).move(0,155);
        
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
        var textbox = draw.rect(200, 15).stroke({ color:"#3D5A80", width: 2}).fill('white');
        
    }

    var Custom = function(){
        var draw = SVG().addTo('body').size('100%','100%');
        var toggleButton = draw.group();
        var container = draw.rect(54,30).stroke({color:"#BC4E76", width: 2}).fill('white');
        var x = container.x() + 3;
        var toggle = draw.circle(25,25).stroke({color:"#BC4E76", width: 2}).fill('white').move(x,2.5);
        container.radius(15);
        
        toggleButton.add(container);
        toggleButton.add(toggle);
        toggleButton.move(10,10);

        toggle.click(function(event){
            console.log(toggle.x());
            if (toggle.x() == container.x()+3){
                container.fill("#E9C4D1");
                toggle.fill("#BC4E76");
                // toggle.animate.move(toggle.x()+23, 2.5);
                toggle.x(toggle.x()+23);
            }
            else{
                container.fill("white")
                toggle.fill('white');
                toggle.x(toggle.x()-23);
            }
            
        })
    }

return {Button, Checkbox, Radiobuttons, Textbox, Scrollbar, Progressbar, Custom}
}());

export{MyToolkit}