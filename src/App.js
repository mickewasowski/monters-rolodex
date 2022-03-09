import {Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super(); 

    this.state = {
     monsters: [],
     searchField: '',
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
        })
      })
  }
  
  render() {

    let newMontersArray = this.state.monsters.filter((x) => {return x.name.toLocaleLowerCase().includes(this.state.searchField)});

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
            let searchField = event.target.value.toLocaleLowerCase();
          
            this.setState(() => {
              return { searchField}
            });
          }}/>
        
        {
          newMontersArray.map((x) => { 
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