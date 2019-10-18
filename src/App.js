import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonList from './PokemonList';
import PokemonProfile from './PokemonProfile';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=150').then(res => {
      setPokemon(res.data.results.map(pokeman => pokeman.name));
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonList pokemon={pokemon} />
        </Route>
        <Route path="/:name" component={PokemonProfile} />
      </Switch>
    </Router>
  );
}

export default App;
