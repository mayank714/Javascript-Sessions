let arr =[
    {
    name :"Mayank Verma",
    course :"B.Tech",
    Address :"Meerut",
    Age :"24",
    gender:'M'
},
{
   name :"Kartik Arora",
   course :"B.Tech",
   Address :"Punjab",
   Age :"21",
   gender:'M'
}
,{
   name :"Amit bansal",
   course :"B.COM",
   Address :"Delhi",
   Age :"34",
   gender:'M'
},
{
   name :"Uday Shah",
   course :"BBA",
   Address :"Bengal",
   Age :"42",
   gender:'M'
},{
   name :"Riya Mittal",
   course :"MBA",
   Address :"Meerut",
   Age :"20",
   gender:'F'
},
{
  name :"Raveena Tandon",
  course :"MBA",
  Address :"Noida",
  Age :"51",
  gender:'F'
}
,{
  name :"Tina Mittal",
  course :"MBA",
  Address :"china",
  Age :"42",
  gender:'F'
},
{
  name :"Reena",
  course :"MBA",
  Address :"Modipuram",
  Age :"21",
  gender:'F'
}
]
//  Get me the details of "F" and age above 21
//  Get me the detail of "M" who is second large is age .
// let res_arr = arr.filter((v,i,oarr)=>{
//     if(v.gender=='F' && v.Age>21){
//         return v;
//     }
// })
// console.log(res_arr) 

//  Get me the detail of "M" who is second large is age .
let res_arr = arr.filter((v,i,oarr)=>{
    if(v.gender=='M'){
        return v;
    }
}).sort((a,b)=>{
    // return a.Age < b.Age ? -1 : (a.Age > b.Age ? 1 : 0);
    return a.Age-b.Age
    // if(a.Age < b.Age){
    //     return -1;
    // }
    // else{
    //     if(a.Age > b.Age){
    //         return 1;
    //     }
    //     else{
    //         return 0;
    //     }
    // }
}).filter((v,i,oarr)=>{
    if(i==oarr.length-2){
        return v;
    }
})
console.log(res_arr) 