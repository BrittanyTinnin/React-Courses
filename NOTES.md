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