import React, { PureComponent } from "react";
import ItemList from "./Components/ItemList";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      term: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    console.log(this.state.term);
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.setState({ term: "", items: [...this.state.items, this.state.term] });
  };

  render() {
    return (
      <div>
        <ItemList items={this.state.items} />
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="new item"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default App;
