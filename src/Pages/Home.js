import React from "react";
import { Link } from "react-router-dom";

const Home = ({ pokemon: results }) => {
  return (
    <div className="mt-10 p-4 flex flex-wrap">
      {results &&
        results.map((value, index) => (
          <div className="ml-4 text-2xl text-red-900">
            <Link to={`/about/${value.index}`} key={index}>
              {value.name}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
