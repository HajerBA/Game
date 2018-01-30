class Doctor extends Person {

    constructor(name, surname) {
        super(name, surname, 100, 100);
        this.currentPatient = null;
        this.spritDoct = document.querySelector("#imgdoct");
        this.spritBaby = document.querySelector("#spritBB");
        this.temp = document.querySelector("#temp");
        this.cry = document.querySelector("#cry");
        this.weight = document.querySelector("#weight");
        this.happy = document.querySelector("#happiness");
        this.bull = document.querySelector("#talkDoct");
        this.p = document.querySelector("#talkDoct p");
        this.bullMum = document.querySelector("#talkMum");
    }

    toNote(patient) {
        //write on database
        let firstTime = true;
        this.currentPatient = patient;


        happy.style.color = "red";
        happy.textContent = "Happiness: 60 %";
        cry.style.color = "red";
        cry.textContent = "Crying: 20 %";

        let accDiv = document.querySelector("#accDiv");
        let mumy = document.querySelector("#mumy");
        let doct = document.querySelector("#imgdoct");

        mumy.className = '';
        mumy.classList.add('moveToAccueil');
        //doct.className='';
        doct.classList.add("doctAccueil");
        this.bull.style.display = "inline-block";
        this.bull.style.marginLeft = "54px";
        this.bull.style.marginTop = "-20px";
        this.bull.style.zIndex = 2;
        this.p.textContent = "How is he doing today?";
        let talkMum = document.addEventListener("keypress", function (event) {
            if (event.keyCode === 13) {
                let bull = document.querySelector("#talkDoct");
                bull.style.display = 'none';
                let bullMum = document.querySelector("#talkMum");
                bullMum.style.display = "inline-block";
                bullMum.style.position = "absolute";
                bullMum.style.marginLeft = "588px";
                bullMum.style.marginTop = "-10px";
                bullMum.style.zIndex = 2;
                let p = document.querySelector("#talkMum p");
                p.textContent = "he has fever and coughs a little";
            }

        });



    }
    toExamine() {
        //mesurer temperature l'image du diff state de bebe
        let mumy = document.querySelector("#mumy");
        mumy.style.display = "none";
        let bullMum = document.querySelector("#talkMum");
        let spritDoct = document.querySelector("#imgdoct");
        let spritBaby = document.querySelector("#spritBB");
        let temp = document.querySelector("#temp");
        let cry = document.querySelector("#cry");
        let weight = document.querySelector("#weight");
        let happy = document.querySelector("#happiness");

        bullMum.style.display = "none";

        happy.style.color = "red";
        happy.textContent = "Happiness: 0 %";
        cry.style.color = "green";
        cry.textContent = "Crying: 70 %";
        temp.style.color = "red";
        temp.textContent = "Temperature: 39°c";

        spritBaby.style.display = "block";
        spritBaby.classList.add("bbExam");
        spritDoct.classList.add("doctExam");
        let bull = document.querySelector("#talkDoct");
        bull.style.display = "inline-block";
        bull.style.marginLeft = "42px";
        bull.style.top = "-40px";
        bull.style.zIndex = 2;
        this.p.textContent = "Calm down my little loulou";
    }
    toWeigh() {
        let mumy = document.querySelector("#mumy");
        mumy.style.display = "none";
        this.bull.style.display = 'none';
        this.spritDoct.classList.add("doctWeight");
        this.spritBaby.style.display = "block";
        this.spritBaby.classList.add("bbWeight");
        let balance = document.querySelector("#balance");
        balance.style.display = "block";
        balance.style.width = "180px";
        balance.style.marginLeft = "-24px";
        balance.style.marginTop = "98px";

        this.happy.style.color = "green";
        this.happy.textContent = "Happiness: 0 %";
        this.cry.style.color = "red";
        this.cry.textContent = "Crying: 50 %";
        this.temp.style.color = "green";
        this.temp.textContent = "Temperature: 39°c";
        this.weight.style.color = "red";
        this.weight.textContent = "Weight: 7kg";
    }
    toVaccine() {
        let mumy = document.querySelector("#mumy");
        mumy.style.display = "none";
        this.bull.style.display = 'none';
        this.spritDoct.classList.add("doctVaccin");
        
        this.spritBaby.style.display = "block";
        let balance = document.querySelector("#balance");
        balance.style.display = "none";
       
        this.spritBaby.classList.add("bbVaccin");

        this.happy.style.color = "green";
        this.happy.textContent = "Happiness: 0 %";
        this.cry.style.color = "red";
        this.cry.textContent = "Crying: 100 %";
        this.temp.style.color = "red";
        this.temp.textContent = "Temperature: 39°c";
        this.weight.style.color = "green";
        this.weight.textContent = "Weight: 7kg";

    }
    toWriteOrder() {
        let mumy = document.querySelector("#mumy");
        mumy.style.display = "block";
        this.bull.style.display = 'none';
        this.spritBaby.style.display = "none";
        this.spritDoct.classList.add("doctOrder");
        mumy.classList.remove("moveToAccueil");
        mumy.classList.add("takeOrder");

        this.happy.style.color = "red";
        this.happy.textContent = "Happiness: 0 %";
        this.cry.style.color = "green";
        this.cry.textContent = "Crying: 80 %";
        this.temp.style.color = "red";
        this.temp.textContent = "Temperature: 39°c";
        this.weight.style.color = "green";
        this.weight.textContent = "Weight: 7kg";

        this.bull.style.display = "inline-block";
        this.bull.style.marginLeft = "28px";
        this.bull.style.marginTop = "-116px";
        this.bull.style.zIndex = 2;
        this.p.textContent = "if he has fever give him doliprane, have a good day and see you next time";
        let talkMum = document.addEventListener("keypress", function (event) {
            if (event.keyCode === 13) {
                let bull = document.querySelector("#talkDoct");
                bull.style.display = 'none';
                let bullMum = document.querySelector("#talkMum");
                bullMum.style.display = "inline-block";
                bullMum.style.position = "absolute";
                bullMum.style.left = "2px";
                bullMum.style.top = "432px";
                bullMum.style.zIndex = 2;
                let p = document.querySelector("#talkMum p");
                p.textContent = "Okay, goodbye doctor :) ";
            }

        });
    }
}
