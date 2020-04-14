import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSerachSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSerachSubmit} />
      </div>
    );
  }
}

export default App;
