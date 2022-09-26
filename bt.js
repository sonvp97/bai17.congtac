let ElectricLamp = function (){
    this.light = function (){
        if (this.status){
            alert('Bóng đèn sáng');
        }
        else {
            alert('Bóng đèn tắt');
        }
    }

    this.turnOn = function (){
        this.status = true;
        return this.light();
    }
    this.turnOff = function (){
        this.status = false;
        return this.light();
    }
}
let SwichButton = function (){
    this.connectToLamp = function (electriclamp){
        this.electriclamp = electriclamp;
    }
    this.switchOff = function (){
       return this.electriclamp.turnOff();
    }
    this.switchOn = function (){
        return this.electriclamp.turnOn();
    }
}
let electriclamp = new ElectricLamp();
let swichbutton = new SwichButton();
swichbutton.connectToLamp(electriclamp);
console.log(swichbutton.switchOn());
