// import react from 'react';
// import ReatDOM from 'react-dom';
// //  A state is mutable and can be passed.
// class App extends react.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       value:0,
//     }

//   }
//   increment=()=>{
//     this.setState({value:this.state.value+1});
//   }
//   render(){
//     return (
//       <>
//         <h1>{this.state.value}</h1>
//         <button onClick={this.increment}>Increment</button>
//       </>
//     );
//   }

// }
// export  default App;
// ReatDOM.render(<App/>,document.getElementById("root"));
//===================================================================================================

import react, { useState } from "react";
import ReatDOM from "react-dom";
// During func based component we set the state using hooks. And for state we are using  useState hook.
// props
// Lifecycle
// useEffect
// ContextAPI
// useReducer
// Redux

//  Where to use Class based and where to used function based?
let App = () => {
  let [initialNumber, SetNumber] = useState(10);

  return (
    <>
      <h1>{initialNumber}</h1>
      <button
        onClick={() => {
          SetNumber(initialNumber + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          SetNumber(initialNumber - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default App;
ReatDOM.render(<App />, document.getElementById("root"));
