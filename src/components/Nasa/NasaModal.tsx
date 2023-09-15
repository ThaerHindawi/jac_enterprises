import { NasaImage } from "./Nasa";
import "./NasaModal.css";
import { forwardRef } from "react";

interface Props {
  nasaImage: NasaImage;
  hideModal: Function
}

const NasaModel = forwardRef<HTMLDivElement, Props>(({ nasaImage, hideModal }, ref) => {
  return (
    
    <div className="modal-container" ref={ref}>
      <div className="modal">
        <div>
          <button className="modal-btn">X</button>
          <img src={nasaImage.link} alt={nasaImage.description} />
          <h3>{nasaImage.title}</h3>
          <h4>Date Created: {nasaImage.date_created}</h4>
          <p>{nasaImage.description}</p>
          <div className="keywords-container">
            <h4>keywords: </h4>
            <div className="keywords">
              {nasaImage.keywords.map((keyword) => (
                <span className="keyword" key={keyword}>
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NasaModel;
