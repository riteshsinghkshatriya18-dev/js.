const name= "hitesh"
const repocount = 50

console.log ( name +  repocount + " Value");

console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('hitesh-hc-hello')
console.log(typeof gameName)

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,7)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "httpd://hitesh.com/hitesh%20choudhary"


console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))