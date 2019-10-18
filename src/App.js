import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=150').then(res => {
      setPokemon(res.data.results.map(pokeman => pokeman.name));
    });
  }, []);

  return <PokemonList pokemon={pokemon} />;
}

export default App;
