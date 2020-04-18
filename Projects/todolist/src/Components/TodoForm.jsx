import React from "react";

const TodoForm = (props) => {
  console.log(props);
  return (
    <div className="ui form">
      <form onSubmit={props.onFormSubmit}>
        <div className="field">
          <input
            type="text"
            placeholder="new item"
            value={props.term}
            onChange={props.onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
