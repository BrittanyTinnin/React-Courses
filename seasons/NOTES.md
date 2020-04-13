## Rules of Class Components

- Must be a JavaScript class
- Must extend (subclass) React.Component
- Must define a 'render' method that returns some amount of JSX

## Rules of State

- Only usable with class components
- You will confuse props with state :(
- 'State' is a JS object that contains data relevant to a component
- Updating 'state' on a component causes the component to (almost) instantly rerender
- State must be initialized when a component is created
- State can _only_ be updated using the function 'setState'
- two ways to initialize state

## Component Lifecycle

- constructor
- render
  ** Content visible on screen **
- componentDidMount
  ** Sit and wait for updates **
- render
- componentDidUpdate
  ** Sit and wait until this component is not longer shown **
- componentWillUnmount
