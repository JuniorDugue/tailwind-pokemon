import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Pages/About.js";
import Home from "./Pages/Home.js";

function App() {
  const [pokemon, setPokemon] = useState();
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

  return (
    <Router>
      <div className="p-14">
        <Link to="/">
          <p className="text-3xl flex flex-col items-center">PoGo Community Shinies</p>
        </Link>
      </div>
      <Switch>
        <Route path="/about/:poke">
          <About></About>
        </Route>
        <Route path="/">{pokemon && <Home pokemon={pokemon.results} />} </Route>
      </Switch>
    </Router>
  );
}

export default App;
