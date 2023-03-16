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
function abc(a, b) {
        console.log(a + b)
}
console.log(abc(a, b))

//Output : 30

//Non Parametrized Function
function greet() {
        console.log("Good Evening !!!")
}
console.log(greet())

//Output : Good Evening !!!

/*
        Objects : 
                Objects are variables too. But objects can contain many values, in form of key and value pair.
*/

const human = { name: "Yogesh", age: 22 }
console.log(human)
/*
        Output :
                { name: 'Yogesh', age: 22 }
*/

//Objects with method 
const humanNext = {
        name: "Yogesh",
        age: 22,
        speak: () => {
                console.log("Hello !!!")
        }
}
console.log(humanNext.speak())
//Output : Hello !!!

/*
        Strings in JavScript : 
                   JavaScript strings are for storing and manipulating text.

                   A JavaScript string is zero or more characters written inside quotes.
*/

let nameOfPerson = "Yogesh Gaur"
console.log(nameOfPerson.length)
//Output  11

/*
        Escape Character
                Because strings must be written within quotes, JavaScript will misunderstand this string, and to avoid this we use escape character.

                The other escape characters in javascript are : 
                        \b	Backspace
                        \f	Form Feed
                        \n	New Line
                        \r	Carriage Return
                        \t	Horizontal Tabulator
                        \v	Vertical Tabulator
*/
let sentence = "My company is \"MTSL\" and it is in Noida";
console.log(sentence)
//Output -> My company is "MTSL" and it is in Noida

/*
        Strings as objects in javascript :
                  Normally, JavaScript strings are primitive values, created from literals.

                  But strings can also be defined as objects with the keyword new.
*/

const d = "hello"
const e = new String("Hello")
console.log(d, e)
/*
        Output : 
                hello [String: 'Hello']
                
*/

/*
        String Methods : 
                These are the methods for string in javascript :
                        String slice() -> It extracts a part of a string and returns the extracted part in a new string

                        String substring() -> substring() is similar to slice().The difference is that start and end values less than 0 are treated as 0 in substring()

                        String replace() -> The replace() method replaces a specified value with another value in a string

                        String replaceAll() ->  The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

                        String toUpperCase() -> A string is converted to upper case with toUpperCase():

                        String toLowerCase() -> A string is converted to lower case with toLowerCase():

                        String concat() -> concat() joins two or more strings

                        String trim() -> The trim() method removes whitespace from both sides of a string.

                        String trimStart() -> The trimStart() method works like trim(), but removes whitespace only from the start of a string

                        String trimEnd() -> The trimEnd() method works like trim(), but removes whitespace only from the end of a string

                        String padStart() -> The padStart() method pads a string with another string

                        String padEnd() -> The padEnd() method pads a string with another string

                        String charAt() -> The charAt() method returns the character at a specified index (position) in a string.

                        String charCodeAt() -> The charCodeAt() method returns the unicode of the character at a specified index in a string

                        String split() -> A string can be converted to an array with the split() method
*/

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

console.log(token.slice(0, 23))
/*
        Output: 
                eyJhbGciOiJIUzI1NiIsInR
*/

console.log(token.substring(0, 12))
/*
        Output: 
                eyJhbGciOiJI
*/

console.log(token.replace("zI1NiI", "Yogesh"))
/*
        Output: 
                eyJhbGciOiJIUYogeshInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
*/

console.log(token.toUpperCase())
/*
        Output: 
                EYJHBGCIOIJIUZI1NIISINR5CCI6IKPXVCJ9.EYJZDWIIOIIXMJM0NTY3ODKWIIWIBMFTZSI6IKPVA4GRG9LIIWIAWF0IJOXNTE2MJM5MDIYFQ.SFLKXWRJSMEKKF2QT4FWPMEJF36POK6YJV_ADQSSW5C
*/
console.log(token.toLowerCase())
/*
        Output: 
                eyjhbgcioijiuzi1niisinr5cci6ikpxvcj9.eyjzdwiioiixmjm0nty3odkwiiwibmftzsi6ikpvag4grg9liiwiawf0ijoxnte2mjm5mdiyfq.sflkxwrjsmekkf2qt4fwpmejf36pok6yjv_adqssw5c 
*/
console.log(token.concat("MOTHERSON TECHNOLOGY SERVICE LIMITED"))
/*
        Output: 
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5cMOTHERSON TECHNOLOGY SERVICE LIMITED

*/

