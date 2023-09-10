import React, { useState, useEffect} from "react";

interface Artwork {
    id: number,
    title: string,
    artist: string,
    artist_lifespan: string,
    department: string,
    image_url: string,
    image_date: string,
    met_url: string
}

function Artwork(props: Artwork) {

    const [images, setImages] = useState<Artwork[]>([]);

    useEffect(() => {
        fetchArtwork();      
    }, []);

    async function fetchArtwork() {
        try {

            let ids = [];
            const api_ids = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&medium=Paintings&departmentId=11&q=Painting');
            const data_ids = await api_ids.json();
            
            for (let i = 0; i < 4; i++) {
                let random = Math.floor(Math.random() * (1000));
                let api = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + data_ids.objectIDs[random]);
                let data = await api.json();

                while (data.primaryImage == "" || data.primaryImage == null) {
                    random = Math.floor(Math.random() * (1000));
                    api = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + data_ids.objectIDs[random]);
                    data = await api.json();
                }
                
                    const transformedData: Artwork = {
                        id: random,
                        title: data.title,
                        artist: data.artistDisplayName,
                        artist_lifespan: data.artistBeginDate + ' - ' + data.artistEndDate,
                        department: data.department,
                        image_url: data.primaryImage,
                        image_date: data.objectDate,
                        met_url: data.objectURL,
                    };
                    setImages((prev) => {
                        return [...prev, transformedData];
                    });  
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            {console.log(images)}
            <h1 className="mb-4">Art Gallery</h1>
            
            <div className="row gap-2">
                {images.map((artwork) => {
                    return (
                        <div key={images.indexOf(artwork)} className="card col-sm">
                            <img className="card-img-top" height="500" src={artwork.image_url} alt={artwork.title}></img>
                            <div className="card-body">
                                <h3>{artwork.title}</h3>
                                <p>{artwork.artist + ' (' + artwork.artist_lifespan + ')'}</p>
                                <a target="_blank" href={artwork.met_url} className="btn btn-secondary">Visit Museum of Art</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );

}

export default Artwork;