Array.prototype.myreduce = function(callback,accu){
    
    for(let i =0;i<this.length;i++){
        if(accu == undefined && i == 0){
            accu = this[0];
            continue;
        }
        accu = callback(accu,this[i],i,this);
    }
    return accu;
}


let arr = ['a','b','c','d'] //[1,2,3,4,5];

let res_arr = arr.myreduce((accu,v,i,oarr)=>{
    return accu+v;
} )
console.log(res_arr);

