class Doctor extends Person {

    constructor(name, surname) {
        super(name, surname, 100, 100);
        this.currentPatient = null;
    }
    toNote(patient) {
        //write on database
        let firstTime = true;
        this.currentPatient = patient;
        let accDiv = document.querySelector("#accDiv");
        let mumy =document.querySelector("#mumy");
        let doct =document.querySelector("#imgdoct");

        mumy.className='';
        mumy.classList.add('moveToAccueil');
        doct.className='';
        doct.classList.add('moveToAccueill');
        //a refaire inchala
/*<div class="talk-bubble tri-right round btm-left-in">
  <div class="talktext">
    <p>Now we add a border and it looks like a comic. Uses .border .round and .btm-left-in</p>
  </div>
</div> :pour docror */
/*npour maman: je laisse celui la et j'enleve bordur du doct ou tcolorer etcc inchala: 
<div class="talk-bubble tri-right round right-in">
  <div class="talktext">
    <p>Moving our way back up the right side indented. Uses .round and .right-in</p>
  </div>
</div>*/

        /* ancien code : let bull = document.createElement("div");
        bull.class='talk-bubble tri-right round btm-left';

        let divtalk=document.createElement("div");
        divtalk.class='talktext';

        let p=document.createElement("p");
        p.textContent="Moving our way back up the right side indented. Uses .round and .right-in";

        divtalk.appendChild(p);
        bull.appendChild(divtalk);
        accDiv.appendChild(bull);
*/

    }
    toExamine() {
        //mesurer temperature l'image du diff state de bebe
    }
    toWeigh() {

    }
    toVaccine() {

    }
    toWriteOrder() {

    }
}
