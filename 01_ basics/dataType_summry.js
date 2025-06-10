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
/******************************************************************************* */

//Stack(Primitive datatype),Heap(Non-primitive datatype)

let name="Bhavyansh";
anotherName=name
anotherName="Aakash"
console.log(name)
console.log(anotherName)


let userOne={
    email:"user@google.com",
    upi: "user@ybl"
}
let userTwo=userOne
userTwo.email="Bhavyansh@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
