export interface FileUploadDto {
    user_id: string;
    base64: string;
    fileName: string;
    extension: string;
}

export function getFileUploadInstance(): FileUploadDto {
    return {
        user_id: "",
        base64: "",
        fileName: "",
        extension: "",
    }
}