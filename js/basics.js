//! Variables in JavaScript
/*

        In javascript we declare variables using following ways :  
                1. Using var
                2. Using let
                3. Using const
*/

var fruit = "Apple"
let name = "Yogesh"
const age = 12;
ok = true;
console.log(fruit, name, age, ok)

/*
        Output : 
                Apple Yogesh 12 true
*/
/*
    One Statement, Many Variables : 
        We can declare many variables in one statement
*/

let person = "Ramesh", carName = "Nano", price = 200;
console.log(person, carName, price)

/*
        Output : 
                Ramesh Nano 200
*/

/*
        Re-Declaring JavaScript Variables  : 
                Let and const cannot be redeclare
*/

var car = "Volvo";
var car;


//! Operators in JS
/*
    Types of operators:
        1. Arithmetic Operators
        2. Assignment Operators
        3. Comparison Operators
        4. Logical Operators
        5. Conditional Operators
        6. Type Operators
        7. Bitwise Operator
*/


/*
    Javascript has following arithmetic operators : 
        1. +	Addition
        2. -	Subtraction
        3. *	Multiplication
        4. **	Exponentiation (ES2016)
        5. /	Division
        6. %	Modulus (Remainder)
        7. ++	Increment
        8. --	Decrement
*/

let a = 20, b = 10;
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)
// console.log(a++)
// console.log(b--)

/*
    Output: 
        30
        10
        200
        2
        0
        10240000000000
        20
        10
*/

/*
        Javascript has following assignment operators: 
                1. a=b  is same as a=b
                2. a+=b is same as a = a+b
                3. a-=b is same as a = a *b
                4. a*=b is same as a = a*b
                5. a/=b is same as a = a/b
                6. a**=b is same as a = a**b
                7. a%=b is same as a = a%b
*/

/*
        Javascript has following Comparison Operators : 
                1. == equal to
                2. ===	equal value and equal type
                3. !=	not equal
                4. !==	not equal value or not equal type
                5. >	greater than
                6. <	less than
                7. >=	greater than or equal to
                8. <=	less than or equal to
                9. ?	ternary operator
*/

console.log(a == b)
console.log(a === b)
console.log(a != b)
console.log(a !== b)
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a ? b : a)

/*
        Output: 
                false
                false
                true
                true
                true
                false
                true
                false
                10
*/

/*
        Javascript has following Logical Operators: 
        1. &&	logical and
        2. ||	logical or
        3. !	logical not
*/

console.log(a && b)
console.log(a || b)
console.log(!a)
console.log(!b)

/*
        Output: 
               10
               20
               false
               false 
*/

/*
        JavaScript has following bitwise operator:
                1. typeof	Returns the type of a variable
                2. instanceof	Returns true if an object is an instance of an object type
*/

console.log(typeof (a))
//Output : number

/*
        JavaScript has following Bitwise Operator : 
        &	AND	
        |	OR	
        ~	NOT	
        ^	XOR	
        <<	left shift	
        >>	right shift	
        >>>	unsigned right shift
*/
console.log(a & b)
console.log(a | b)
console.log(~b)
console.log(!a)
console.log(a ^ b)
console.log(a << b)
console.log(a >> b)
console.log(a >>> b)

/*
        Output: 
                0
                30
                -11
                false
                30
                20480
                0
                0
*/

/*
        Functions in JavaScript: 
                1. A JavaScript function is a block of code designed to perform a particular task.

                2. A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

                3. Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

                4. The parentheses may include parameter names separated by commas:
                (parameter1, parameter2, ...)

                5.The code to be executed, by the function, is placed inside curly brackets: {}
        
        Types of Functions : 
                1. Parametrized  Function
                2. Non Parametrized Function
*/

//Parametrized Function
function abc(a,b){
       console.log(a+b)
}
console.log(abc(a,b))

//Output : 30

//Non Parametrized Function
function greet(){
        console.log("Good Evening !!!")
}
console.log(greet())

//Output : Good Evening !!!

/*
        Objects : 
                Objects are variables too. But objects can contain many values, in form of key and value pair.
*/

const human = {name:"Yogesh",age:22}
console.log(human)
/*
        Output :
                { name: 'Yogesh', age: 22 }
*/   

//Objects with method 
const humanNext = {
        name:"Yogesh",
        age:22,
        speak:()=>{
                console.log("Hello !!!")
        }
}
console.log(humanNext.speak())
//Output : Hello !!!
