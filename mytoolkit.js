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
        var txt = draw.text("Button 1").fill('#F6F3F7').move(18,10);
        

        
        // customize button
        btn.radius(20);

        // add to button group
        btnGroup.add(btn);
        btnGroup.add(txt);
        txt.font('middle');
        btnGroup.move(1,5);
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
                btn.size(txt.length() + 40,40)
            },
            move: function(x, y) {
                btnGroup.move(x, y);
            },
            moveText: function(x, y) {
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
        var checkBoxGroup = draw.group()
        var clickEvent = null;

        // checkbox text
        var textpath = draw.text('Checkbox item 1').move(33, 8);
        var textpath2 = draw.text('Checkbox item 1').move(33, 50);

        // create checkbox
        var checkBox = draw.rect(25,25).stroke({ color:"pink", width: 3, linecap: 'round', linejoin: 'round' }).fill("white");
        var line2 = draw.line(0, 18, 18, 0).move(3.5, 3.5)
        var line = draw.line(0, 0, 18, 18).move(3.5, 3.5)

        var checkBox2 = draw.rect(25,25).stroke({ color:"pink", width: 4, linecap: 'round', linejoin: 'round' }).fill("white").move(0, 40);
        
        

        // customize textbox
        //#7594BD
        line.stroke({ color: '#A6C9C6', width: 3, linecap: 'round' })
        line2.stroke({ color: '#A6C9C6', width: 3, linecap: 'round' })
        checkBox.radius(2);
        checkBox2.radius(2);
    //[30,40], [50,10], [70,40], [50,60], [30,40]
    // var polyline = draw.polyline([[30,40], [40,10], [50,40]])
    // polyline.fill('#BC4E76').move(20, 10)
    // polyline.stroke({ width: 4, linecap: 'round', linejoin: 'round' })
        return{
            // move: function(x, y) {
            //     btn.move(x, y);
            // },
            // onclick: function(eventHandler){
            //     clickEvent = eventHandler
            // }
        }
    }

    // radiobutton
    var Radiobuttons = function() {
        //BAC9DE
        var draw = SVG().addTo('body').size('100%','100%');
        var text = draw.text("RadioButton 1").move(35,30);
        var text = draw.text("RadioButton 2").move(35,70);
        var text = draw.text("RadioButton 3").move(35,110);

        //create radiobuttons
        var ellipse1 = draw.ellipse(27, 27).fill('white').stroke({ color:"#c2d6d6", width: 2, linecap: 'round', linejoin: 'round' }).move(0, 20);
        var ellipse2 = draw.ellipse(19, 19).fill('#8DB9B6').move(4, 24);
        var ellipse1 = draw.ellipse(27, 27).fill('white').stroke({ color:"#c2d6d6", width: 2, linecap: 'round', linejoin: 'round' }).move(0, 60);
        var ellipse1 = draw.ellipse(27, 27).fill('white').stroke({ color:"#c2d6d6", width: 2, linecap: 'round', linejoin: 'round' }).move(0, 100);
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