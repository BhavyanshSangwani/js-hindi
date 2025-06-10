//Primitive datatypes=call by value
//7 types=String,Number,Boolean,null,undefined,symbol,BigInt


//Refrence/Non-Primitive =call by refrence
//Array,Objects,function
const id= Symbol('123')
const  anotherid=Symbol('123')
console.log(id===anotherid)
console.log(id);
console.log(anotherid)
const heros=["Shaktiman","naagraj","Doga"];
let myObj={
   name:"hitesh",
   age:22
}


const myFunction=function(){
    console.log("Hello world");
}