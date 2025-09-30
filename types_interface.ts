//SYNTAX

interface user{
    name?:string
}

type users = {
    name ?: string
}

//you can implement an interface in a class but not a type 
class manager implements user {
    name ?:string 
    
}

//second difference is types let us do union and intersection
//intersectin => jo common hai vo ek baaar , uncommon wale sare aaenge

type managers ={
    name :string;
age:number

}
type intersected = users& managers

//unio me ya to 1st ke sare ya to 2nd ke sare ya to dono ke sare 
type union = users| managers

//MAJOR USECASE
interface one {
name :string;
age : number
}

interface two {
    name :string;
age : number;
department:number
}

function common (user:one|two){}

type com = one|two
function commonji (user:com){}


//----------------//

interface three{
    name : string|number;
}