let token2 = "           eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c           "
console.log(token2.trim())
/*
        Output: 
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
*/
console.log(token2.trimStart())
/*
        Output: 
        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c           .
*/
console.log(token2.trimEnd())
/*
        Output: 
        .        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c           
*/
let paddedText = "ok";
console.log(paddedText.padStart(4, "YOGESH"))
/*
        Output: 
                YOok
*/
console.log(paddedText.padEnd(4, "YOGESH"))
/*
        Output: 
                okYO
*/
console.log(token.charAt(23))
/*
        Output:
                5

*/

console.log(token.charCodeAt(23))
/*
        Output:
                53           
*/

console.log(token.split(","))
/*
        Output:
                [
                        '           eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c           '
                ]
                
*/

/*
                Search Methods in Javascript : 

                        String indexOf() -> The indexOf() method returns the index of (position of) the first occurrence of a string in a string

                        String lastIndexOf() -> The lastIndexOf() method returns the index of the last occurrence of a specified text in a string

                        String search() -> The search() method searches a string for a string (or a regular expression) and returns the position of the match

                        String match() -> The match() method returns an array containing the results of matching a string against a string (or a regular expression)

                        String matchAll() -> The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).

                        String includes() -> The includes() method returns true if a string contains a specified value.

                        String startsWith() -> The startsWith() method returns true if a string begins with a specified value.

                        String endsWith() -> The endsWith() method returns true if a string ends with a specified value.
*/

let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate"))
console.log(str.lastIndexOf("locate"))
console.log(str.search("locate"))
console.log(str.substring(0, 5).match("Please"))
console.log(str.substring(0, 5).matchAll("Please"))
console.log(str.includes("occurs"))
console.log(str.endsWith("!"))
console.log(str.startsWith("P"))

/*
                Output : 
                        7
                        21
                        7
                        null
                        Object [RegExp String Iterator] {}
                        true
                        true
                        true
*/

/*
        Javascript Template Literal : 
                Template literals provide an easy way to interpolate variables and expressions into strings.The method is called string interpolation.
*/

console.log(`My name is ${name} and i am ${age} years old !!!`)
//Output : My name is Yogesh and i am 12 years old !!!

/*
        JavaScript Numbers : 
                JavaScript has only one type of number. Numbers can be written with or without decimals.

                Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

                JavaScript uses the + operator for both addition and concatenation.Numbers are added. Strings are concatenated.
*/

const number1 = 23432
const number2 = 3432.4132432
console.log(number1 + number2)
//Output: 26864.4132432

//Number are concatenated with string
console.log(number2 + "Yogesh")
//Output : 3432.4132432Yogesh

/*
    NaN (Not any number) :  
                NaN is a JavaScript reserved word indicating that a number is not a legal number.

                Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
*/

let notANumber = 100 / "Apple";
console.log(notANumber)
//Output -> NaN

/*
        Infinity : 
                Infinity is a number: typeof Infinity returns number.
        Hexadecimal: 
                JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
*/

const positiveInfinity = 2 / 0;
const negativeInfinity = -2 / 0;
const hexVal = 0xFF

console.log(positiveInfinity, negativeInfinity, hexVal)
//Output -> Infinity -Infinity 255

/*
     JavaScript Arrays : 
        An array is a special variable, which can hold more than one value.
*/

const fruits = ["Apple", "Mango", "Banana"]
console.log(fruits)
//Output: [ 'Apple', 'Mango', 'Banana' ]

