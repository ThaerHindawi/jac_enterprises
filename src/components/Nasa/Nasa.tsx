import React, { useState, useEffect } from "react";
import NasaImageCards from "./NasaImageCards";

import "./Nasa.css";
import Contact from "../Contacts/Contact";

export interface NasaImage {
  title: string;
  keywords: string[];
  nasa_id: string;
  date_created: string;
  description: string;
  link: string;
}

interface Props {}

function Nasa(props: Props) {
  const API_URL = (search: string) => {
    return `https://images-api.nasa.gov/search?q=${search}&media_type=image`;
  };

  const [images, setImages] = useState<NasaImage[]>([]);

  useEffect(() => {
    fetchImagesHandler();
  }, []);

  async function fetchImagesHandler() {
    const res = await fetch(API_URL("apollo 11"));
    const data = await res.json();
    const transformedImages: NasaImage[] = data.collection.items.map(
      (item: any) => {
        return {
          title: item.data[0].title,
          keywords: item.data[0].keywords,
          nasa_id: item.data[0].nasa_id,
          date_created: item.data[0].date_created.substring(0, 10),
          description: item.data[0].description,
          link: item.links[0].href,
        };
      }
    );
    setImages(transformedImages.slice(0, 8));
  }

  return (
    <section className="container">
      <div>
        <h1>Nasa Images</h1>
      </div>
      <NasaImageCards nasaImages={images} />
      <Contact />
    </section>
  );
}

export default Nasa;
