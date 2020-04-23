import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderedList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item">
          <i className="large middle aligned user circle icon" />
          <div className="content">
            <h2 className="header">{post.title}</h2>
            <div className="description">
              <p>{post.body}</p>
            </div>
            <UserHeader />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui very relaxed list">{this.renderedList()}</div>;
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