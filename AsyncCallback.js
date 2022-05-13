// Here myFunction is used as a callback
//============================================================================

// setTimeout(myFunction, 5000);

// function myFunction() {
//   document.getElementById("root").innerHTML = "Welcome to world";
// }
//============================================================================

// Instead of passing the name of a function as an argument to another function
// , you can always pass a whole function instead:
// setTimeout(function(){
//     // document.getElementById("root").innerHTML = "Welcome to world";
//     console.log("Inside the timer function");
// }, 5000);
// let x=(y)=>{
//     console.log("Inside the x");
//     y();
// }
// x(()=>{
//     console.log("Inside the y");
// })
//============================================================================
// JS is synchronus and single threaded language
// Blocking the main thread
(function () {
  setTimeout(() => {
    console.log("This is first loop");
    let roll_no = [1, 2, 3, 4, 5];
    setTimeout(
      (roll_no) => {
        let details = {
          name: "Mayank verma",
          section: "C",
        };
        console.log(
          `My name is ${details.name} and section is ${details.section} and roll no is ${roll_no}`
        );
        setTimeout(
          (details) => {
            console.log(
              `This is from last loop My name is ${details.name} and section is ${details.section} and roll no is ${roll_no}`
            );
          },
          5000,
          details
        );
      },
      5000,
      roll_no[2]
    );
  }, 5000);
})();

