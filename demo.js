// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
// btn.move(100,100);
btn.setText("Click here");
// btn.setColor('red')
btn.onclick(function(e){
	console.log(e);
});

var checkbox = new MyToolkit.Checkbox;
// checkbox.move(100,100);
// checkbox.onclick(function(e){
// 	console.log(e);
// });
var radiobuttons= new MyToolkit.Radiobuttons;

var textbox = new MyToolkit.Textbox;



var progress = new MyToolkit.Progressbar;
var scroll = new MyToolkit.Scrollbar;
// scroll.move(50,0);