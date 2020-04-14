import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props) {
  //   super(props); //super calls the constructor function inside React.Component, calls parent constructor
  //initialize state here

  // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT to this.state
  //   this.state = { lat: null, errorMessage: "" }; //1 way to initialize state
  // }

  state = { lat: null, errorMessage: "" }; //equivalent to creating a constructor and setting state

  componentDidMount() {
    console.log("My component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
    //no border will show, casue don't have class name border
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
