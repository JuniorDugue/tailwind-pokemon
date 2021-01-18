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
      <div className="p-14">
        <Link to="/">
          <p className="text-3xl flex flex-col items-center text-red-700">PoGo Community Shinies</p>
        </Link>
      </div>

      <Switch>
        <Route path="/about/:poke">
          <About></About>
        </Route>
        <Route path="/">
          <div className="w-full flex justify-center">
            <input type="text" onChange={($event) => setText($event.target.value)} placeholder="Type a pokemon name" className="mt-10 p-2 border-blue-400 border-2" />
          </div>
          {pokemon && <Home pokemon={filteredPokemon} />}{" "}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
