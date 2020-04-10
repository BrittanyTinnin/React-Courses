// import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = function () {
  return (
    <div>
      <label class="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style="background-color: blue; color: white;">Submit</button>
    </div>
  );
};

// const App = () => {
//   return <div>Hi there! </div>;
// };

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.getElementById("root")
  // document.querySelector('root')
);
