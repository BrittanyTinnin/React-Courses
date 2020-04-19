import { combineReducers } from "redux";

// Reducers
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want it That Way", duration: "1:45" },
  ];
};

const selectedSongReducer = () => {
  return {};
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
