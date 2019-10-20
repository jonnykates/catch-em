import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import formatText from './utils/formatText';
import LikeButton from './LikeButton';

export default class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
  }

  updateSearch = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    let filteredPokemon = this.props.pokemon.filter(pokeman => {
      return (
        pokeman.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !==
        -1
      );
    });

    return (
      <>
        <div className="list-search">
          <input
            type="text"
            className="search-bar"
            label="Search Pokemon"
            placeholder="Search Pokemon"
            value={this.state.search}
            onChange={this.updateSearch}
          />
        </div>
        <ul className="pokemon-list">
          {filteredPokemon.map(pokeman => (
            <li key={pokeman} className="pokemon-card">
              <LikeButton
                likePokeman={this.props.likePokeman}
                pokeman={pokeman}
                likedPokemon={this.props.likedPokemon}
              />
              <Link to={pokeman}>
                <img
                  src={
                    'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/' +
                    pokeman +
                    '.png'
                  }
                  alt={pokeman}
                />
                <h4>{formatText(pokeman)}</h4>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
