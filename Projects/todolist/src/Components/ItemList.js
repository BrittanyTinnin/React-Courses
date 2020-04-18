import React from "react";
import Item from "./Item";

class ItemList extends React.PureComponent {
  onDeleteItem = () => {
    console.log("delete me");
    this.props.items.filter((item) => {
      return item.index !== item;
    });
  };

  render() {
    return this.props.items.map((item, index) => {
      return (
        <div className="ui divided list" key={index}>
          <div className="item">
            <div className="right floated content">
              <button
                onClick={this.onDeleteItem(item.index)}
                className="ui button primary"
              >
                X
              </button>
            </div>
            <Item item={item} />
          </div>
        </div>
      );
    });
    // return <div className="ui divided list">{this.renderList()}</div>;
  }
}

export default ItemList;
