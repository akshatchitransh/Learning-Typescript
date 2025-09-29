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