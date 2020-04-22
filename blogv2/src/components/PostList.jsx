import React from "react";

class PostList extends React.Component {
  render() {
    return <div>PostList!</div>;
  }
}

export default PostList;

// STEPS:
// 1. show a list of posts in the PostList Component
//   - connect the app to the redux store
//   - componentDidMount the lifecycle method should call an action creator
//   - setup action creator, use axios to make the call
//   - setup reducer
//   - have the blog posts show up in the class component PostList
