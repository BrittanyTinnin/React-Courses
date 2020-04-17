import React, { PureComponent } from "react";

const Item = (props) => {
  return (
    <div>
      <div>
        {props.item} <button>Done?</button>
      </div>
    </div>
  );
};

export default Item;
