// Callback : CALL YOU BACK LATER
// ================================================================================
// let fun1=(a)=>{
// console.log("This is inside fun1 -> 1");
// a();
// }
// fun1(function(){
//     console.log("This is inside fun2 -> 1");

// })

// ================================================================================

// setTimeout(function(){
//     // document.getElementById("root").innerHTML = "Welcome to world";
//     console.log("Inside the timer function");
// }, 5000);    //Settimeout ka kaam poora hijaaye tab iske ander invoked fun ko yaad se call kr lena




// let x=(y)=>{
//     console.log("Inside the x");
//     y();
// }


// function y(){
//     console.log("Inside the y");
// }

// x(y); // X ko bulaya hai aur bola hai ki tera kaam hojaaye tab Y ko yaad se call kar lena // Y is a callback
//============================================================================================
// API FETCH (Student)
// 2s Roll Number
// 2s Student other details
// 2s Student gender



(function(){
    setTimeout(()=>{
        console.log("Inside First Function");
        let roll_n =[1,2,3,4,5];
        setTimeout((roll_n)=>{
            console.log("Inside Second Function");
            const st_details={
                name:"Kartik",
                course:"B.Tech"
            }
            console.log(`Hi My name is ${st_details.name} and my course is ${st_details.course} and my 
            roll No is ${roll_n}`);
            setTimeout(()=>{
                let gender="male";
                console.log("Inside Last Function");
                console.log(`Hi My name is ${st_details.name} and my course is ${st_details.course} and my 
                roll No is ${roll_n} and my gender is ${gender}`);
            },2000,st_details)
        },2000,roll_n[1])
    },2000)
})()