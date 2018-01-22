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
  let bull = document.createElement("div");
  bull.style.display="inline-block";
  bull.style.position="absolute";
  //bull.classList.add("talk-bubble tri-right round btm-left-in");
  bull.style.zIndex="2px";
  bull.style.paddingLeft="55px";
  bull.style.paddingTop="20px";
  bull.style.backgroundColor="rgb(235, 235, 149)";
  
  
  

  let divtalk=document.createElement("div");
  divtalk.class='talktext';

  let p=document.createElement("p");
  p.textContent="Fares c'est à vous";

  divtalk.appendChild(p);
  bull.appendChild(divtalk);
  accDiv.appendChild(bull);
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
