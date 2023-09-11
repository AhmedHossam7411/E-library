var menuicon = document.getElementById("menubaricon");
var menucontainer = document.getElementById("menubarcontainer");
var homesection = document.getElementById("main");

function menubaractive(){
    menucontainer.style.display="flex";
}
function menubaroff(){
    menucontainer.style.display="none";
}
menuicon.addEventListener('click',menubaractive);
homesection.addEventListener('click',menubaroff);
window.addEventListener('scroll',menubaroff);