/*
     JavaScript Array Methods : 

        toString() -> The JavaScript method toString() converts an array to a string of (comma separated) array values.

        join() -> The join() method also joins all array elements into a string.

        pop() -> The pop() method remove a new element to an array (at the end).

        push() -> The push() method adds a new element to an array (at the end).

        shift() -> The shift() method removes the first array element and "shifts" all other elements to a lower index.

        unshift() -> The unshift() method adds a new element to an array (at the beginning), and "un shifts" older elements.

        concat() -> The concat() method does not change the existing arrays. It always returns a new array.The concat method can take any number of array arguments.
        
        splice() -> The splice() method adds new items to an array.

        slice() -> The splice() method adds new items to an array.
        
*/

//! console.log(fruits.toString())
//! console.log(fruits.join("|"))
//! console.log(fruits.pop())
//! console.log(fruits.push("Grapes"))
//! console.log(fruits.shift())
//! console.log(fruits.unshift())
//! console.log(fruits.concat(["Kiwi", "Blackberry"]))
//! console.log(fruits.splice(0))
//! console.log(fruits.slice(1))

/*
        Output: 
                Apple,Mango,Banana
                Apple|Mango|Banana
                Banana
                3
                Apple
                2
                [ 'Mango', 'Grapes', 'Kiwi', 'Blackberry' ]
                [ 'Mango', 'Grapes' ]
                []
*/

/*
        Sorting in Array : 
                The sort() method sorts an array alphabetically.
*/

console.log(fruits.sort())
//Output -> [ 'Apple', 'Banana', 'Mango' ]

/*
        Reverse the Array : 
                The reverse() method reverses the elements in an array.
*/
console.log(fruits.reverse())
//Output -> [ 'Mango', 'Banana', 'Apple' ]

/*
     Array Iteration Method : 

                forEach() -> The forEach() method calls a function (a callback function) once for each array element

                map() -> The map() method creates a new array by performing a function on each array element.
                filter() -> The filter() method creates a new array with array elements that pass a test.
                reduce()  -> The reduce() method runs a function on each array element to produce (reduce it to) a single value.

                every() -> The every() method checks if all array values pass a test.
                some() -> The some() method checks if some array values pass a test.
*/

const numbersArray = [4, 9, 16, 25, 29]
const values = numbersArray.forEach((val)=>{
        console.log(val)
})
console.log(values)
/*
        output : 
                4
                9
                16
                25
                29
                undefined
*/

console.log(numbersArray.map((val)=>{
        console.log(val);
}))
/*
                Output : 
                        4
                        9
                        16
                        25
                        29
                        [ undefined, undefined, undefined, undefined, undefined ]
*/

function myFunction(value) {
        return value > 10;
}
const over10 = numbersArray.filter(myFunction);
console.log(over10)
//Output -> [ 16, 25, 29 ]


function myFunction(total, value) {
  return total + value;
}
let sum = numbersArray.reduce(myFunction);
console.log(sum)
//Output -> 83


function random(value) {
        return value > 18;
}
let over18 = numbersArray.every(random);
console.log(over18)
//Output -> false 


function someFunction(value) {
        return value > 18;
}
let over8 = numbersArray.some(someFunction);
console.log(over8)
//Output -> true


/* 
        Dates in JavaScript : 
                JavaScript Date Objects let us work with dates

                new Date() creates a date object with the current date and time
*/

const date =  new Date()
console.log(date)
//Output -> 2023-03-15T09:55:09.415Z

/*
        JavaScript Date Input  : 
                There are generally 3 types of JavaScript date input formats :
                        ISO Date	"2015-03-25" (The International Standard)
                        Short Date	"03/25/2015"
                        Long Date	"Mar 25 2015" or "25 Mar 2015"

        Date Get Methods  :  
                getFullYear()	Get year as a four digit number (yyyy)
                getMonth()	Get month as a number (0-11)
                getDate()	Get day as a number (1-31)
                getDay()	Get weekday as a number (0-6)
                getHours()	Get hour (0-23)
                getMinutes()	Get minute (0-59)
                getSeconds()	Get second (0-59)
                getMilliseconds()	Get millisecond (0-999)
                getTime()	Get time (milliseconds since January 1, 1970)
*/

