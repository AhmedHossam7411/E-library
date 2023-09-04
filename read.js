var filterbydate=document.getElementById("date-title");
var filterbyletter=document.getElementById("letter-title");
var filterbygenre=document.getElementById("genre-title");
var filtericon=document.getElementById("filtericon");
var filtercontainer=document.getElementById("filtercontainer");
var closefilter=document.getElementById("closefilter");
var datebody=document.getElementById("datebody");
var letterbody=document.getElementById("letterbody");
var applybtn=document.getElementById("applybtn");
var AZ=document.getElementById("A-Z");
var ZA=document.getElementById("Z-A");
var filterresponse=document.getElementById("filterresponse");

fnDate();
function fnDate(){
    filterbygenre.style.textDecoration="none";
    filterbyletter.style.textDecoration="none";
    filterbydate.style.textDecoration="underline";
    filterbydate.style.textDecorationThickness="3px";
    filterbydate.style.textUnderlineOffset="3px";
    datebody.style.display="flex";
    letterbody.style.display="none";
}
function fnGenre(){
    filterbyletter.style.textDecoration="none";
    filterbydate.style.textDecoration="none";
    filterbygenre.style.textDecoration="underline";
    filterbygenre.style.textDecorationThickness="3px";
    filterbygenre.style.textUnderlineOffset="3px";
    datebody.style.display="none";
    letterbody.style.display="none";
}
function fnLetter(){
    filterbygenre.style.textDecoration="none";
    filterbydate.style.textDecoration="none";
    filterbyletter.style.textDecoration="underline";
    filterbyletter.style.textDecorationThickness="3px";
    filterbyletter.style.textUnderlineOffset="3px";
    datebody.style.display="none";
    letterbody.style.display="flex";
}
function showfiltercard() {
    filtercontainer.style.display="block";
}
function closefiltercard() {
    filtercontainer.style.display="none";
}
function apply(){
    filtercontainer.style.display="none";
    AZ.style.backgroundColor="white";
    AZ.style.color="#1b3a2f";
    ZA.style.backgroundColor="white";
    ZA.style.color="#1b3a2f";
}
function AZfun(){
AZ.style.backgroundColor="#1b3a2f";
AZ.style.color="white";
ZA.style.backgroundColor="white";
ZA.style.color="#1b3a2f";

}
function ZAfun(){
    ZA.style.backgroundColor="#1b3a2f";
    ZA.style.color="white";
    AZ.style.backgroundColor="white";
    AZ.style.color="#1b3a2f";
    
}

filterbydate.addEventListener('click',fnDate);
filterbyletter.addEventListener('click',fnLetter);
filterbygenre.addEventListener('click',fnGenre);
filtericon.addEventListener('click',showfiltercard);
closefilter.addEventListener('click',closefiltercard);
applybtn.addEventListener('click',apply);
AZ.addEventListener('click',AZfun);
ZA.addEventListener('click',ZAfun);