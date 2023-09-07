var menuicon = document.getElementById("menubaricon");
var menucontainer = document.getElementById("menubarcontainer");
var contactsection = document.getElementById("Contact");





function menubaractive(){
    menucontainer.style.display="flex";
}
function menubaroff(){
    menucontainer.style.display="none";
}
menuicon.addEventListener('click',menubaractive);
contactsection.addEventListener('click',menubaroff);