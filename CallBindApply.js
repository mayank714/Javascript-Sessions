let participant_1={
    course :"Mayank",
    Branch : "Verma",
    
    givename:function(a,b){
        // this.Branch ="CSE";
        console.log(`My Course is ${this.course} and my Branch is ${this.Branch}. Sum is  ${a+b}`);
    }   
}
let participant_2={
    course :"Kartik",
    Branch : "Arora",
}
let participant_3={
    course :"Vansh",
    Branch : "Arora",
    
}
// participant_1.givename.call(participant_2,1,2,3,4)
// participant_1.givename.apply(participant_2,[1,2,3,4])
let User_name= participant_1.givename.bind(participant_2,20,10);
User_name();

