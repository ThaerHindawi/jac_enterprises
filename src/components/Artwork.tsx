import React, { useState, useEffect} from "react";
import ArtworkCard from "./ArtworkCard";

interface Artwork {
    title: string,
    artist: string,
    artist_lifespan: string,
    department: string,
    image_url: string,
    image_date: string,
    met_url: string
}

function Artwork(props: Artwork) {

    const [images, setImages] = useState<Artwork | null>(null);

    useEffect(() => {
        fetchArtwork();
    }, []);

    async function fetchArtwork() {
        try {
            const api = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/788905');
            const data = await api.json();
            const transformedData: Artwork = {
                title: data.title,
                artist: data.artistDisplayName,
                artist_lifespan: data.artistBeginDate + ' - ' + data.artistEndDate,
                department: data.department,
                image_url: data.primaryImage,
                image_date: data.objectDate,
                met_url: data.objectURL,
            };
            setImages(transformedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <h1 className="mb-4">Art Gallery</h1>
            {console.log(images)}
            <div className="card">
                <img className="card-img-top" height="500" src={images?.image_url} alt={images?.title}></img>
                <div className="card-body">
                    <h3>{images?.title}</h3>
                    <p>{images?.artist + ' (' + images?.artist_lifespan + ')'}</p>
                    <a href={images?.met_url} className="btn btn-secondary">Visit Museum of Art</a>
                </div>
            </div>
        </>
    );

}

export default Artwork;