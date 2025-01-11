// class car {
//   public name: string;
//   public model: string;
//   constructor(name: string , model: string){
//     this.name = name;
//     this.model = model;
//   }
//   drive() {
//     console.log( `${this.name} drives very fast`);
//   }
// //   Model() {
// //     console.log(`${this.model} is the name of the model of the car`);
// //   }
// // }
// let Car = new car("Nissan", "Altima");
// Car.drive();
// Car.Model();
// class car {
//   public name: string;
//   public model: string;
//   constructor(name: string , model: string){
//     this.name = name;
//     this.model = model;
//   }
//   drive() {
//     console.log( `${this.name} drives very fast`);
//   }
// }
// class Fastcar extends car {
//   public speed: number;
//   constructor(name: string, model: string, speed: number){
//     super(name , model);
//     this.speed = speed;
//   }
//   displaySpeed()  {
//     console.log(`${this.name} drives at speed of ${this.speed}`);
//   }
// }
// let Car = new Fastcar("Nissan", "Altima", 20);
// Car.displaySpeed();
var car = /** @class */ (function () {
    function car(name, model) {
        this._name = name;
        this._model = model;
    }
    Object.defineProperty(car.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newname) {
            this._name = newname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(car.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (newModel) {
            this._model = newModel;
        },
        enumerable: false,
        configurable: true
    });
    car.prototype.drive = function () { console.log("The ".concat(this._name, " ").concat(this._model, " is driving.")); };
    car.prototype.stop = function () { console.log("The ".concat(this._model, " has stopped.")); };
    return car;
}());
var Car = new car("nissan", "SUV");
console.log(Car.model);
