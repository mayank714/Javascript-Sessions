Array.prototype.myMap = function (callback) {
    // console.log('jggfkwef'+)
  let newArray = [];
  let x = this.length;
  for (let i = 0; i < x; i++) {
    let v = this[i];
    console.log(v)
    let counter = callback(v, i, this);
    console.log(`The value of counter is ${counter}`)
    newArray.push(counter);
  }
  return newArray;
};

const numbers = [4, 9, 16, 25];

const newArr = numbers.myMap((v, i, orr) => {
  console.log(`${v} @ ${i} =${orr}`);
  return v * v;
});
console.log(newArr);

// console.log("Hello");
