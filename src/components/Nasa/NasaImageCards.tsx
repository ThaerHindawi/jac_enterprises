import { NasaImage } from "./Nasa";
import NasaImageCard from "./NasaImageCard";

import "./NasaImageCards.css";

interface Props {
  nasaImages: NasaImage[];
}

function NasaImageCards({ nasaImages }: Props) {
  return (
    <div className="cards">
      {nasaImages.map((nasaImage) => (
        <NasaImageCard key={nasaImage.nasa_id} nasaImage={nasaImage}/>
      ))}
    </div>
  );
}

export default NasaImageCards;