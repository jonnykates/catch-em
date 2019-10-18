import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            label="Search Pokemon"
            value={this.state.search}
            onChange={this.updateSearch}
          />
        </div>
        <ul className="pokemon-list">
          {filteredPokemon.map(pokeman => (
            <li key={pokeman}>
              <Link to={pokeman}>
                <img
                  src={
                    'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/' +
                    pokeman +
                    '.png'
                  }
                  alt={pokeman}
                />
                <h4>{pokeman}</h4>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
