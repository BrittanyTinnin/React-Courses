import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.PureComponent {
  componentDidMount() {
    this.props.fetchPosts(); //calls action creator
  }

  render() {
    return <div>Post List!</div>;
  }
}

export default connect(null, { fetchPosts: fetchPosts })(PostList); //arguments of connect method -> mapStateToProps, mapDispatchToProps or object for action creators -> passing an object instead of a function means connect with automatically call bindActionCreators for you internally
