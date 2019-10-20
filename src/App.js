import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonList from './PokemonList';
import PokemonProfile from './PokemonProfile';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [likedPokemon, setLikedPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=150').then(res => {
      setPokemon(res.data.results.map(pokeman => pokeman.name));
    });
  }, []);

  useEffect(() => {
    setLikedPokemon(JSON.parse(localStorage.getItem('likedPokemon')) || []);
  }, []);

  const likePokeman = pokeman => {
    let newLikedPokemon;

    if (likedPokemon.includes(pokeman)) {
      newLikedPokemon = likedPokemon.filter(item => item !== pokeman);
    } else {
      newLikedPokemon = likedPokemon.concat(pokeman);
    }

    setLikedPokemon(newLikedPokemon);
    localStorage.setItem('likedPokemon', JSON.stringify(newLikedPokemon));
  };

  const Profile = props => {
    return (
      <PokemonProfile
        likedPokemon={likedPokemon}
        likePokeman={likePokeman}
        {...props}
      />
    );
  };

  return (
    <>
      <header className="site-header">
        <a href="/">
          <img
            className="site-logo"
            src="./pokemon-logo.png"
            alt="Pokemon Logo"
          />
        </a>
      </header>
      <Router>
        <Switch>
          <Route exact path="/">
            <PokemonList
              pokemon={pokemon}
              likedPokemon={likedPokemon}
              likePokeman={likePokeman}
            />
          </Route>
          <Route path="/:name" render={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
