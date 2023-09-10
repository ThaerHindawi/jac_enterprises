import { useState } from "react";
import "./App.css";
import Nasa from "./components/Nasa/Nasa";
import Artwork from "./components/Artwork";
import Contact from "./components/Contacts/Contact";

function App() {
  return (
    <>
      <Nasa />
      <Artwork />
      <Contact />
    </>
  );
}

export default App;
