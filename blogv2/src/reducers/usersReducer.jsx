// create reducer for user and test

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
}
