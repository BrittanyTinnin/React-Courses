import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props); //super calls the constructor function inside React.Component, calls parent constructor
    //initialize state here

    // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT
    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setState to update state object
        console.log(position);
        this.setState({ lat: position.coords.latitude, errorMessage: "" });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
        //not required to update every property of state
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

/*
Timeline Execution of above code
- JS file loaded by browswer
- Instance of App component is created
- App components 'constructor' function gets called
- State object is created and assigned to the 'this.state' property
- We call geolocation service
- React calls the components render method
-App returns JSX, gets rendered to page as HTML
...
- we get result of geolcation
- We update our state object with a call to 'this.setState'
- React sees that we updated the state of a component
- React calls our 'render' method a second time
- Render method returns some (updated) JSX
- React takes that JSX and updates content on the screen
*/
