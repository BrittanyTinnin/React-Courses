import React from "react";
import Item from './Item';

class ItemList extends React.PureComponent {
  render() {
    const itemList = this.props.items.map((item) => <Item item={item} />);

    return <div>{itemList}</div>;
  }
}

export default ItemList;
