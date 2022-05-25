import react from "react";
import ReactDOM from "react-dom";
// What is JSX
// Babel
//  State : Can be something that needs an update. Can be mmutable 
class App extends react.Component {
  constructor(props){
    super(props);
    this.state={
      value :10,
    }
  }
  Increment=(event)=>{
    console.log(event.target);
    this.setState({value:this.state.value+1});
  }
  Decrement=()=>{
    this.setState({value:this.state.value-1});
  }
  changed=(event)=>{
    console.log(event.target.value)
  }

  render() {
    return (
      <div>
        <input onChange={this.changed} placeholder="Name"/>

        <h1>{this.state.value}</h1><br></br>
        <button  onClick={this.Increment}>Increment me</button>
        <button  onClick={this.Decrement}>Decrement me</button>
      </div>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
