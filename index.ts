let x: number = 4;
console.log(x)


//x= number , string , any

function greet(firstname: string| number){
    console.log("firstname" + firstname);
}

function sum (a:number , b: number):number{
    console.log(a+b)
    return a+b;

}
sum(1,2)
//explicitly return type ni diya to bhi vo automatically infer kar leta hai


function delayCount(fn: ()=> number) {
    setTimeout(fn,1000)
}

function delayedCount(fn: (a:string/*argument of iinner fn */)=> number/*return type of inner function */):void {
    setTimeout(fn,1000)
}    


function greeet(user:{
    name:string,
    age:number
}){
    console.log(UserActivation.name)

}
greeet({
    name:"akshat",
    age:21
})

let user = {
//impicitly bhi le lega
}

let user2 :{
name :string,age:number
} = {name:"ajsat",age:21}




//basically anything: type
// user : {}
//name:string

/*now instead of defining theat user type in 2 places , we can creater a interface and pass it on as typw ehenever needed */

interface UserType {
    firstname:string,
    age:number
}

function ggreeet(user:UserType){
console.log(user)
}

let uuser:UserType ={
    firstname:"akshat"
,
age:21}
ggreeet(uuser)

type User = {
    firstname:string,
    age:number
}
//fromabove we can co nclude tha tonterface and type are two same things but type come with few more added advantages .

interface name {}
type names = {}
type namess = string| number;
// above line cannot be written with the help og interface


//type can be used to calculate the intersection also 

type Employee = {name:string,department:string}
type Manager = {name :string,startdate:Date}

type teamlead = Employee & Manager;

//so the team lead contains name department and startdate
/*interface Employee = {name:string,department:string}
interface Manager = {name :string,startdate:Date}
type teamlead = Employee & Manager;*/

interface Userout {
    name:string,
    age:number,
    address?:address
    }

 const amuser:Userout= {
     name:"string",
    age:21,
    address:address


} 

//interface me key:value me value khud bhi ek interface ho sakta hai
interface address {
     street:string,
        no:number
}


//interfaces can be implemented as classes but types can not//see the syntax of how we write a fubction in actual object , insidea  function , inside a class in both cases like when creating a class object and while declaring it in object.   

interface x{
    name:string,
    isLegal():boolean
}

let xy : x ={
    name:"akshat",
    isLegal() {
        console.log("hi");
        return true;
    }
} 

class Managersss implements x {
    name:string;
    age:number;
    isLegal(): boolean {
        return this.age<18
    }
    k:number
    constructor(name:string,age:number,k:number)
    {
        this.age = age;
        this.name = name;
this.k = k
    }

}

const m = new Managersss("akshat",21,22)
console.log(m.isLegal());

//SOME CLASS IMPLEMENTS INTERFACE  means vo sari cheezen jo us interface me hai vo class me honi hi chhiye at least .

//that function is class can also be written as  
//isLegall = ()=>{};

// constructor me koi function likha hai to vo object ke bante hi automatically chalega;
//class me koi function likha hai to jab object ban jaega tab us object ke paas ye property hogi ki objectname.islegal() karke us function ko use kar le



//we can implement interfaces as class but not types

//abstract class me kuch jada nahi hai bas , jo bhi function abstract karke likhte hian unme unki bodi me kuch ni rehta , bas el datatype dete hain , usko ham implementation ke time use karte hain , har functio ke andar apni body rehti hai jese print meow , bhow bhow ,neigh

abstract class Uwse{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name =name;
        this.age = age;

    }
    greeet():string{
return "A"
    }
     greet():void{
console.log("hi")
    }
    abstract greeeet():{ 

    }
    abstract greeeeet:()=>string;
}

//Interface me function kaise likhte hain?
// interface MyInterface {
//     // Method signature (no body)
//     greet(): string;

//     // Function as property (arrow function type)
//     sayHi: () => void;
// }



// class MyClass implements MyInterface {
//     greet(): string {
//         return "Hello!";
//     }

//     sayHi = () => {
//         console.log("Hi");
//     };
// }




// Class me function kaise likhte hain?

// class MyClass {
//     // Method
//     greet(): string {
//         return "Hello";
//     }

    // Property with arrow function
//     sayHi: () => void = () => {
//         console.log("Hi");
//     };
// }



// Constructor ke andar function kaise likhte hain?
// class MyClass {
//     greet: () => string;

//     constructor() {
//         // Assigning function in constructor
//         this.greet = () => {
//             return "Hello from constructor";
//         };
//     }
// }




// Abstract method (no body)
// abstract class MyAbstractClass {
//     abstract greet(): string; // Must be implemented by subclass
// }


// Concrete method (with body)

// abstract class MyAbstractClass {
//     greet(): string {
//         return "Hello from base class";
//     }
// }


// Abstract property (function type)

// abstract class MyAbstractClass {
//     abstract sayHi: () => void;
// }



// Subclass must implement abstract members:
// class MyClass extends MyAbstractClass {
//     greet(): string {
//         return "Hello from subclass";
//     }

//     sayHi = () => {
//         console.log("Hi from subclass");
//     };
// }













































