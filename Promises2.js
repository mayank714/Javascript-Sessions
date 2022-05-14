(()=>{

// things to remember ==> 1-Promise ko invole kaise krre hai 
// 2- How to use the invoked promise


//  2s me mere ko rollNo milega
//  2s student data fetched
const promise_Obj1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        roll_no =[1,2,3,4,5];
        if(roll_no.length>0){
            resolve(roll_no);
        }
        else{
            reject("API not working");
        }
    },2000)
});

const promise_Obj2 =(rollnum)=>{
    return new Promise((resolve,reject)=>{
        const st_data={
            name:"Kartik",
            Course :"B.Tech.",
            age : 21
        }
        if(rollnum<=0){
            reject(`Roll No not valid`);
        }
        resolve(`My name is ${st_data.name}. My course is ${st_data.Course}. My age is ${st_data.age}. My roll No is ${rollnum}`);
    })
}

promise_Obj1.then((roll_no)=>{
    console.log(roll_no);
    
    return promise_Obj2(roll_no[1])


    
}).then((abc)=>{
    console.log(abc);

}).catch((err)=>{console.log(err)}).catch((error)=>{
    console.log(error);
})
})()
// function abc ( a){
    
// }
// let abc =(a)=>{console.log(a)}   flat arrow function