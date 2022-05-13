// 

// function App(){   //Normal fun
//     console.log("Hello world")
// }


// let App=()=>{}  simple arrow function


// let App=()=>{      //return type function
//     return ({

//     })
// } 

function OuterFun(a){
    
    console.log("This is outer function")
    function innerfun(){
        let sum =a+b;
      
        console.log("Sum is "+sum);

    }
    let b=10
   return innerfun;
}
console.log("Prog outer body")
let inner =OuterFun(10)();
// console.dir(inner)
// inner();
