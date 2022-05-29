// What are props
// Ans :  property,
// Props stand for "Properties." They are read-only components. 
// It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. 
// It gives a way to pass data from one component to other components. It is similar to function arguments. 
// Props are passed to the component in the same way as arguments passed in a function.
// // Why are props used
//  let vs var vs const

// function sum(a,b){
//     a = 5 ;
//     console.log(a);
// }
// let a=2;
// let b =3
// console.log(a);
// sum(a,b);
// console.log(a);


// 2
// 5
// 2
// var =can  be re initalized and redeclared
// let = can  be re initalized but not redeclared
// const = cannot be re initalized or redeclared

// 
import react from 'react';
import  ReactDOM  from 'react-dom';
import Props_2 from './Props_2';

let Props =()=>{
    <Props_2 name="Mayank Verma"/>
    return <>Hello</>
}
export default Props;
ReactDOM.render(<Props/>,document.getElementById("root"));