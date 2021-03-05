import React from 'react';
import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      monsters: [
       
      ]
      
    };
  }

// life cycle method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users})); 
  }

  render(){
  return (
    <div className='App'>
      {
        this.state.monsters.map(monsters => (
          <h1 key={monsters.id}> {monsters.name}</h1>
        ))
      }
    </div>
  )
}
}

export default App;
