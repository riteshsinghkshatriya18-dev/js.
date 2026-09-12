// Primitive

// 7 types : string,number,boolean,null,undefined,symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 5745874575457636n

// Reference (Non primitive)

// Array,Objects,Functions

const hero =["shakatiman","naagraj","doga"]
let myObj ={
    name:"ritesh",
    age:22,
}

const myfunction=function(){
    console.log("Hello world")
}
console.log(typeof bigNumber)
