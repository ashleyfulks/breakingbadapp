import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/ui/characters/CharacterGrid';
import Search from './components/ui/Search'
import './App.css';

const App = () => {
  const [ items, setItems ] = useState([])
  const [ isLoading, setisLoading ] = useState(true)
  const [ query, setQuery ] = useState('')
  
useEffect(() => {
  const fetchItems = async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

    setItems(result.data)
    setisLoading(false)
  }
  fetchItems()
}, [query])

  return (
    <div className="container">
    <Header/>
    <Search getQuery={(e) => setQuery(e)}/>
    <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
