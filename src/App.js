import {Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super(); 

    this.state = {
     monsters: [],
    }
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(users => {
        this.setState(() => {
          return {monsters: users}
        }, () => {console.log(this.state)})
      })
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((x) => { 
            return <div key={x.id}>
              <h1>{x.name}</h1>
            </div>
          })
        }        
      </div>
    );
  }
}

export default App;

//jsonplaceholder.typicode.com/users