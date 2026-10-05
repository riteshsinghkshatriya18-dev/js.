// singelton
//Object.create
 // object literals


 const mySym = Symbol("key1")

 const JsUser = {
    name: "Hitesh",
    age : 18,
    [mySym]: "myKey1",
    location :"Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday"]

 }
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@.com"
//Object.freeze(JsUser)
JsUser.email ="hitesh@12.com"
// console.log(JsUser);

JsUser.greeting = function(){
      console.log("Hello User");
}
JsUser.greetingTwo = function(){
      console.log(`Hello User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


