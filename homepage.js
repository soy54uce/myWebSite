
var panels = document.querySelectorAll('.panelContent');
console.log(panels);
panels.forEach(panel => panel.addEventListener('click', clickFunction));

function clickFunction() {
    this.innerHTML = this.innerHTML + 'hello';
}