// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button;

btn.move(50,100);
btn.setText("Button 1");
// btn.setColor('red')
btn.onclick(function(e){
	console.log(e);
});

// Mytoolkit checkbox
var checkbox = new MyToolkit.Checkbox;
var checkbox2 = new MyToolkit.Checkbox;
checkbox.move(50, 200);
checkbox2.move(50, 250);
checkbox.setText("New Checkbox")
// var checkbox2 = new MyToolkit.Checkbox;
// checkbox.onclick(function(e){
// 	console.log(e);
// });

// Mytoolkit radiobutton
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

// Mytoolkit textbox
var tb = new MyToolkit.Textbox;
tb.move(300, 100)



var pb1 = new MyToolkit.Progressbar;
pb1.setIncrement(23);
pb1.getIncrement();
// pb1.move(200,80);
// pb1.size(200,10)
// setInterval(inc, 1000);
// 	let p = 0;
// 	function inc(){
// 		p += 20;
// 		if (p>200){
// 		p = 0;
// 		pb1.progress(p)
// 	}
// 	else{
// 		pb1.progress(20)
// 	}
// }
pb1.move(300, 160);
var scroll = new MyToolkit.Scrollbar;
scroll.move(450,200);
var toggle = new MyToolkit.Custom;
toggle.move(300,300);