class Car {
    constructor(brand,model, color,maxSpeed,yearMade,type){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.yearMade = yearMade;
        this.type = type;
        this.isEngineOn = false;

    }

    turnOn(){
        console.log(` ${this.brand} ${this.model} ${this.type} has turned on`);
    }
    inProduction(){
        console.log(` ${this.brand} ${this.model}${this.color} ${this.type} with max speed ${this.maxSpeed} is in production`);
    }

    startEngine() {
        this.isEngineOn = true;
    }

    stopEngine(){

        this.isEngineOn = false;
    }

    accelerate(){
        this.maxSpeed =+ 10;
        console.log(` ${this.brand} ${this.model} ${this.type} is accelerating with ${this.maxSpeed}`);
    }
    

    brake() {
        this.maxSpeed =- 10;
        if (this.maxSpeed < 0) {
            this.maxSpeed = 0;
            console.log(` ${this.brand}  has applied breaks`);
        
        }
        
    }
        
    turnLeft(){
        console.log(` ${this.brand}  is turning left`);
    }

    turnRight(){
        console.log(` ${this.brand}  has applied breaks`);
    }
    
}
const car1 = new Car('Volvo' , 'S90', 'Grey','200mph',2021,'Sedan');
 car1.turnOn();
const car2 = new Car('Tesla','ModelX', ' red', '250mph',2023, 'SUV');
 car2.inProduction();
const Car3 = new Car('Toyota','Model Y','White','5mph',2021,'HatchBack');
  Car3.turnOn();
  Car3.startEngine();
  Car3.accelerate();
  Car3.brake();
  Car3.turnLeft();

  
  