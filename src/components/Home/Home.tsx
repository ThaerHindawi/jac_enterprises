import texturedBanner from "../../assets/children-education.jpg";
import "./Home.css";

function Home() {
  console.log(texturedBanner)
  return (
    <section className="main_section main" id="home">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${texturedBanner})` }}
      ></div>
      <h1>Welcome to Jacs Entrerpises</h1>
      <h3>
        We are an organization that specializes in offering niche adventures
        dedicated to learning about Earth's various ecosystems and unique
        terrains. Our motto is, "Vincit Qui Se Vincit" which means, "He/she
        conquers who conquers him/herself.
      </h3>
    </section>
  );
}

export default Home;
