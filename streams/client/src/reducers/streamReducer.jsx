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
      console.log("in reducer, state-keys: " + Object.keys(state));
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
      // console.log("state-keys: " + Object.keys(state));
      // console.log("action.payload: " + action.payload);
      // let obj = Object.assign({}, state);
      // { ...state, items: state.items.filter(i => i.id !== action.payload.id };
      // const doSomething = (obj, prop) => {
      //   let res = Object.assign({}, obj)
      //   delete res[prop]
      //   return res
      // }
      // delete obj[action.payload];
      // return { ...state, obj };
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
