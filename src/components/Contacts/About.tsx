import { useEffect, useState } from "react";

interface IAbout {
  id: number;
  teamName: string;
  description: string;
}

const defaultAbout: IAbout = {
  id: 1,
  teamName: "JAC Enterprises",
  description:
    'Jac Enterprises is an organization that specializes in offering niche adventures dedicated to learning about Earth\'s various ecosystems and unique terrains. Our motto is, "Vincit Qui Se Vincit" which means, "He/she conquers who conquers him/herself." Jac prides itself on educating all their customers on what adventures are provided and what can be expected on a chosen adventure.',
};

function About() {
  const API_URL = () => {
    return `http://localhost:8080/api/about`;
  };
  const [about, setAbout] = useState<IAbout>(defaultAbout);

  useEffect(() => {
    fetchAboutHandler();
  }, []);

  async function fetchAboutHandler() {
    try {
      // try to fetch the data from server if it failed will return the default data
      if (import.meta.env.MODE === "development") {
        const res = await fetch(API_URL());
        const data = await res.json();
        const transformedAbout: IAbout = data;
        console.log(transformedAbout);
        setAbout(transformedAbout);
      }
    } catch (error) {
      const mute = error;
    }
  }

  return (
    <div className="about">
      <h2>About {about?.teamName}</h2>
      <p>{about?.description}</p>
    </div>
  );
}

export default About;
