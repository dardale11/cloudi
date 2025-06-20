import { Router } from 'express';
import { PhotoController } from '../controllers/photoController';

const router = Router();
const photoController = new PhotoController();

export function setPhotoRoutes(app: Router) {
    app.get('/photos', photoController.getPhotos.bind(photoController));
    app.post('/photos', photoController.uploadPhoto.bind(photoController));
    app.delete('/photos/:id', photoController.deletePhoto.bind(photoController));
}