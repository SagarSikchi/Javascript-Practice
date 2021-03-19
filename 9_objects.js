/* Title: Objects in javascript.
 * Author: Sagar Sikchi
 */

/* Defining Objects */
let person = {
    name: "Sagar",
    age: 21,
    branch: "IT"
};

let fruits = {
    fruit_name: "Mango",
    price: 60
};

console.log("Person Name: " + person.name);
console.log("Person Age: " + person.age);
console.log("Person Branch: " + person.branch);
console.log("Fruit Name: " + fruits['fruit_name']);
console.log("Fruit Price: " + fruits['price']);

/* Methods */
let vehicle = {
    type: "Car",
    color: "Black",
    drive: function() {
        return "Car is driving...";
    },
    setColor: function(_color) {
        this.color = _color
    },
    getType: function() {
        return this.type;
    },
    getColor: function() {
        return this.color;
    }
}

console.log("Call drive method: " + vehicle.drive());
console.log("Get Type: " + vehicle.getType());
console.log("Get Color: " + vehicle.getColor());
vehicle.setColor("Red");
console.log("Get Color: " + vehicle.getColor());

/* Multiple objects inside an array */
let Persons = [
    {_name: "Sagar", _age: 21, _gender: "Male"},
    {_name: "Tara", _age: 19, _gender: "Female"},
    {_name: "Alex", _age: 25, _gender: "Male"},
]

console.log("Get Alex's age: " + Persons[2]['_age']);
console.log("Get Tara's data: " + Persons[1]['_name'] + " " + Persons[1]['_age'] + " " + Persons[1]['_gender']);

function execute() {
    console.log(vehicle.getColor());
    console.log(vehicle.getType());
    return "Executed..."
}

console.log("Execute: ");
console.log(execute());