import jsonplaceholder from "../apis/jsonplaceholder";
// must use redux-thunk middleware in action creators to make network requests. this middleware allows an action creator to return a function, not just an object. this makes the action creator a thunk.
// when an action creator returns a function, that function will get executed by the Redux thunk middleware

export function fetchPosts() {
  return () => {
    const response = jsonplaceholder.get("/posts");
    console.log(response.data);
  };
}
