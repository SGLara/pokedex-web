/* eslint-disable react/prop-types */
import { Avatar, IconButton } from '@mui/material';
import React from 'react';

export default function PokemonItem({ pokemon, handleClick }) {
  return (
    <IconButton
      aria-label={`icon-avatar${pokemon.name}`}
      onClick={() => handleClick(pokemon)}
      disableRipple
      sx={{
        backgroundColor: pokemon.disabled ? '#e3f2fd' : 'transparent',
        '&:hover': {
          backgroundColor: 'rgba(227, 242, 253, 0.72)',
        },
        '&:active': {
          backgroundColor: '#e3f2fd',
          animation: 'select .1s ease',
        },

        '@keyframes select': {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      }}
    >
      <Avatar
        src={pokemon.avatar}
        alt={pokemon.name}
        sx={{
          width: 75,
          height: 75,
        }}
      />
    </IconButton>
  );
}
