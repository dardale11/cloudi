import express from 'express';
import { json } from 'body-parser';
import { setPhotoRoutes } from './routes/photoRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(json());
setPhotoRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});