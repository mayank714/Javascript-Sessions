Array.prototype.MySome = function(call){
    let arr = this;
    for(let i=0;i<arr.length;i++){
        let v = arr[i]
        let rosome = call(v,i,arr);
        console.log(`Array is ${v}`)
        if(rosome ==false){
            return false;
        }
    }
    return true;
}


let arr =[3,9,21,6,18,24,12];

let roevery = arr.MySome(v => v%3==0);
console.log(roevery)