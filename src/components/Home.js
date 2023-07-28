import React from "react";
import { useState } from "react";
const Home = () => {
  //   let ner = "Bat";
  const [ner, setNer] = useState("Bat");
  const handleClick = () => {
    // ner = "Bold";
    setNer("Bold");
    console.log(ner);
  };
  return (
    <div>
      <h1 style={{ margin: "1rem" }}>{ner}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Home;
