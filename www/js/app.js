//use strict

/*play song*/
document.getElementById('btnplay').onclick = function () {
  document.getElementById('player').play();
  return false;
}
document.getElementById('btnpause').onclick = function () {
  document.getElementById('player').pause();
  return false;
}
/**
 * 
 */
let temp = document.querySelector("#temp");
let cry = document.querySelector("#cry");
let weight = document.querySelector("#weight");
let happy = document.querySelector("#happiness");
let progCry = document.querySelector("#progCry");
let progHapy = document.querySelector("#progHapy");

let imgdoct = document.querySelector("#imgdoct");
let butwelcome = document.querySelector("#buToWelcome");

butwelcome.addEventListener('click', function (event) {
  event.preventDefault();

  imgdoct.style.display = 'block';
  imgdoct.style.left;
  imgdoct.style.top;

  progHapy.style.color = "red";
  progHapy.setAttribute("value","90");

  let accDiv = document.querySelector("#accDiv");
  let bull = document.querySelector("#talkDoct");
  bull.style.display = "inline-block";
  bull.style.marginLeft = "48px";
  bull.style.top = "-20px";
  let nomBb = prompt("Give a name");

  let p = document.querySelector("#talkDoct p");
  p.textContent = nomBb + " that's for you";
});

//pour les interactions
let newDoc = new Doctor();
let newBbPatient = new BabyPatient();

//newDoc.toNote(newBbPatient);

let tonote = document.querySelector("#butToNote");
tonote.addEventListener('click', function (event) {
  event.preventDefault();
  newDoc.toNote(newBbPatient);
});
let toExam = document.querySelector("#butToExamine");
toExam.addEventListener('click', function (event) {
  event.preventDefault();
  newDoc.toExamine(newBbPatient);
});
let toWeigh = document.querySelector("#butToWeigh");
toWeigh.addEventListener('click', function (event) {
  event.preventDefault();
  newDoc.toWeigh(newBbPatient);
});

let toVaccin = document.querySelector("#butVaccin");
toVaccin.addEventListener('click', function (event) {
  event.preventDefault();
  newDoc.toVaccine(newBbPatient);
});
let toOrder = document.querySelector("#butOrder");
toOrder.addEventListener('click', function (event) {
  event.preventDefault();
  newDoc.toWriteOrder(newBbPatient);
});
let toHome = document.querySelector("#butHome");
toHome.addEventListener('click', function (event) {
  event.preventDefault();
  newBbPatient.backHome();
});
let replay = document.querySelector("#butReplay");
replay.addEventListener('click', function (event) {
  event.preventDefault();
  window.location.reload();
});