const dateSample = new Date("2021-03-25");
console.log(dateSample.getFullYear())
console.log(dateSample.getMonth())
console.log(dateSample.getDate())
console.log(dateSample.getDay())
console.log(dateSample.getHours())
console.log(dateSample.getMinutes())
console.log(dateSample.getSeconds())
console.log(dateSample.getMilliseconds())
console.log(dateSample.getTime())
/*
        Output  :  
                2021
                2
                25
                4
                5
                30
                0
                0
                1616630400000
*/

/*
         JavaScript Math Object :  
                The JavaScript Math object allows you to perform mathematical tasks on numbers.

        Math Properties : 
                Math.E ->        returns Euler's number
                Math.PI ->       returns PI
                Math.SQRT2 ->    returns the square root of 2
                Math.SQRT1_2 ->  returns the square root of 1/2
                Math.LN2  ->     returns the natural logarithm of 2
                Math.LN10  ->    returns the natural logarithm of 10
                Math.LOG2E  ->   returns base 2 logarithm of E
                Math.LOG10E ->   returns base 10 logarithm of E

        Math Methods : 
                abs(x)	           ->           Returns the absolute value of x
                acos(x)	           ->           Returns the arccosine of x, in radians
                acosh(x)           ->	        Returns the hyperbolic arccosine of x
                asin(x)	           ->           Returns the arcsine of x, in radians
                asinh(x)           -> 	        Returns the hyperbolic arcsine of x
                atan(x)	           ->           Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians

                atan2(y, x)        -> 	        Returns the arctangent of the quotient of its arguments

                atanh(x)           -> 	        Returns the hyperbolic arctangent of x
                cbrt(x)	           ->           Returns the cubic root of x
                ceil(x)	           ->           Returns x, rounded upwards to the nearest integer

                cos(x)	           ->            Returns the cosine of x (x is in radians)

                cosh(x)	           ->            Returns the hyperbolic cosine of x
                exp(x)	           ->            Returns the value of Ex
                floor(x)           ->	         Returns x, rounded downwards to the nearest integer
                log(x)             -> 	         Returns the natural logarithm (base E) of x
                max(x, y, z, ..., n) ->          Returns the number with the highest value

                min(x, y, z, ..., n) ->          Returns the number with the lowest value
                pow(x, y)          -> 	         Returns the value of x to the power of y
                random()           ->	         Returns a random number between 0 and 1
                round(x)           ->	         Rounds x to the nearest integer
                sign(x)	           ->            Returns if x is negative, null or positive (-1, 0, 1)
                sin(x)	           ->            Returns the sine of x (x is in radians)
                sinh(x)	           ->            Returns the hyperbolic sine of x
                sqrt(x)	           ->            Returns the square root of x
                tan(x)	           ->            Returns the tangent of an angle
                tanh(x)	           ->            Returns the hyperbolic tangent of a number
                trunc(x)           ->	         Returns the integer part of a number (x)
*/

console.log(Math.abs(-25346.4634))
console.log(Math.ceil(25346.4634))
console.log(Math.floor(25346.4634))
console.log(Math.random())
console.log(Math.max(4534,3252345,25,3))
console.log(Math.min(4534,3252345,25,3))
console.log(Math.round(534.544342234545))
console.log(Math.trunc(34.456345))
/*
        Output : 
                25346.4634
                25347
                25346
                0.07706930354190922
                3252345
                3
                535
                34
*/

/*
        JavaScript Booleans  : 
                A JavaScript Boolean represents one of two values: true or false.

                You can use the Boolean() function to find out if an expression (or a variable) is true.
        Key Points : 
                1. The Boolean value of 0 (zero) is false.
                2. The Boolean value of -0 (minus zero) is false.
                3. The Boolean value of "" (empty string) is false
                4. The Boolean value of undefined is false
                5. The Boolean value of null is false
                6. The Boolean value of false is (you guessed it) false
                7. The Boolean value of NaN is false
*/
console.log(Boolean(34<45))
//Output -> true

