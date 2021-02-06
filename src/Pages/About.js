import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const { poke } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [poke]);

  return (
    <div className="bg-white dark:bg-gray-900 h-screen">
      {pokemon && (
        <div className="w-3/12 m-auto bg-gray-300 shadow-2xl flex justify-center flex-col items-center">
          <p className="text-red-700">Pokedex entry # {poke}</p>
          <h3 className="text-2xl text-red-700 uppercase">{pokemon.name}</h3>
          <div className="flex justify-center">
            <img className="w-48" src={pokemon.sprites["front_shiny"]} alt={`${pokemon.name} front`} />
            <img className="w-48" src={pokemon.sprites["back_shiny"]} alt={`${pokemon.name} back`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
