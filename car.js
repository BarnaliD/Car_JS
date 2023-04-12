class Car {
    constructor(brand,model, color,maxSpeed,yearMade,type){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.yearMade = yearMade;
        this.type = type;

    }

    turnOn(){
        console.log(` ${this.brand} ${this.model} ${this.type} has turned on`);
    }
    inProduction(){
        console.log(` ${this.brand} ${this.model}${this.color} ${this.type} with max speed ${this.maxSpeed} is in production`);
    }
}
const car1 = new Car('Volvo' , 'S90', 'Grey','200mph',2021,'Sedan');
 car1.turnOn();
const car2 = new Car('Tesla','ModelX', ' red', '250mph',2023, 'SUV');
 car2.inProduction();
 