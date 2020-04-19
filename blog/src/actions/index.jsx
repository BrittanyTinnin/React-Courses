import jsonPlaceholder from "../apis/jsonplaceholder";

// Action Creator

export const fetchPosts = async () => {
  // Bad approach!!
  const response = await jsonPlaceholder.get("/posts");

  return {
    type: "FETCH_POSTS",
    payload: response,
  };
};

// - action creators must return plain js objects with a type property
