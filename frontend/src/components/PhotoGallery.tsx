import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Photo {
    id: string;
    url: string;
    title: string;
}

const PhotoGallery: React.FC = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get('/api/photos');
                setPhotos(response.data);
            } catch (error) {
                console.error('Error fetching photos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="photo-gallery">
            {photos.map(photo => (
                <div key={photo.id} className="photo-item">
                    <img src={photo.url} alt={photo.title} />
                    <h3>{photo.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default PhotoGallery;