# Photo Cloud App

This project is a local photo cloud system that consists of a backend built with Express and a frontend built with React using Vite.

## Project Structure

```
photo-cloud-app
├── backend
│   ├── src
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   └── photoController.ts
│   │   ├── routes
│   │   │   └── photoRoutes.ts
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── components
│   │   │   └── PhotoGallery.tsx
│   │   └── types
│   │       └── index.ts
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the backend server:
   ```
   npm run start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend application:
   ```
   npm run dev
   ```

## Features

- Upload photos to the cloud.
- View a gallery of uploaded photos.
- Delete photos from the cloud.

## API Endpoints

- `GET /api/photos`: Retrieve all photos.
- `POST /api/photos`: Upload a new photo.
- `DELETE /api/photos/:id`: Delete a photo by ID.

## License

This project is licensed under the MIT License.