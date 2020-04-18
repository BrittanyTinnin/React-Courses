import React, { PureComponent } from "react";
import { connect } from "react-redux";

class SongList extends PureComponent {
  render() {
    return <div>SongList</div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(SongList);
