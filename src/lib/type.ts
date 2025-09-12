import { KnowledgeFile } from "@/generated/prisma";

export type Chat = {
  role: string
  message: string
}

export type FileResponse = {
  success: boolean;
  filenameList: KnowledgeFile[];
};

export type FileUploadResponse = {
  success: boolean;
};


export type UploadFileResponse = {
  success: boolean;
};