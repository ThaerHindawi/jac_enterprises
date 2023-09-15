import { useRef, useState } from "react";
import { NasaImage } from "./Nasa";

import "./NasaImageCard.css";
import NasaModel from "./NasaModal";

interface Props {
  nasaImage: NasaImage;
}

function NasaImageCard({ nasaImage }: Props) {
  const [isModal, setIsModal] = useState<Boolean>(false);
  const modelContainer = useRef<HTMLDivElement>(null);

  function showModal() {
    document.addEventListener("click", handleOutsideClick, false);
    setIsModal(true);
  }

  function hideModal() {
    setIsModal(false);
    document.removeEventListener("click", handleOutsideClick, false);
  }

  function handleOutsideClick(e: MouseEvent | TouchEvent) {
    if (e.target instanceof HTMLElement) {
      if (
        e.target == modelContainer.current ||
        e.target == modelContainer.current?.firstChild?.firstChild?.firstChild
      ) {
        hideModal();
      }
    }
  }

  return (
    <article className="card" id={nasaImage.nasa_id} onClick={showModal}>
      <img src={nasaImage.link} alt={nasaImage.description} />

      <div className="card-body">
        <h3>{nasaImage.title}</h3>
        <p>{nasaImage.date_created}</p>
        <p className="text-description">{nasaImage.description}</p>
      </div>

      {isModal && (
        <NasaModel
          ref={modelContainer}
          nasaImage={nasaImage}
          hideModal={hideModal}
        />
      )}
    </article>
  );
}

export default NasaImageCard;
