import React, { Component } from 'react';
import axios from 'axios';

export default class PokemonProfile extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      types: {}
    };
  }

  componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + this.props.match.params.name)
      .then(res => {
        console.log(res.data);
        this.setState({ name: res.data.name });
        this.setState({ types: res.data.types });
      });
  }

  render() {
    return (
      <>
        <a className="back-link" href="/">
          Back to list
        </a>
        <div className="pokeman-profile">
          <h1>{this.state.name}</h1>
        </div>
      </>
    );
  }
}
