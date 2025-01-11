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



class car {
 private _name: string;
 private _model: string;

  constructor(name:string , model: string){
    this._name = name;
    this._model= model;

  }

  get name() : string {
    return this._name;
  }

  set name(newname: string) {
    this._name = newname;
  }

  get model() : string {

    return this._model ;


  }

  set model(newModel: string) {
    this._model = newModel;
  } 

  drive() { console.log(`The ${this._name} ${this._model} is driving.`); } 
  
  stop() { console.log(`The ${this._model} has stopped.`); }

}

let Car = new car("nissan" , "SUV");
console.log(Car.model);

