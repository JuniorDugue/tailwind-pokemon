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
        console.log(data);
      });
  }, [poke]);

  return (
    <>
      {pokemon && (
        <div className="w-3/12 m-auto bg-gray-700 mt-4 shadow-2xl flex justify-center flex-col items-center">
          <h2 className="text-3xl text-red-900 uppercase">About</h2>
          {poke}
          <h3 className="text-2xl text-red-700 uppercase">{pokemon.name}</h3>
          <div className="flex justify-center">
            <img className="w-48" src={pokemon.sprites["front_shiny"]} alt={`${pokemon.name} front`} />
            <img className="w-48" src={pokemon.sprites["back_shiny"]} alt={`${pokemon.name} back`} />
          </div>
        </div>
      )}
    </>
  );
};

export default About;
