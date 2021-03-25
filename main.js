var btn = document.getElementById('button')
var menu = document.getElementById('menu1');
var menuUl = document.getElementById('menu');
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');

btn.onclick = function () {

    menuUl.classList.toggle('ul-menu');
    menu.classList.toggle('menu-screen');
    div1.classList.toggle('div1');
    div2.classList.toggle('div2');
    div3.classList.toggle('div3');


}