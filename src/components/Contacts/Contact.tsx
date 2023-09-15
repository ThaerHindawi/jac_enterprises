import { useEffect, useState } from "react";
import About from "./About";

import "./Contact.css";

interface IContact {
  id: number;
  name: string;
  pictureUrl: string;
  portfolioUrl: string;
}

const defaultContacts: IContact[] = [
  {
    id: 1,
    name: "Amani Zayed",
    pictureUrl: "https://avatars.githubusercontent.com/u/133261261?v=4",
    portfolioUrl: "https://a-zayed.github.io/portfolio-wcci/contact.html",
  },
  {
    id: 2,
    name: "Orlando Perez Santos",
    pictureUrl: "https://avatars.githubusercontent.com/u/109484555?v=4",
    portfolioUrl: "https://santoorl.github.io/indexcontact.html",
  },
  {
    id: 3,
    name: "Brett Heiney-Martin",
    pictureUrl: "https://avatars.githubusercontent.com/u/110037799?v=4",
    portfolioUrl: "https://btheiney.github.io/#contact",
  },
  {
    id: 4,
    name: "Thaer Hendawi",
    pictureUrl: "https://avatars.githubusercontent.com/u/53184833?v=4",
    portfolioUrl: "https://thaerhindawi.github.io/WCCI-Portfolio/#contact",
  },
];

function Contact() {
  const API_URL = () => {
    return `http://localhost:8080/api/contacts`;
  };

  const [contacts, setContacts] = useState<IContact[]>(defaultContacts);

  useEffect(() => {
    fetchContactsHandler();
  }, []);

  async function fetchContactsHandler() {
    try {
      // try to fetch the data from server if it failed will return the default data
      if (import.meta.env.MODE === "development") {
        const res = await fetch(API_URL());
        const data = await res.json();
        const transformedContacts: IContact[] = data.map((item: any) => {
          return item;
        });
        setContacts(transformedContacts);
      }
    } catch (error) {
      const mute = error;
    }
  }

  return (
    <div id="about" className="container overview-wrapper">
      <div className="wrapper">
        <About />
        <div className="contacts">
          <div>
            <h3>Website Developers</h3>
          </div>
          {contacts.map((contact) => {
            return (
              <div key={contact.name} className="contact">
                <a href={contact.portfolioUrl} target="_blank">
                  <img src={contact.pictureUrl} alt={contact.name} />
                  <h4>{contact.name}</h4>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
