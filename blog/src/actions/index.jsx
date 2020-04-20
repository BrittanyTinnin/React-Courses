import jsonPlaceholder from "../apis/jsonplaceholder";

// Action Creator

export const fetchPosts = () => {
  //defined a function that's going to return a function
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data }); //dispatch function initiate changes to data the on redux side of app

    // action creator returns a function, redux-thunk sees that its a function, and invokes function with dispatch argument. once the function is done, we call dispatch manually to dispatch an action, if it returns an object then its dispatched to reducers
  };

  // return {
  //   type: "FETCH_POSTS",
  //   payload: response,
  // };
};

// - action creators must return plain js objects with a type property

export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};
