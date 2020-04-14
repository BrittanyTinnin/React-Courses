## Event Handlers

- onClick: user clicks on something
- onChange: user changes text in an input
- onSubmit: user submits a form

## Controlled vs Uncontrolled
- add value attribute to html input tag

## Axios vs Fetch
- React is a library, purpose is to display
- Axios: 3rd party package
  - returns a promise, the promise will let us know when request is completed
  - Promise Based syntax, uses .then(), or async await syntax, put async before method name, and put await in front of axios, and assign to variable, console.log(the variable)
- Fetch: function built into modern browsers, lower functioning, requires more code than axios; fetch requires a two-step process to handle incoming data and erros, axios does not

## React Refs
- use this instead of vanilla JavaScript, when using React
- Gives access to a single DOM element
- We create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props