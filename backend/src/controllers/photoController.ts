class PhotoController {
    private photos: Array<{ id: number; url: string }> = [];
    private nextId: number = 1;

    public getPhotos(req: any, res: any) {
        res.json(this.photos);
    }

    public uploadPhoto(req: any, res: any) {
        const { url } = req.body;
        const newPhoto = { id: this.nextId++, url };
        this.photos.push(newPhoto);
        res.status(201).json(newPhoto);
    }

    public deletePhoto(req: any, res: any) {
        const { id } = req.params;
        this.photos = this.photos.filter(photo => photo.id !== parseInt(id));
        res.status(204).send();
    }
}

export default new PhotoController();