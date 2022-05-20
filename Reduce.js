Array.prototype.MyReduce= function(callback,currVal){
    // if(currVal==undefined){
    //     currVal=0;
    // }   
    let oarr = this;
    for(let i=0;i<this.length;i++){
        if (currVal === undefined && i === 0) {
            currVal = oarr[0]
            continue
        }
        let v= oarr[i];
        currVal = callback(currVal,v,i,oarr);
    }
    return currVal;
}

let arr =[1,2,3,4,5];
let arr_2=['a','b','c','d']

let sum = arr_2.MyReduce((ArraySum,v,i,oarr)=>{ 
    return ArraySum+v;
},'v');
console.log(sum);