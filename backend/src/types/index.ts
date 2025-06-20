export interface Photo {
    id: string;
    title: string;
    url: string;
    createdAt: Date;
}

export interface UploadResponse {
    success: boolean;
    message: string;
    photo?: Photo;
}