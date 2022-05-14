// */In JavaScript, Hoisting is the default behavior of moving
//  all the declarations at the top of the scope before code execution.
//   Basically, it gives us an advantage that no matter where functions and
//    variables are declared, they are moved
//  to the top of their scope regardless of whether their scope is global or local. */

"use strict";
x = 10
console.log(x);
console.log(App);
var x ;


function App(){
    console.log("This is from program")
}

console.log(x);
console.log(App);