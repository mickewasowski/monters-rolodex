import {Component} from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
        <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='search monsters'/>
        
        <CardList monsters={newMontersArray}/>   
      </div>
    );
  }
}

export default App;

//jsonplaceholder.typicode.com/users