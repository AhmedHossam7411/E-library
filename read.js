var filterbydate=document.getElementById("date-title");
var filterbyletter=document.getElementById("letter-title");
var filtericon=document.getElementById("filtericon");
var filtercontainer=document.getElementById("filtercontainer");
var closefilter=document.getElementById("closefilter");
var datebody=document.getElementById("datebody");
var letterbody=document.getElementById("letterbody");
var applybtn=document.getElementById("applybtn");
var AZ=document.getElementById("A-Z");
var ZA=document.getElementById("Z-A");
var filterresponse=document.getElementById("filterresponse");
var menuicon = document.getElementById("menubaricon");
var menucontainer = document.getElementById("menubarcontainer");
var readsection = document.getElementById("readsection");
var AZbooks =  document.getElementById("AZbooks");
var ZAbooks =  document.getElementById("ZAbooks");
var A1 =  document.getElementById("A1");
var A2 =  document.getElementById("A2");
var A3 =  document.getElementById("A3");
var A4 =  document.getElementById("A4");
var B1 =  document.getElementById("B1");
var B2 =  document.getElementById("B2");
var B3 =  document.getElementById("B3");
var B4 =  document.getElementById("B4");
var ZA1 =  document.getElementById("ZA1");
var ZA2 =  document.getElementById("ZA2");
var ZA3 =  document.getElementById("ZA3");
var ZA4 =  document.getElementById("ZA4");
var ZB1 =  document.getElementById("ZB1");
var ZB2 =  document.getElementById("ZB2");
var ZB3 =  document.getElementById("ZB3");
var ZB4 =  document.getElementById("ZB4");
var isAz=true;

fnDate();
function fnDate(){
    filterbyletter.style.textDecoration="none";
    filterbydate.style.textDecoration="underline";
    filterbydate.style.textDecorationThickness="3px";
    filterbydate.style.textUnderlineOffset="3px";
    datebody.style.display="flex";
    letterbody.style.display="none";
}
function fnLetter(){
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
    AZ.style.backgroundColor="black";
    AZ.style.color="#fff";
    ZA.style.backgroundColor="black";
    ZA.style.color="#fff";
    if(isAz==false){
        ZAbooks.style.display="block";
        AZbooks.style.display="none";  
    }
    else{
        AZbooks.style.display="block";
        ZAbooks.style.display="none";
    }
}
function AZfun(){
AZ.style.backgroundColor="#1b3a2f";
AZ.style.color="white";
ZA.style.backgroundColor="black";
ZA.style.color="white";
isAz=true;

}
function ZAfun(){
    ZA.style.backgroundColor="#1b3a2f";
    ZA.style.color="white";
    AZ.style.backgroundColor="black";
    AZ.style.color="white";
    isAz=false; 
}



filterbydate.addEventListener('click',fnDate);
filterbyletter.addEventListener('click',fnLetter);
filtericon.addEventListener('click',showfiltercard);
closefilter.addEventListener('click',closefiltercard);
applybtn.addEventListener('click',apply);
AZ.addEventListener('click',AZfun);
ZA.addEventListener('click',ZAfun);

A1.addEventListener('click',A1info);
A2.addEventListener('click',A2info);
A3.addEventListener('click',A3info);
A4.addEventListener('click',A4info);
B1.addEventListener('click',B1info);
B2.addEventListener('click',B2info);
B3.addEventListener('click',B3info);
B4.addEventListener('click',B4info);

ZA1.addEventListener('click',A1info);
ZA2.addEventListener('click',A2info);
ZA3.addEventListener('click',A3info);
ZA4.addEventListener('click',A4info);
ZB1.addEventListener('click',B1info);
ZB2.addEventListener('click',B2info);
ZB3.addEventListener('click',B3info);
ZB4.addEventListener('click',B4info);

function A1info(){
   A1.style.color="red";
   ZA1.style.color="red";
}
function A2info(){
    A2.style.color="red";
    ZA2.style.color="red";
 
 }
 function A3info(){
    A3.style.color="red";
    ZA3.style.color="red";
    
 }
 function A4info(){
    A4.style.color="red";
    ZA4.style.color="red";
 }
 function B1info(){
    B1.style.color="red";
    ZB1.style.color="red";
   
 }
 function B2info(){
     B2.style.color="red";
     ZB2.style.color="red";
  }
  function B3info(){
     B3.style.color="red";
     ZB3.style.color="red";
  }
  function B4info(){
     B4.style.color="red";
     ZB4.style.color="red";
  }


menuicon.addEventListener('click',menubaractive);
readsection.addEventListener('click',menubaroff);
window.addEventListener('scroll',menubaroff);

function menubaractive(){
    menucontainer.style.display="flex";
   
}
function menubaroff(){
    menucontainer.style.display="none";
}

    