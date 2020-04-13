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
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
