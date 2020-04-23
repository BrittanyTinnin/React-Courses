import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UserHeader extends React.Component {
  render() {
    return <div>UserHeader!</div>;
  }
}

export default connect()(UserHeader);
