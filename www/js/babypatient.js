class BabyPatient extends Person{
    
        constructor(name,surname,age,weight,state,temperature,tafterv) {
           super(name,surname, 0, 0);
           this.age=age;
           this.weight=weight;
           this.state=state;
           this.temperature=temperature;
           this.tafterv=tafterv;
        }

toCry(percent){
switch (state) {
        case 'calm':
                percent='0%';
                temperature='37°';
                break;
        case 'sick':
                percent='80%';
                // percent++;
                temperature+=2;
                break;
        case 'Vaccin':
                percent='100%';
                temperature--;
                tafterv=37;
                break;
        default:
                break;
}
}
}
