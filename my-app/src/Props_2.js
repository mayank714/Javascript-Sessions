import React from "react";

// function Props_2(args) {
//   return (
//     <div>{args.name}</div>
//   )
// }
class Props_2 extends React.Component {
  render(props) {
    
    return (
      <>
        <div>{this.props.propses.name}</div>
        <div>{this.props.propses.Age }</div>
        <div>{this.props.propses.Edu.edu_1}</div>
      </>
    );
  }
}

export default Props_2;
