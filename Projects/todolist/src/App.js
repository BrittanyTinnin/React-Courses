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

  onDelete = (event) => {
    event.preventDefault();
  };

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
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="new item"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
