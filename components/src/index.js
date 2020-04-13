import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar}
        author="Sam"
        timeAgo="Today at 4:45PM"
        text="This is a sentence."
      />
      <CommentDetail
        author="Alex"
        timeAgo={}
        text={faker.lorem.sentence}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 4:45PM"
        text={faker.lorem.sentence}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