/*
        Javascript comparison operator : 
                2 < 12	        true	
                2 < "12"	true	
                2 < "John"	false	
                2 > "John"	false	
                2 == "John"	false	
                "2" < "12"	false	
                "2" > "12"	true	
                "2" == "12"	false

                The Nullish Coalescing Operator : 
                        The ?? operator returns the first argument if it is not nullish (null or undefined).
                The Optional Chaining Operator : 
                        The ?. operator returns undefined if an object is undefined or null
*/
const dataObject = {nameOfPerson:"Yogesh",age:22,school:null||"KV"}
console.log(dataObject?.school)
//Output -> KV

const school = "KV"
const mySchool = null;
const finalData = school ?? mySchool
console.log(finalData)
//Output -> KV

/*
        JavaScript Conditionals : 
                Conditional statements are used to perform different actions based on different conditions.

                Key Points : 
                        1. Use if to specify a block of code to be executed, if a specified condition is true

                        2. Use else to specify a block of code to be executed, if the same condition is false

                        3. Use else if to specify a new condition to test, if the first condition is false

                        4. Use switch to specify many alternative blocks of code to be executed
*/

if(new Date().getHours() < 12){
        console.log("Good Morning !!!")
}
if(new Date().getHours() < 12){
        console.log("Good Morning !!!")
}else{
        console.log("Good Evening !!!")
}
if(new Date().getHours() < 12){
        console.log("Good Morning !!!")
}else if(new Date().getHours() < 16){
        console.log("Good Afternoon !!!")
}else{
        console.log("Good Evening !!!")
}
/*
        At Morning : 
                Good Morning !!!
                Good Morning !!!
                Good Morning !!!
        At Afternoon: 
                Good Afternoon !!!
        At Evening: 
                Good Evening !!!
*/

switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          console.log(day);
          break;
        case 1:
          day = "Monday";
          console.log(day);
          break;
        case 2:
           day = "Tuesday";
           console.log(day);
          break;
        case 3:
          day = "Wednesday";
          console.log(day);
          break;
        case 4:
          day = "Thursday";
          console.log(day);
          break;
        case 5:
          day = "Friday";
          console.log(day);
          break;
        case 6:
          day = "Saturday";
          console.log(day);
}
//Output -> Thursday

/*
        JavaScript Loops : 
                Loops can execute a block of code a number of times.

                Types of Loop : 
                        for ->    loops through a block of code a number of times
                        for/in -> loops through the properties of an object
                        for/of -> loops through the values of an iterable object
                        while ->  loops through a block of code while a specified condition is true

                        do/while -> also loops through a block of code while a specified condition is true
*/

for (let i = 1; i <= 10; i++) {
      console.log(`2 * ${i} = ${i*2}`)  
}
/*
        Output : 
                2 * 1 = 2
                2 * 2 = 4
                2 * 3 = 6
                2 * 4 = 8
                2 * 5 = 10
                2 * 6 = 12
                2 * 7 = 14
                2 * 8 = 16
                2 * 9 = 18
                2 * 10 = 20
*/

const numbers = [45, 4, 9, 16, 25];
for (const key in numbers) {
       console.log(numbers[key])
}
/*
        Output :
                45
                4
                9
                16
                25 
*/
/*
        ! Do not use for in over an Array if the index order is important.
        
        !The index order is implementation-dependent, and array values may not be accessed in the order you expect.

        !It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

*/

numbers.forEach(myFunction);

function myFunction(value) {
  console.log(value)
}
/*
        Output: 
                45
                4
                9
                16
                25
*/

for (const key of numbers) {
        console.log(key)
}
/*
        Output: 
                45
                4
                9
                16
                25
*/
var i=0;
while (i!=numbers.length) {
      console.log(`2 * ${numbers[i]} = ${numbers[i] * 2}`) ;
      i++;
}
/*
        Output : 
                2 * 45 = 90
                2 * 4 = 8
                2 * 9 = 18
                2 * 16 = 32
                2 * 25 = 50
*/

/*
        JavaScript Break and Continue : 
                The break statement "jumps out" of a loop.

                The continue statement "jumps over" one iteration in the loop.
*/

for (const key of numbers) {
      if(key<=10) break;
      console.log(key)  
}
// Output : 45

