Array.prototype.MySome = function(call){
    let arr = this;
    for(let i=0;i<arr.length;i++){
        let v = arr[i]
        let rosome = call(v,i,arr);
        console.log(`Array is ${v}`)
        if(rosome ==true){
            return true;
        }
    }
    return false;
}

let arr =[3,4,9,21,6,8,10,11,18,24,12];

let rosome= arr.MySome(function(v){
    if(v%110==0){
        return true;
    }
})
console.log(rosome)

