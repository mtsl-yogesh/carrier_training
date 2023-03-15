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



