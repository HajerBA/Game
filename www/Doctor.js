class Doctor extends Person{

    constructor(name,surname) {
       super(name,surname, 100, 100);
this.currentPatient = null;
    }
toNote(patient){
    //write on database
this.currentPatient = patient;
}
toExamine(){
//mesurer temperature
}
toWeigh(){

}
toVaccine(){

}
toWriteOrder(){

}
}
