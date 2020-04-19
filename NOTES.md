# REDUX

### Redux Cycle

- Action Creator -> Action -> dispatch -> Reducers -> State
- To change state of our app, we call an .. Action Creator -> produces an Action -> gets fed to Dispatch -> forwards the action to Reducers -> creates new State -> wait until we need to update state again

## ...with Asychronous Actions

- Action Creator -> Action -> dispatch -> Middleware(only for async requests) -> Reducers -> State
- To change state of our app, we call an .. Action Creator -> produces an Action -> gets fed to Dispatch -> forwards the action to Middleware -> sends action to Reducers -> creates new State -> wait until we need to update state again

## Libraries need to use Redux

- React - same lib you're used to
- React-Redux - gets React and Redux to work together
- Redux- same lib we just used in Codepen

## Using Redux

- when using, need to move state over to redux
- create reducers representing state
- use Action Creators to change state
- Provider and Connect, implemented by React-Redux
- Provider: will have eternal reference to Redux store, provides info to all components inside app
- Connect: can communicate with Provider through the context system

## App Struture

- /src
  - /actions
  - /components
  - /reducers
  - index.js

## Actions

- In Redux, action creators simply return an action
- actions only describe what happened, but don't describe how the application's state changes
- when you know what your state object looks like, then you write the reducers for it

## Reducers

- reducers specify how the application's state changes in response to actions sent to the store
- the reducer is a pure function that takes the previous state and an action, and returns the next state (function nameofReducer(previousState, action) => nextState)
- NEVER DO INSIDE A REDUCER:
  - Mutate its arguments;
  - Perform side effects like API calls and routing transitions;
  - Call non-pure functions, e.g. Date.now() or Math.random().
- reducer must be pure: Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.

## General Data Loading with Redux

- component gets rendered onto the screen
- components 'componentDidMount' lifecycle method gets called, has to be called inside a class component
- we call action creator from 'componentDidMount'
  ** Components are generally responsible for fetching data they need by calling an action creator, usually inside a lifecycle method **

* Action creator runs code to make an API request
* API responds with data
* Action creator return an 'action' with the fetched data on the 'payload' property
  ** Action creators are responsible for making API requests, this is where Redux-Thunk comes into play **

- Some reducer sees the action, returns the data off the 'payload'
- Because we generated some new state object, redux/react-redux cause our React-app to be rerendered
  ** we get fetched data into a component by generating new state in our redux store, then getting that into our component through mapStateToProps **

## Middleware in Redux

- Function that gets called with every action we dispatch
- Has the ability to STOP, MODIFY, or otherwise mess around with actions
- Tons of open source middleware exist
- Most popular use of middleware is for dealing with async actions
- we are going to use a middleware called 'Redux-Thunk' to solve our async issues
