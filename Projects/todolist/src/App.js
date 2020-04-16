import React from "react";
import ItemList from "./Components/ItemList";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: ["bacon", "honey", "sugar"],
    };
  }

  render() {
    return (
      <div>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
