// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
btn.move(100,100);
btn.setText("Button 1");
// btn.setColor('red')
btn.onclick(function(e){
	console.log(e);
});

// Mytoolkit checkbox
var checkbox = new MyToolkit.Checkbox;
checkbox.move(100, 20);
checkbox.setText("Write svg checkbox code")
// var checkbox2 = new MyToolkit.Checkbox;
// checkbox.onclick(function(e){
// 	console.log(e);
// });

// Mytoolkit radiobutton
var radiobuttons= new MyToolkit.Radiobuttons(2);

// Mytoolkit textbox
var textbox = new MyToolkit.Textbox;



var progress = new MyToolkit.Progressbar;
var scroll = new MyToolkit.Scrollbar;
// scroll.move(50,0);