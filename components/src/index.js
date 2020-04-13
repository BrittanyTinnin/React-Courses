import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        Are you sure you want to do this?
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo="Today at 4:45PM"
          content={faker.lorem.sentences()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo="Today at 2:00AM"
          content={faker.lorem.sentences()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo="Today at 4:45PM"
          content={faker.lorem.sentences()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
