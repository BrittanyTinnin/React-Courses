import React from "react";
import SearchBar from "./SearchBar";

import youtube from "../api/youtube";
// import API_KEY from "../api/youtube";

class App extends React.Component {
  onTermSubmit = (term) => {
    const KEY = "AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg";
    youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
