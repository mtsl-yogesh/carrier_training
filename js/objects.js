/*
    In JavaScript, almost "everything" is an object.

    Booleans can be objects (if defined with the new keyword)
    Numbers can be objects (if defined with the new keyword)
    Strings can be objects (if defined with the new keyword)
    Dates are always objects
    Maths are always objects
    Regular expressions are always objects
    Arrays are always objects
    Functions are always objects
    Objects are always objects

    
    Creating a JavaScript Object :
        With JavaScript, you can define and create your own objects.
        There are different ways to create new objects:

                ?-> Create a single object, using an object literal.
                ?-> Create a single object, with the keyword new.
                ?-> Define an object constructor, and then create objects of the constructed type.
                ?-> Create an object using Object.create().
*/

const prototype = {
    name: "abc",
    age: 100
}

const newObj = Object.create(prototype)
newObj.name = "Yogesh";
newObj.age = 23;
console.log(newObj)
//Output -> { name: 'Yogesh', age: 23 }

const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person)
//Output -> { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }

/*
    Nested Objects : 
        Values in an object can be another object.
*/

myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
console.log(myObj)
/*
    Output : 
        {
            name: 'John',
            age: 30,
            cars: { car1: 'Ford', car2: 'BMW', car3: 'Fiat' }
        }
*/

/*
        Object.values() : 
            Any JavaScript object can be converted to an array using Object.values().
*/

const man = {
    name: "John",
    age: 30,
    city: "New York"
};

const myArray = Object.values(man);
console.log(myArray)
//Output -> [ 'John', 30, 'New York' ]

/*
        JSON.stringify() : 
            Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify().
*/

const myString = JSON.stringify(man)
console.log(myString)
//Output -> {"name":"John","age":30,"city":"New York"}

/*
    JavaScript Accessors (Getters and Setters) : 
            Getters and setters allow you to define Object Accessors (Computed Properties).This example uses a lang property to get the value of the language property.
    Object.defineProperty() : 
            The Object.defineProperty() method can also be used to add Getters and Setters.
*/

const obj = { counter: 0 };

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
    get: function () { this.counter = 0; }
});
Object.defineProperty(obj, "increment", {
    get: function () { this.counter++; }
});
Object.defineProperty(obj, "decrement", {
    get: function () { this.counter--; }
});
Object.defineProperty(obj, "add", {
    set: function (value) { this.counter += value; }
});
Object.defineProperty(obj, "subtract", {
    set: function (value) { this.counter -= value; }
});

obj.reset;// { counter: 0}
obj.add = 5;// { counter: 5}
obj.subtract = 1; // { counter: 4}
obj.increment;// { counter: 5 }
console.log(obj)
obj.decrement;
console.log(obj)
// output -> { counter: 4 }

/*
    Javascript Object Constructors : 
            In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

*/
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const mySelf = new Person("Yogesh", "Gaur", 22, "brown");
mySelf.nationality = "Indian";
console.log(mySelf)
/*
    Person {
        firstName: 'Yogesh',
        lastName: 'Gaur',
        age: 22,
        eyeColor: 'brown',
        nationality: 'Indian'
    }
*/

/*
    Build in Constructors : 
        new String()    -> A new String object
        new Number()    -> A new Number object
        new Boolean()   -> A new Boolean object
        new Object()    -> A new Object object
        new Array()     -> A new Array object
        new RegExp()    -> A new RegExp object
        new Function()  -> A new Function object
        new Date()      -> A new Date object
*/
