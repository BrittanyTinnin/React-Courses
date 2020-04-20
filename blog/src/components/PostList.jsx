import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.PureComponent {
  componentDidMount() {
    this.props.fetchPosts(); //calls action creator
  }

  renderList() {
    //helperMethod
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList); //arguments of connect method -> mapStateToProps, mapDispatchToProps or object for action creators -> passing an object instead of a function means connect with automatically call bindActionCreators for you internally
