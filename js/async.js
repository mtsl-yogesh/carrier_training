/*
    JavaScript Callbacks : 
        !"I will call back later!"
        A callback is a function passed as an argument to another function
        This technique allows a function to call another function
        A callback function can run after another function has finished
*/

function myDisplayed(some) {
    console.log(some)
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayed);
//Output -> 10

/*
    !"I will finish later!"
    Functions running in parallel with other functions are called asynchronous
    A good example is JavaScript setTimeout()
*/

console.log("My name is ")
setTimeout(() => {
    console.log("Hello !!!")
}, 2000);
console.log("Yogesh Gaur");
/*
    Output : 
        My name is 
        Yogesh Gaur

        ?After 2 Seconds 
        Hello !!!
*/

/*
    Javascript Promises : 
        !"I Promise a Result!"
        "Producing code" is code that can take some time
        "Consuming code" is code that must wait for the result
        A Promise is a JavaScript object that links producing code and consuming code
*/

// let myPromise = new Promise(function (myResolve, myReject) {
// "Producing Code" (May take some time)

// myResolve(); // when successful
// myReject();  // when error
// });

// "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
// function (value) { /* code if successful */ },
// function (error) { /* code if some error */ }
// );

function myDisplayed(some) {
    console.log(some)
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    // The producing code (this may take some time)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function (value) { myDisplayed(value); },
    function (error) { myDisplayed(error); }
);
//Output -> OK

//Promises Using Callbacks 

let myPromises = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve("My name is Yogesh !!"); }, 3000);
});

myPromises.then(function (value) {
    console.log(value)
});
//Output -> My name is Yogesh (After 3 seconds)


/*
    JavaScript Async/Await  -> 
        !"async and await make promises easier to write"
        async makes a function return a Promise
        await makes a function wait for a Promise
*/

async function printVal() {
    let myPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Hello everyone !!");
        }, 4000);
    });
    const data = await myPromise;
    console.log(data)
}

printVal();
//Output -> Hello everyone !! (After 4 seconds)