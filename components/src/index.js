import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        timeAgo="Today at 4:45PM"
        content={faker.lorem.sentences()}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        timeAgo="Today at 2:00AM"
        content={faker.lorem.sentences()}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        timeAgo="Today at 4:45PM"
        content={faker.lorem.sentences()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