for (const key of numbers) {
        if(key<=10) continue;
        console.log(key)  
}
/* 
        Output : 
                45
                16
                25
*/

/*
        JavaScript Iterables : 
                JavaScript Iterables are iterable objects (like Arrays). They can be accessed with simple and efficient code.

                Iterables can be iterated over with for..of loops
*/

//Iterating Over a String

for (const x of name) {
  console.log(x)
}
/*
        Output : 
                Y
                o
                g
                e
                s
                h
*/

//Iterating Over an Array
for (const key of numbers) {
        console.log(`3 * ${key} = ${key * i}`)  
}

/*
        Output : 
                3 * 45 = 225
                3 * 4 = 20
                3 * 9 = 45
                3 * 16 = 80
                3 * 25 = 125
*/

//Iterating Over a Set

const letters = new Set(["a","b","c"]);

for (const iterator of letters) {
        console.log(iterator)
}
/*
        Output : 
                a
                b
                c
*/

// Iterating Over a Map
const vegetables = new Map([
        ["Potato",30],
        ["Tomato",40],
        ["Onion",60]
])
for (const iterator of vegetables) {
        console.log(`Price of ${iterator[0]} is : ${iterator[1]}`)
}
/*
        Output : 
                Price of Potato is : 30
                Price of Tomato is : 40
                Price of Onion is : 60
*/

/*
        JavaScript Sets : 
                A JavaScript Set is a collection of unique values. Each value can only occur once in a Set.

                You can create a JavaScript Set by:
                        1. Passing an Array to new Set()
                        2. Create a new Set and use add() to add values
                        3. Create a new Set and use add() to add variables
*/

const employees = new Set(["Abhishek","Kishan","Yogesh"])
console.log(employees)
//Output -> Set(3) { 'Abhishek', 'Kishan', 'Yogesh' }

//Adding new Employee
employees.add("Ramesh")
console.log(employees)
//Output -> Set(4) { 'Abhishek', 'Kishan', 'Yogesh', 'Ramesh' }

//Vales Iterator 
for (const val of employees.values()) {
        console.log(val)
}
/*
        Output : 
                Abhishek
                Kishan
                Yogesh
                Ramesh
*/

/*
        JavaScript typeof : 
                In JavaScript there are 5 different data types that can contain values:
                        string
                        number
                        boolean
                        object
                        function
                There are 6 types of objects:
                        Object
                        Date
                        Array
                        String
                        Number
                        Boolean
                And 2 data types that cannot contain values:
                        null
                        undefined
*/

console.log(typeof "John")                 
console.log(typeof 3.14)                   
console.log(typeof NaN)                    
console.log(typeof false)               
console.log(typeof [1,2,3,4])              
console.log(typeof {name:'John', age:34})  
console.log(typeof new Date())             
console.log(typeof function () {})       
console.log(typeof myCar)        
console.log(typeof null)                   
/*
        output : 
                string
                number
                number
                boolean
                object
                object
                object
                function
                undefined
                object
*/

/*
        JavaScript Regular Expressions  :  
                A regular expression is a sequence of characters that forms a search pattern.

                The search pattern can be used for text search and text replace operations.
                
                Rules of Regex :  
                        [abc]	Find any of the characters between the brackets	
                        [0-9]	Find any of the digits between the brackets	
                        (x|y)	Find any of the alternatives separated with |
                        \d	Find a digit	
                        \s	Find a whitespace character	
                        \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	

                        \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx

                        n+	Matches any string that contains at least one n
                        n*	Matches any string that contains zero or more occurrences of n
                        n?	Matches any string that contains zero or one occurrences of n

                !The test() method is a RegExp expression method.It searches a string for a pattern, and returns true or false, depending on the result.

                !The exec() method is a RegExp expression method. It searches a string for a specified pattern, and returns the found text as an object.

*/

const personToNamed = "Yogesh Gaur"
console.log(personToNamed.search(/Gaur/i)) 
//Output -> 7

const pattern = /e/;
console.log(pattern.test("The best things in life are free!"))
//Output -> true