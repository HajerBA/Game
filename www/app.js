//use strict


let imgdoct = document.querySelector("#imgdoct");
let butwelcome = document.querySelector("#butwelcome");

butwelcome.addEventListener('click', function (event) {
 event.preventDefault();

  imgdoct.style.display = 'block';
  //imgdoct.style.image-orientation= 'flip';
});

//pour les interactions
let newDoc = new Doctor();
let newBbPatient = new BabyPatient();

newDoc.toNote(newBbPatient);
