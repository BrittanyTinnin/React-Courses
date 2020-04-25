// import { EDIT_STREAM } from "../actions/types";

// const streamReducer = (state = {}, action) => {
//   switch (action.type) {
//     case EDIT_STREAM:
//       const newState = { ...state };
//       newState[action.payload.id] = action.payload;
//       return newState;
//     // return { ...state, [action.payload.id]: action.payload };
//     default:
//       return state;
//   }
// };

import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      let newObject = {};
      action.payload.forEach((stream) => (newObject[stream.id] = stream));
      return { ...state, ...newObject };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return { [action.payload.id]: action.payload, ...state };
    default:
      return state;
  }
};
