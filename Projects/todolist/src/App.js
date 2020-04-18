import React, { PureComponent } from "react";
import ItemList from "./Components/ItemList";
import TodoForm from "./Components/TodoForm";

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
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <TodoForm
              onFormSubmit={this.onFormSubmit}
              onInputChange={this.onInputChange}
              term={this.state.term}
            />
            <ItemList items={this.state.items} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
