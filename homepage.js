
var panels = document.getElementsByClassName('panelContent');

document.write(panels.length);

console.log(panels);

var i;

for (i = 0;i < panels.length; i++) {

	console.log(panels[i]);

	panels[i].addEventListener("mouseover", function() {
		console.log("mouseon");
		panels[i].innerHTML = "hi";
	});
	
	panels[i].addEventListener("mouseout", function() {
		console.log("mouseout");
		panels[i].innerHTML = "hi";
	});
}