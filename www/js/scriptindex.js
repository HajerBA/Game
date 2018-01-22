
let imgexit = document.querySelector("#imgexit");

imgexit.addEventListener('click', function fermerFenetreCourante() {
  window.close();
});

document.getElementById('btnplay').onclick = function() {
  document.getElementById('player').play();
  return false;
}
document.getElementById('btnpause').onclick = function() {
  document.getElementById('player').pause();
  return false;
}