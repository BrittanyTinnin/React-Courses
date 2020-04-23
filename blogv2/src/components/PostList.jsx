import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderedList() {
    return this.props.posts.map((post) => {
      return (
        <div>
          <h4>Post Title: {post.title}</h4>
          <p>Post Body: {post.body}</p>
          <p>Author</p>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderedList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList);

// STEPS:
// 1. show a list of posts in the PostList Component
//   - connect the app to the redux store
//   - componentDidMount the lifecycle method should call an action creator
//   - setup action creator, use axios to make the call
//   - setup reducer
//   - have the blog posts show up in the class component PostList
