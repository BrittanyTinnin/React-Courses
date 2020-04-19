import jsonPlaceholder from "../apis/jsonplaceholder";

// Action Creator

export const fetchPosts = () => {
  //defined a function that's going to return a function
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response });
  };

  // return {
  //   type: "FETCH_POSTS",
  //   payload: response,
  // };
};

// - action creators must return plain js objects with a type property
