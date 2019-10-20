import React, { Component } from 'react';
import axios from 'axios';
import formatText from './utils/formatText';
import LikeButton from './LikeButton';

export default class PokemonProfile extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      stats: [],
      height: '',
      weight: '',
      types: [],
      abilities: []
    };
  }

  async componentDidMount() {
    const apiResults = await axios.get(
      'https://pokeapi.co/api/v2/pokemon/' + this.props.match.params.name
    );

    // console.log(apiResults.data);

    this.setState({
      name: apiResults.data.name,
      types: apiResults.data.types,
      stats: apiResults.data.stats,
      height: apiResults.data.height,
      weight: apiResults.data.weight,
      abilities: apiResults.data.abilities
    });
  }

  render() {
    return (
      <>
        <a className="back-link" href="/">
          Back to list
        </a>
        <div className="pokeman-profile">
          <LikeButton
            likePokeman={this.props.likePokeman}
            pokeman={this.state.name}
            likedPokemon={this.props.likedPokemon}
          />
          <img
            src={
              'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/' +
              this.state.name +
              '.png'
            }
            alt={this.state.name}
          />
          <h2 className="pokeman-profile__name">
            {formatText(this.state.name)}
          </h2>
          <ul className="types-list">
            {this.state.types.map(type => (
              <li key={type.type.name} className={"types-list__item types-list__item--" + type.type.name}>
                {formatText(type.type.name)}
              </li>
            ))}
          </ul>
          <table className="stats-table">
            <tbody>
              <tr>
                <td>Abilities</td>
                <td>
                  <ul>
                    {this.state.abilities.map(ability => (
                      <li key={ability.ability.name}>
                        {formatText(ability.ability.name)}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
              {this.state.stats.map(stat => (
                <tr key={stat.stat.name}>
                  <td>{formatText(stat.stat.name)}</td>
                  <td>{stat.base_stat}</td>
                </tr>
              ))}
              <tr>
                <td>Height</td>
                <td>{this.state.height}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{this.state.weight}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
