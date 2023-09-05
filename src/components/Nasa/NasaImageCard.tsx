import { NasaImage } from "./Nasa";

import "./NasaImageCard.css";

interface Props {
  nasaImage: NasaImage;
}

function NasaImageCard({ nasaImage }: Props) {
  return (
    <article className="card" id={nasaImage.nasa_id}>
      <a href="#">
        <img src={nasaImage.link} alt={nasaImage.description} />
      </a>
      <a href="#">
        <div className="card-body">
          <h3>{nasaImage.title}</h3>
          <p>{nasaImage.date_created}</p>
          <p>{nasaImage.description}</p>
          {/* <div className="keywords">
            {nasaImage.keywords.map((keyword) => (
              <span className="keyword" key={keyword}>
                {keyword}
              </span>
            ))}
          </div> */}
        </div>
      </a>
    </article>
  );
}

export default NasaImageCard;
