import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <div className="App">
        <p className="text-3xl">Pika Pika!</p>
        <Home pokemon={pokemon.results} />
      </div>
      <Switch>
        <Route path="/about/:poke">
          <About></About>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
