import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Pages/About.js";
import Home from "./Pages/Home.js";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [text, setText] = useState(" ");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemon, index) => {
          return { ...pokemon, index: index + 1 };
        });
        setPokemon({ ...data, results });
      });
  });

  useMemo(() => {
    if (text.length === 0) {
      setFilteredPokemon([]);
      return;
    }

    setFilteredPokemon(() => pokemon.results?.filter((pokemon) => pokemon.name.includes(text)));
  }, [pokemon.results, text]);

  return (
    <Router>
      <div className="p-14 bg-white dark:bg-gray-900 flex items-center justify-center">
        <Link to="/">
          <p className="text-3xl flex flex-col items-center text-red-700">PoGo Community Shinies</p>
        </Link>
        <button className="h-10 w-10 flex justify-center items-center focus:outline-none text-yellow-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
      </div>

      <Switch>
        <Route path="/about/:poke">
          <About></About>
        </Route>
        <Route path="/">
          <div className="w-full flex justify-center bg-white dark:bg-gray-900">
            <input type="text" onChange={($event) => setText($event.target.value)} placeholder="Type a pokemon name" className="mt-10 p-2 border-blue-400 border-2" />
          </div>
          {pokemon && <Home pokemon={filteredPokemon} />}{" "}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
