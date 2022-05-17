Array.prototype.Myfilter = function(call){
    let arr = this;
    let newArr=[];
    for (let i=0;i<arr.length;i++){
        let v = arr[i];
        let m_o_3= call(v,i,arr);
        if(m_o_3 == true){
            newArr.push(v);
        }
    }
return newArr
}


let arr =[3,4,9,21,6,8,10,11,18,24,12]

let MulO_3 =arr.Myfilter(function(v,i,oarr){
    if(v%3==0){
        return true;
    }
});
console.log(MulO_3) 