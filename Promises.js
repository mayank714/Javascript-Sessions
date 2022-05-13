// (()=>{


//     // console.log("Hello World")

//     let pro = new Promise((resolve,reject)=>{
//         let a="Mayank";
//         let b ="Mayank "
//         if(a==b){
//             resolve(13);
//         }
//         else{
//             reject("The function is not defined");
//         }

//     });
//     pro.then((k)=>{
//         console.log("Success "+k);
//     }).catch((err)=>{
//         console.log("Failed");
//         console.log(err)
//     })
// })()
//====================================================================
(()=>{
let pro1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let roll_no=[1,2,3,4,5];
        if(roll_no.length>0){
            resolve(roll_no);
        }
        else{
            reject("Array is empty");
        }
    },2000);
});

let pro2=(roll_No_user)=>{
    return new Promise((resolve,reject)=>{
        let User_details={
            name:"Mayank verma",
            age:24,
            
        }
        if(roll_No_user<0){
            reject("Error is finding roll No");
        }
        resolve(`Hi, The user's name is ${User_details.name}, His age is ${User_details.age}
                    His roll no is ${roll_No_user}`);
                    
    })
}



pro1.then((roll_no)=>{
    console.log("Roll_No recieved successfully");
    setTimeout(()=>{
        pro2(roll_no[1]).then((msg)=>{
            console.log(msg)
        }).catch((err)=>{
            console.log(err);
        })
    },2000,roll_no[1])
     pro2(roll_no[1])

})
.catch((err)=>{
    console.log(err)
})
})()