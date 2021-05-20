// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button;

btn.move(50,100);
btn.setText("Button 1");

btn.onclick(function(e){
	console.log(`Button: ${e}`);
});
btn.onmouseover(function(e){
	console.log(`Button: ${e}`);
});
btn.onmouseout(function(e){
	console.log(`Button: ${e}`);
});
btn.onmouseup(function(e){
	console.log(`Button: ${e}`);
});

// Mytoolkit checkbox
var cb = new MyToolkit.Checkbox;
cb.onclick(function(e){
	console.log(`Cb: ${e}`);
});
cb.onmouseover(function(e){
	console.log(`Cb: ${e}`);
});
cb.onmouseout(function(e){
	console.log(`Cb: ${e}`);
});
cb.move(50, 210);
cb.setText("Checkbox 1")

// Mytoolkit radiobutton
/**
 * The Radiobutton object accepts a list containing 
 * a string for custom labeling
 * and a boolean denoting whether a button is checked.
 * If the user passes in more than one checked state, 
 * the last button passed in as checked will remain in checked state 
 * while the rest will be unchecked.
 */
var r = []
r.push(["Radiobutton 1", false])
r.push(["Radiobutton 2", false])
r.push(["Radiobutton 3", false])
r.push(["Radiobutton 4", false])
r.push(["Radiobutton 5", false])

let rb1 = new MyToolkit.Radiobuttons(r);
rb1.move(50,300);
// r.onclick(function(e){
// 	console.log(e);
// });

rb1.onclick(function(e){
	console.log(`RadioButton: ${e}`);
});
rb1.onmouseover(function(e){
	console.log(`RadioButton: ${e}`);
});
rb1.onmouseout(function(e){
	console.log(`RadioButton: ${e}`);
});

// Mytoolkit textbox
var tb = new MyToolkit.Textbox;
tb.move(300, 100)
tb.onmouseover(function(e){
	console.log(`Tb: ${e}`);
});
tb.onmouseout(function(e){
	console.log(`Tb: ${e}`);
});
tb.keypressed(function(e){
	console.log(`Tb: Pressed key ${e}`);
});
tb.getInput(function(e){
	console.log(`Tb: Entered ${e}`);
});

// Mytoolkit Progressbar
/**
 * Default increment is set at 0.
 */
var pb1 = new MyToolkit.Progressbar;
pb1.setIncrement(23);
pb1.getIncrement();
pb1.move(300, 160);
pb1.setWidth(10);

//Mytoolkit Scrollbar
var scroll = new MyToolkit.Scrollbar;
scroll.move(480,200);
scroll.getThumbPosition();
// scroll.setHeight(500);
scroll.onclick(function(e){
	console.log(`Sb: ${e}`);
});
scroll.onmouseover(function(e){
	console.log(`Sb: ${e}`);
});
scroll.onmouseout(function(e){
	console.log(`Sb: ${e}`);
});

// Mytoolkit togglebutton
var toggle = new MyToolkit.Toggle;
toggle.move(300,300);
toggle.onclick(function(e){
	console.log(`ToggleButton: ${e}`);
});
toggle.onmouseover(function(e){
	console.log(`ToggleButton: ${e}`);
});
toggle.onmouseout(function(e){
	console.log(`ToggleButton: ${e}`);
});