import {useState, useEffect, ChangeEvent} from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    let newFilteredMonters = monsters.filter((x) => {return x.name.toLocaleLowerCase().includes(searchField)});

    setFilteredMonsters(newFilteredMonters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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

export default App;
