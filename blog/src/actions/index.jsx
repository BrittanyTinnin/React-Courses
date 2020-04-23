import _ from "lodash";
import jsonPlaceholder from "../apis/jsonplaceholder";

export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, "userId")); //maps through all posts and only pulls the userId
    userIds.forEach((id) => dispatch(fetchUser(id)));
  };
};

// when calling an action creator inside of an action creator, we need to make sure we dispatch the result of calling the action creator

// Action Creator

export const fetchPosts = () => {
  //defined a function that's going to return a function and use redux-thunk middleware for the network response
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    console.log(response.data);
    dispatch({ type: "FETCH_POSTS", payload: response.data }); //dispatch function initiate changes to data on the redux side of app

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

//using lodash -> _.memoize
// export const fetchUser = (id) => {
//   return (dispatch) => {
//     _fetchUser(id, dispatch);
//   };
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
