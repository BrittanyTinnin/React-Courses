import jsonPlaceHolder from "../apis/jsonPlaceHolder";
// must use redux-thunk middleware in action creators to make network requests. this middleware allows an action creator to return a function, not just an object. this makes the action creator a thunk.
// when an action creator returns a function, that function will get executed by the Redux thunk middleware

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceHolder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUsers = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    console.log(response.data);
  };
};
