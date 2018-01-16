//use strict
let imgexit=document.querySelector("#imgexit");

imgexit.addEventListener('click',function fermerFenetreCourante()
{
  window.close();
});

let imginst=document.querySelector("#instruction");

imginst.addEventListener('click',function fermerFenetreCourante()
{
 alert();//msgbox
});

//pour les interactions
let newDoc=new Doctor();
let newBbPatient= new BabyPatient();

newDoc.toNote(newBbPatient);
