/*
    JavaScript Function Definitions : 
        JavaScript functions are defined with the function keyword.

        You can use a function declaration or a function expression.
*/

function myFunction(a, b) {
    return a * b;
}
const value = myFunction(34, 45)
console.log(value);
//output->1530

/*
    Function Expressions : 
        A JavaScript function can also be defined using an expression.
        A function expression can be stored in a variable
*/
const x = function (a, b) { return a * b };
let z = x(4, 3);
console.log(z)
//Output->12

/*
    The Function() Constructor : 
        As you have seen in the previous examples, JavaScript functions are defined with the function keyword.

        Functions can also be defined with a built-in JavaScript function constructor called Function().
*/
const theFunction = new Function("a", "b", "return a * b");
let data = theFunction(40, 30);
console.log(data);
//Output -> 1200

/*
    Self-Invoking Functions :
        !Function expressions can be made "self-invoking".

        !A self-invoking expression is invoked (started) automatically, without being called.

        !Function expressions will execute automatically if the expression is followed by ().

        !You cannot self-invoke a function declaration.

        !You have to add parentheses around the function to indicate that it is a function expression:
*/
(function () {
    let x = "Hello!!";  // I will invoke myself
    console.log(x);  //Output -> Hello!!
})();

/*
    Function Rest Parameter :
        The rest parameter (...) allows a function to treat an indefinite number of arguments as an array
*/

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let sumAll = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(sumAll)
//Output -> 326

/*
    Call() and method() : 
        With the call() method, you can write a method that can be used on different objects.

        he apply() method is similar to the call() method but it takes arguments as an array, while call() take argument separately.
*/

const person = {
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

const person1 = {
    firstName: "Yogesh",
    lastName: "Gaur"
}
person.fullName.call(person1);
//Output -> Yogesh Gaur

const person3 = {
    fullName: function (city, country) {
        console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
    }
}

const person4 = {
    firstName: "Yogesh",
    lastName: "Gaur"
}

person3.fullName.apply(person4, ["Delhi", "India"]);
//Output -> Yogesh Gaur,Delhi,India

/*
    Function Borrowing : 
            With the bind() method, an object can borrow a method from another object
*/

const person5 = {
    firstName: "Yogesh",
    lastName: "Gaur",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

const member = {
    firstName: "Ramesh",
    lastName: "Gaur",
}

let fullName = person.fullName.bind(member);
console.log(fullName())
//Output -> Ramesh Gaur

