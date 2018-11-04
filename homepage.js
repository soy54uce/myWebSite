
var panels = document.getElementsByClassName('panelContent');

document.write(panels.length);

console.log(panels);
var p1 = document.getElementById("panel1");
console.log(p1);
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
