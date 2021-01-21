import React from 'react'

export default function PokeCard ({ pokemon }) {
    return (
        <div className="pokeCard" >
            <h1>{ pokemon.name }</h1>
            <div className="pokeCard__img" >
                <img src={ pokemon.sprites.front_default } alt={ pokemon.name } />
                <img src={ pokemon.sprites.front_shiny } alt={ `${pokemon.name} shinny`} />
            </div>
            <a href={ pokemon.video } >Click me to see a video</a>
        </div>
    )
}