import React from "react";
import ItemList from "./Components/ItemList";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: ["bacon", "honey", "sugar"],
      term: "",
    };
  }

  render() {
    return (
      <div>
        <ItemList items={this.state.items} />
        <form>
          <input type="text" placeholder="new item" value={this.state.term} />
        </form>
      </div>
    );
  }
}

export default App;
