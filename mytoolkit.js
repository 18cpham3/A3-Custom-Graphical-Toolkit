import {SVG} from './svg.min.js';

var MyToolkit = (function() {
    //Button widget 
    
    var Button = function(){
        var draw = SVG().addTo('body').size('100%','100%');
        var clickEvent = null
        
        // group button components
        var btnGroup = draw.group();
        
        // create button
        var btn = draw.rect(80,35).fill("#BC4E76");
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
        var draw = SVG().addTo('body').size('100%','100%');
        var checkbox = draw.group()
        var checkBox1 = draw.group()
        var check = draw.group()
        var clickEvent = null;
        var check;


        // checkbox text
        var txt = draw.text('Checkbox item').move(33, 8);
        // create checkbox
        var box = draw.rect(25,25).stroke({ color:"#BC4E76", width: 3, linecap: 'round', linejoin: 'round' }).fill("white");
        var line = draw.line(0, 0, 18, 18).move(3.5, 3.5).stroke({ color: '#A6C9C6', width: 2, linecap: 'round' })
        var line2 = draw.line(0, 18, 18, 0).move(3.5, 3.5).stroke({ color: '#A6C9C6', width: 2, linecap: 'round' })
        
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
            box.stroke({color: '#BC4E76', width: 3, linecap: 'round', linejoin: 'round' })
            line.stroke({ color:"#A6C9C6", width: 2, linecap: 'round', linejoin: 'round' }).fill("white");
            line2.stroke({ color:"#A6C9C6", width: 2, linecap: 'round', linejoin: 'round' }).fill("white");
        })
        // btnGroup.mouseup(function(){
        //     btn.fill({ color: 'orange'})
        // })
        checkBox1.click(function(event){
            // console.log(check.visible());
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
    var Radiobuttons = function(num) {
        // BAC9DE
        var radiobuttons = new Array(num);
        var draw = SVG().addTo('body').size('100%','100%');
        var radiobuttons = draw.group();
        var radiobutton1 = draw.group();
        var y = 0;
        var buttony = 0;
        
        for (var i = 0; i < num; i++){
            y += 40;
            radiobutton1.add(draw.text("RadioButton " + (i+1)).move(35,y));
            radiobutton1.add(draw.circle(27).fill('white').stroke({ color:"#c2d6d6", width: 2, linecap: 'round', linejoin: 'round' }).move(0, y));
            radiobuttons.add(radiobutton1);
            radiobuttons.add(draw.circle(19).fill('#8DB9B6').move(4, y+4));
        }

        //callbacks
        radiobutton1.click(function(event){
            
                button.y(radiobutton1.y() + 4)
        
            // if(clickEvent != null){
            //     clickEvent(event)
            // }
        })
        // radiobutton2.click(function(event){
        //         button.y(radiobutton2.y() + 4)
                
        //     // if(clickEvent != null){
        //     //     clickEvent(event)
        //     // }
        // })
        // radiobutton3.click(function(event){
        //     // console.log(button.visible());
        //         button.y(radiobutton3.y() + 4)
        //     // if(clickEvent != null){
        //     //     clickEvent(event)
        //     // }
        // })
        

        return {
            // move: function(x, y) {
            //     btn.move(x, y);
            // },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            }
            
        }

    }

    // textbox
    var Textbox = function() {
        var draw = SVG().addTo('body').size('100%','100%');
        var textbox = draw.rect(180, 25).stroke({ color:"#0EB1D2", width: 2}).fill('white');
        textbox.radius(2);
    }

    // scrollbar
    var Scrollbar = function() {
        var draw = SVG().addTo('body').size('100%','100%');
        var textbox = draw.rect(20, 150).stroke({ color:"#4E7E7A", width: 2}).fill('white');
        var upBtn = draw.rect(20, 20).stroke({ color:"#3D5A80", width: 2}).fill('white');
        var downBtn = draw.rect(20, 20).stroke({ color:"#3D5A80", width: 2}).fill('white');
        // var upArrow
        // var downArrow
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
    }

return {Button, Checkbox, Radiobuttons, Textbox, Scrollbar, Progressbar, Custom}
}());

export{MyToolkit}