import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const { poke } = useParams();

  return (
    <div>
      <h2>About</h2>
      {poke}
    </div>
  );
};

export default About;
