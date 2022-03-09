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

  onSearchChange = (event) => {
    let searchField = event.target.value.toLocaleLowerCase();
  
    this.setState(() => {
      return { searchField}
    });
  }
  
  render() {

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    let newMontersArray = monsters.filter((x) => {return x.name.toLocaleLowerCase().includes(searchField)});

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange}/>
        
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