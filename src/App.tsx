import "./App.css";
import Nasa from "./components/Nasa/Nasa";
import Artwork from "./components/Artwork";
import Contact from "./components/Contacts/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ContactUs from "./components/Home/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Nasa />
      <Artwork />
      <Contact />
      <ContactUs />
    </>
  );
}

export default App;
