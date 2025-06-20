# Photo Cloud App Backend

This is the backend part of the Photo Cloud application, built using Express and TypeScript. It provides APIs for managing photos, including uploading, retrieving, and deleting photos.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd photo-cloud-app/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the backend server, run the following command:
```
npm start
```

The server will run on `http://localhost:3000` by default.

### API Endpoints

- `GET /photos` - Retrieve a list of photos.
- `POST /photos` - Upload a new photo.
- `DELETE /photos/:id` - Delete a photo by ID.

### Folder Structure

- `src/app.ts` - Entry point of the application.
- `src/controllers/photoController.ts` - Contains the logic for handling photo-related operations.
- `src/routes/photoRoutes.ts` - Defines the routes for the photo operations.
- `src/types/index.ts` - Contains TypeScript interfaces for the application.

### License

This project is licensed under the MIT License.