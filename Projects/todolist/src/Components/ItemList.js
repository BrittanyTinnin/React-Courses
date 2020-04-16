import React from "react";
import Item from "./Item";

class ItemList extends React.PureComponent {
  render() {
    console.log("array of items" + this.props.items);
    console.log(this.props.items);

    const itemList = this.props.items.map((item) => <Item item={item} />);

    return <div>{itemList}</div>;
  }
}

export default ItemList;
