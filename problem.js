



// function countVowel(str) { 

//   const count = str.match(/[aeiou]/gi).length;

  
//   return count;
// }
// console.log(countVowel("Hi i'm dolo "));

// let a = 10;
// let b=20;
// let x;
 
// x=a;
// a=b;
// b=x;
// console.log("value of a:"+a);
// console.log("value of b:"+b);

// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a); 
// console.log(b);
// let name ="mamdam";
// let name1="";
//  for (var i=name.length; i>=0; i--){
//       name1 +=name.charAt(i);
//  }
// if(name1===name){
//   console.log("it is panlidrome");
// }else{
//   console.log("it is not panlidrome");
// }


// var name= "vaibhavi Rakesh More";
// console.log(name.match([]));

// const keys = {
//   upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   lowerCase: "abcdefghijklmnopqrstuvwxyz",
//   number: "0123456789",
//   symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
//   password:"",
// }
// const getKey = [
//   function upperCase() {
//     return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
//   },
//   function lowerCase() {
//     return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
//   },
//   function number() {
//     return keys.number[Math.floor(Math.random() * keys.number.length)];
//   },
//   function symbol() {
//     return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
//   }
// ];

// const keys = {
//   upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   lowerCase: "abcdefghijklmnopqrstuvwxyz",
//   number: "0123456789",
//   symbol: "@#$%^&*()_+~|}{[]></-="
// }
// const getKey = [
//   function upperCase() {
//     return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
//   },
//   function lowerCase() {
//     return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
//   },
//   function number() {
//     return keys.number[Math.floor(Math.random() * keys.number.length)];
//   },
//   function symbol() {
//     return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
//   }
// ];

var chars = "abcdefghijklmnop";
var num="12345678";
var uchars="ABCDEFGHIJKLMNOP";
var schar="!@#$%"
var passwordLength = 8;
var password = "";
for (var i = 0; i <= 2; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
 for (var i = 0; i <=0; i++) {
  var randomNumber = Math.floor(Math.random() * num.length);
  password +=num.substring(randomNumber, randomNumber +1);
 }
 for (var i = 0; i <=1; i++) {
  var randomNumber = Math.floor(Math.random() * schar.length);
  password +=schar.substring(randomNumber, randomNumber +1);
 
 }
 for (var i = 0; i <=1; i++) {
  var randomNumber = Math.floor(Math.random() * uchars.length);
  password +=uchars.substring(randomNumber, randomNumber +1);
 
 }
 
 

 console.log(password);