import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './Components/PokemonCardComponent/PokemonCard';
import SearchBar from './Components/SearchBarComponent/SearchBar';
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      setPokemons(response.data.results);
    };
    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="App">
        <h1>Pokémon List</h1>
        <SearchBar setSearchTerm={setSearchTerm} />
        <div className="pokemon-list">
          {filteredPokemons.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon} />
          ))}
        </div>
      </div>
  );
};

export default App;
