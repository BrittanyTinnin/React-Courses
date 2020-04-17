import React from "react";
import Item from "./Item";

class ItemList extends React.PureComponent {
  render() {
    const itemList = this.props.items.map((item, index) => (
      <Item key={index} item={item} />
    ));
    console.log(itemList);
    return (
      <div>
        <Item item={itemList} />
      </div>
    );
  }
}

export default ItemList;
