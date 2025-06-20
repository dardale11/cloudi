export interface Photo {
    id: string;
    title: string;
    url: string;
    description?: string;
}

export interface GalleryProps {
    photos: Photo[];
}