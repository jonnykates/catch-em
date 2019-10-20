import React, { Component } from 'react';

export default class LikeButton extends Component {
  handleChange = () => {
    this.props.likePokeman(this.props.pokeman);
  };

  render() {
    const liked = this.props.likedPokemon.includes(this.props.pokeman)
      ? 'liked'
      : '';

    return (
      <div className={'like-button ' + liked} onClick={this.handleChange}>
        hi
      </div>
    );
  }
}
