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
var Aimg1 = document.getElementById("Aimg1");
var Aimg2 = document.getElementById("Aimg2");
var Aimg3 = document.getElementById("Aimg3");
var Aimg4 = document.getElementById("Aimg4");
var Bimg1 = document.getElementById("Bimg1");
var Bimg2 = document.getElementById("Bimg2");
var Bimg3 = document.getElementById("Bimg3");
var Bimg4 = document.getElementById("Bimg4");
var ZAimg1 = document.getElementById("ZAimg1");
var ZAimg2 = document.getElementById("ZAimg2");
var ZAimg3 = document.getElementById("ZAimg3");
var ZAimg4 = document.getElementById("ZAimg4");
var ZBimg1 = document.getElementById("ZBimg1");
var ZBimg2 = document.getElementById("ZBimg2");
var ZBimg3 = document.getElementById("ZBimg3");
var ZBimg4 = document.getElementById("ZBimg4");
var readnow = document.getElementById("readnow");
var notnow = document.getElementById("notnow");
var readnowb = document.getElementById("readnowb");
var notnowb = document.getElementById("notnowb");
var notnowza =  document.getElementById("notnowza");
var notnowzb =  document.getElementById("notnowzb")
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

notnow.addEventListener('click',defaultA);
notnowb.addEventListener('click',defaultB);
notnowza.addEventListener('click',defaultA);
notnowzb.addEventListener('click',defaultB);

function defaultA(){
   A1.style.display="flex";
   A2.style.display="flex";
   A3.style.display="flex";
   A4.style.display="flex";
   ZA1.style.display="flex";
   ZA2.style.display="flex";
   ZA3.style.display="flex";
   ZA4.style.display="flex";
   document.getElementById("i1").style.display="flex";
   document.getElementById("zi1").style.display="flex";
   document.getElementById("i2").style.display="flex";
   document.getElementById("zi2").style.display="flex";
   document.getElementById("i3").style.display="flex";
   document.getElementById("zi3").style.display="flex";
   document.getElementById("i4").style.display="flex";
   document.getElementById("zi4").style.display="flex";
   Aimg1.style.display="flex";
   Aimg2.style.display="flex";
   Aimg3.style.display="flex";
   Aimg4.style.display="flex";
   ZAimg1.style.display="flex";
   ZAimg2.style.display="flex";
   ZAimg3.style.display="flex";
   ZAimg4.style.display="flex";
   readnow.style.display="none";  
   notnow.style.display="none";
   document.getElementById("wiki").style.display="none";
   document.getElementById("wikiza").style.display="none";
   document.getElementById("notnowza").style.display="none";
   document.getElementById("readnowza").style.display="none";
}
function defaultB(){
    B1.style.display="flex";
    B2.style.display="flex";
    B3.style.display="flex";
    B4.style.display="flex";
    ZB1.style.display="flex";
    ZB2.style.display="flex";
    ZB3.style.display="flex";
    ZB4.style.display="flex";
    document.getElementById("ib1").style.display="flex";
    document.getElementById("zib1").style.display="flex";
    document.getElementById("ib2").style.display="flex";
    document.getElementById("zib2").style.display="flex";
    document.getElementById("ib3").style.display="flex";
    document.getElementById("zib3").style.display="flex";
    document.getElementById("ib4").style.display="flex";
    document.getElementById("zib4").style.display="flex";
    Bimg1.style.display="flex";
    Bimg2.style.display="flex";
    Bimg3.style.display="flex";
    Bimg4.style.display="flex";
    ZBimg1.style.display="flex";
    ZBimg2.style.display="flex";
    ZBimg3.style.display="flex";
    ZBimg4.style.display="flex";
    readnowb.style.display="none";  
    notnowb.style.display="none";
    notnowzb.style.display="none";
    document.getElementById("readnowzb").style.display="none"
    document.getElementById("wikib").style.display="none";
    document.getElementById("wikizb").style.display="none";
 }
 
