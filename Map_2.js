Array.prototype.MyMap=function(){
    let newArr=[];
    for(let i=0;i<this.length;i++){
        let v = this[i];
        console.log(`Value of v is ${v}`)    //1 -  Value of v is  4
        let modified_elemnt = callback(v,i,this);
        console.log(`Value of v is ${modified_elemnt}`)//3- Value of v is 16
        newArr.push(modified_elemnt)
    }
    return newArr;
}

let arr=[4,9,16,25];
let callback=(v,i,oarr)=>{
    console.log(`${v} @ ${i} in ${oarr}`) //2-  4 @ 0 in [4,9,16,25
    return v*v;
}
let newArr= arr.MyMap(callback);
 console.log(newArr)
// console.log(arr);