var filterbydate=document.getElementById("date-title");
var filterbyletter=document.getElementById("letter-title");
var filterbygenre=document.getElementById("genre-title");
var filtericon=document.getElementById("filtericon");
var filtercontainer=document.getElementById("filtercontainer");
var closefilter=document.getElementById("closefilter");
var datebody=document.getElementById("datebody");

fnDate();
function fnDate(){
    filterbygenre.style.textDecoration="none";
    filterbyletter.style.textDecoration="none";
    filterbydate.style.textDecoration="underline";
    filterbydate.style.textDecorationThickness="3px";
    filterbydate.style.textUnderlineOffset="3px";
    datebody.style.display="flex";
}
function fnGenre(){
    filterbyletter.style.textDecoration="none";
    filterbydate.style.textDecoration="none";
    filterbygenre.style.textDecoration="underline";
    filterbygenre.style.textDecorationThickness="3px";
    filterbygenre.style.textUnderlineOffset="3px";
    datebody.style.display="none";
}
function fnLetter(){
    filterbygenre.style.textDecoration="none";
    filterbydate.style.textDecoration="none";
    filterbyletter.style.textDecoration="underline";
    filterbyletter.style.textDecorationThickness="3px";
    filterbyletter.style.textUnderlineOffset="3px";
    datebody.style.display="none";
}
function showfiltercard() {
    filtercontainer.style.display="block";
}
function closefiltercard() {
    filtercontainer.style.display="none";
}


filterbydate.addEventListener('click',fnDate);
filterbyletter.addEventListener('click',fnLetter);
filterbygenre.addEventListener('click',fnGenre);
filtericon.addEventListener('click',showfiltercard);
closefilter.addEventListener('click',closefiltercard);