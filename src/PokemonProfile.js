import React, { Component } from 'react';
import axios from 'axios';

export default class PokemonProfile extends Component {
  constructor() {
    super();
    this.state = {
      pokeman: {}
    }
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.match.params.name).then(res => {
      // console.log(res.data);
      this.setState({pokeman: res.data});
    });
  }

  render() {
    let pokeman = this.state.pokeman;

    return (
      <div>
        <p>{pokeman.name}</p>
      </div>
    );
  }
}
