import React from 'react';
import { Link } from 'react-router-dom';

export default function PokemonList({ pokemon }) {
  return (
    <ul>
      {pokemon.map((pokeman, index) => (
        <li key={pokeman}>
          <Link to={pokeman}>
            <img
              src={
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
                (index + 1) +
                '.png'
              }
              alt={pokeman}
            />
            <h4>{pokeman}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
}
