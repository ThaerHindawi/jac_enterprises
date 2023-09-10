import { useState } from "react";
import "./App.css";
import Nasa from "./components/Nasa/Nasa";
import Artwork from "./components/Artwork";

function App() {
  return (
    <>
      <Nasa />
      <Artwork />
    </>
  );
}

export default App;
