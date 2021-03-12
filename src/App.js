import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // life cycle method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className='App'>
        <input type='search' placeholder='search monsters...' onChange={e =>
          this.setState({ searchField: e.target.value })}
         />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}
d

export default App;
