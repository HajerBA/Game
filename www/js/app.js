//use strict

/*play song*/
document.getElementById('btnplay').onclick = function() {
  document.getElementById('player').play();
  return false;
}
document.getElementById('btnpause').onclick = function() {
  document.getElementById('player').pause();
  return false;
}
/**
 * 
 */
let temp=document.querySelector("#temp");
let cry=document.querySelector("#cry");
let weight=document.querySelector("#weight");
let happy=document.querySelector("#happiness");


let imgdoct = document.querySelector("#imgdoct");
let butwelcome = document.querySelector("#buToWelcome");

butwelcome.addEventListener('click', function (event) {
 event.preventDefault();

  imgdoct.style.display = 'block';
  imgdoct.style.left;
  imgdoct.style.top;
  
  happy.style.color="red";
  happy.textContent="Happiness: 90 %";

  let accDiv = document.querySelector("#accDiv");
  let bull = document.querySelector("#talkDoct");
  bull.style.display="inline-block";
  bull.style.marginLeft="46px";
  bull.style.marginTop="-26px";
  let p=document.querySelector("#talkDoct p");
  p.textContent="Fares c'est à vous";
});

//pour les interactions
let newDoc = new Doctor();
let newBbPatient = new BabyPatient();

//newDoc.toNote(newBbPatient);

let tonote=document.querySelector("#butToNote");
tonote.addEventListener('click',function (event) {
  event.preventDefault();
  newDoc.toNote(newBbPatient);
});
let toExam=document.querySelector("#butToExamine");
toExam.addEventListener('click',function (event) {
  event.preventDefault();
  newDoc.toExamine(newBbPatient);
});
let toWeigh=document.querySelector("#butToWeigh");
toWeigh.addEventListener('click',function (event) {
  event.preventDefault();
  newDoc.toWeigh(newBbPatient);
});
