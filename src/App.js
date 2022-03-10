// import {Component} from 'react';
import {useState, useEffect} from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          return res.json();
        })
        .then(users => {
          setMonsters(users)
        });
  }, []);

  useEffect(() => {
    let newFilteredMonters = monsters.filter((x) => {return x.name.toLocaleLowerCase().includes(searchField)});

    setFilteredMonsters(newFilteredMonters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    let searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
 
  const newMontersArray = monsters.filter((x) => {return x.name.toLocaleLowerCase().includes(searchField)});


  return(
    <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox 
          className='monsters-search-box' 
          onChangeHandler={onSearchChange} 
          placeholder='search monsters'/>
        
        <CardList monsters={newMontersArray}/>   
      </div>
  )
}


// class App extends Component {
//   constructor(){
//     super(); 

//     this.state = {
//      monsters: [],
//      searchField: '',
//     }
//   }


//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => {
//         return res.json();
//       })
//       .then(users => {
//         this.setState(() => {
//           return {monsters: users}
//         })
//       })
//   }

//   onSearchChange = (event) => {
//     let searchField = event.target.value.toLocaleLowerCase();
  
//     this.setState(() => {
//       return { searchField}
//     });
//   }
  
//   render() {

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     let newMontersArray = monsters.filter((x) => {return x.name.toLocaleLowerCase().includes(searchField)});

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monsters'/>
        
//         <CardList monsters={newMontersArray}/>   
//       </div>
//     );
//   }
// }

export default App;

//jsonplaceholder.typicode.com/users