function A1info(){
   A1.style.display="none";
   ZA1.style.display="none";
   document.getElementById("i1").style.display="none";
   document.getElementById("zi1").style.display="none";
   Aimg2.style.display="none";
   Aimg3.style.display="none";
   Aimg4.style.display="none";
   ZAimg2.style.display="none";
   ZAimg3.style.display="none";
   ZAimg4.style.display="none";
   readnow.style.display="flex";
   notnow.style.display="flex";
   document.getElementById("readnowza").style.display="flex";
   document.getElementById("notnowza").style.display="flex";
   document.getElementById("wiki").style.display="flex";
   document.getElementById("wikiza").style.display="flex";
   document.getElementById("wiki").href="";
   document.getElementById("wikiza").href="";
}
function A2info(){
    A2.style.display="none";
    ZA2.style.display="none";
    document.getElementById("i2").style.display="none";
    document.getElementById("zi2").style.display="none";
    Aimg1.style.display="none";
    Aimg3.style.display="none";
    Aimg4.style.display="none";
    ZAimg1.style.display="none";
    ZAimg3.style.display="none";
    ZAimg4.style.display="none";
    readnow.style.display="flex";
    notnow.style.display="flex";
    document.getElementById("readnowza").style.display="flex";
    document.getElementById("notnowza").style.display="flex";
    document.getElementById("wiki").style.display="flex";
    document.getElementById("wikiza").style.display="flex";
    document.getElementById("wiki").href="";
    document.getElementById("wikiza").href="";
 }
 function A3info(){
    A3.style.display="none";
    ZA3.style.display="none";
    document.getElementById("i3").style.display="none";
    document.getElementById("zi3").style.display="none";
    Aimg1.style.display="none";
    Aimg2.style.display="none";
    Aimg4.style.display="none";
    ZAimg1.style.display="none";
    ZAimg2.style.display="none";
    ZAimg4.style.display="none";
    readnow.style.display="flex";
    notnow.style.display="flex";
    document.getElementById("readnowza").style.display="flex";
    document.getElementById("notnowza").style.display="flex";
    document.getElementById("wiki").style.display="flex";
    document.getElementById("wikiza").style.display="flex";
    document.getElementById("wiki").href="";
    document.getElementById("wikiza").href="";
 }
 function A4info(){
    A4.style.display="none";
    ZA4.style.display="none";
    document.getElementById("i4").style.display="none";
    document.getElementById("zi4").style.display="none";
    Aimg1.style.display="none";
    Aimg2.style.display="none";
    Aimg3.style.display="none";
    ZAimg3.style.display="none";
    ZAimg1.style.display="none";
    ZAimg2.style.display="none";
    readnow.style.display="flex";
   notnow.style.display="flex";
   document.getElementById("readnowza").style.display="flex";
   document.getElementById("notnowza").style.display="flex";
   document.getElementById("wiki").style.display="flex";
   document.getElementById("wikiza").style.display="flex";
   document.getElementById("wiki").href="";
   document.getElementById("wikiza").href="";
   
 }
 function B1info(){
    B1.style.display="none";
    ZB1.style.display="none";
   document.getElementById("ib1").style.display="none";
   document.getElementById("zib1").style.display="none";
   Bimg2.style.display="none";
   Bimg3.style.display="none";
   Bimg4.style.display="none";
   ZBimg2.style.display="none";
   ZBimg3.style.display="none";
   ZBimg4.style.display="none";
   readnowb.style.display="flex";
   notnowb.style.display="flex";
   document.getElementById("readnowzb").style.display="flex";
   document.getElementById("notnowzb").style.display="flex";
   document.getElementById("wikib").style.display="flex";
   document.getElementById("wikizb").style.display="flex";
   document.getElementById("wikib").href="";
   document.getElementById("wikizb").href="";

 }
 function B2info(){
     B2.style.display="none";
     ZB2.style.display="none";
     document.getElementById("ib2").style.display="none";
    document.getElementById("zib2").style.display="none";
    Bimg1.style.display="none";
    Bimg3.style.display="none";
    Bimg4.style.display="none";
    ZBimg1.style.display="none";
    ZBimg3.style.display="none";
    ZBimg4.style.display="none";
    readnowb.style.display="flex";
    notnowb.style.display="flex";
    document.getElementById("readnowzb").style.display="flex";
    document.getElementById("notnowzb").style.display="flex";
    document.getElementById("wikib").style.display="flex";
    document.getElementById("wikizb").style.display="flex";
    document.getElementById("wikib").href="";
    document.getElementById("wikizb").href="";
  }
  function B3info(){
     B3.style.display="none";
     ZB3.style.display="none";
     document.getElementById("ib3").style.display="none";
     document.getElementById("zib3").style.display="none";
     Bimg1.style.display="none";
     Bimg2.style.display="none";
     Bimg4.style.display="none";
     ZBimg1.style.display="none";
     ZBimg2.style.display="none";
     ZBimg4.style.display="none";
     readnowb.style.display="flex";
     notnowb.style.display="flex";
     document.getElementById("readnowzb").style.display="flex";
     document.getElementById("notnowzb").style.display="flex";
     document.getElementById("wikib").style.display="flex";
     document.getElementById("wikizb").style.display="flex";
     document.getElementById("wikib").href="";
     document.getElementById("wikizb").href="";
 
  }
  function B4info(){
     B4.style.display="none";
     ZB4.style.display="none";
     document.getElementById("ib4").style.display="none";
     document.getElementById("zib4").style.display="none";
     Bimg1.style.display="none";
     Bimg2.style.display="none";
     Bimg3.style.display="none";
     ZBimg3.style.display="none";
     ZBimg1.style.display="none";
     ZBimg2.style.display="none";
     readnowb.style.display="flex";
     notnowb.style.display="flex";
     document.getElementById("readnowzb").style.display="flex";
     document.getElementById("notnowzb").style.display="flex";
     document.getElementById("wikib").style.display="flex";
     document.getElementById("wikizb").style.display="flex";
     document.getElementById("wikib").href="";
     document.getElementById("wikizb").href="";
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

    