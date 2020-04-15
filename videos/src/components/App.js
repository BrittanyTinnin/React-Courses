import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

import youtube from "../api/youtube";
// import API_KEY from "../api/youtube";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const KEY = "AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg";
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
