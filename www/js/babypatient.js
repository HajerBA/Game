class BabyPatient extends Person{
    
        constructor(name,surname,age,weight,state,temperature,tafterv) {
           super(name,surname, 0, 0);
           this.age=age;
           this.weight=weight;
           this.state=state;
           this.temperature=temperature;
           this.tafterv=tafterv;

           this.temp=document.querySelector("#temp");
           this.cry=document.querySelector("#cry");
           this.weight=document.querySelector("#weight");
           this.happy=document.querySelector("#happiness");
        }

backHome(){
        let mumy1 =document.querySelector("#mumy1");
        mumy1.style.display="block";
        let mumy =document.querySelector("#mumy");
        let doct =document.querySelector("#imgdoct");
        mumy.style.display='none';
        doct.style.display='none';
        let bullMum = document.querySelector("#talkMum");
        bullMum.style.display = "none";
        this.happy.style.color="green";
        this.happy.textContent="Happiness: 50 %";
        this.cry.style.color="green";
        this.cry.textContent="Crying: 0 %";
        this.temp.style.color="green";
        this.temp.textContent="Temperature: 39,5°c";
        this.weight.style.color="green";
        this.weight.textContent="Weight: 7kg";

        
}
}
