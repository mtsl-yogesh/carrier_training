/*
    JavaScript Class Syntax :  
        Use the keyword class to create a class.

        Always add a method named constructor().

        The Constructor Method : 
            The constructor method is a special method:
            It has to have the exact name "constructor"
            It is executed automatically when a new object is created
            It is used to initialize object properties
            If you do not define a constructor method, JavaScript will add an empty constructor method.
*/

class Cars {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const myCar1 = new Cars("Ford", 2014);
const myCar2 = new Cars("Audi", 2019);
console.log(myCar1, myCar2)
//Output -> Car { name: 'Ford', year: 2014 } Car { name: 'Audi', year: 2019 }


/*
    JavaScript Class Inheritance : 
        To create a class inheritance, use the extends keyword.
        A class created with a class inheritance inherits all the methods from another class
*/

class Car {
    constructor(brand) {
        this.carName = brand;
    }
    present() {
        return 'I have a ' + this.carName;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Lamborghini", "Hurricane");
console.log(myCar.show())
//Output -> I have a Lamborghini, it is a Hurricane

/*
    JavaScript Static Methods :  
            Static class methods are defined on the class itself.
            You cannot call a static method on an object, only on an object class.
*/

class Person{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    static greet(hours){
        if(hours<12){
            console.log(`Good Morning!!!`)
        }else if(hours<16){
            console.log(`Good Afternoon!!!`)
        }else{
            console.log(`Good Evening!!!`)
        }
    }

    getData(){
        console.log(`The name of Person is : ${this.name}.\nThe email of Person is : ${this.email} `)
    }
}

const p = new Person("Yogesh","yogesh@gmail.com")
console.log(Person.greet(10))
console.log(p.getData())
/*
    Output : 
        Good Morning!!!

        The name of Person is : Yogesh.
        The email of Person is : yogesh@gmail.com
*/

