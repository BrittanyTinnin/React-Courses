# REDUX

### Redux Cycle

- Action Creator -> Action -> dispatch -> Reducers -> State
- To change state of our app, we call an .. Action Creator -> produces an Action -> get fed to Dispatch -> forwards the action to Reducers -> creates new State -> wait until we need to update state again

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
