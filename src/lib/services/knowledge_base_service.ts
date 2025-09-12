import { FileResponse } from "../type";

type UploadFileProps = {
  file: File;
};

export class KnowledgeBaseService {
  static getFileList = async (): Promise<string[]> => {
    const res = await fetch("api/file", {
      method: "GET",
      cache: "no-store",
    });

    const data: FileResponse = await res.json();

    return data.filenameList.map((e) => e.name ?? "");
  };

  static uploadFile = async ({ file }: UploadFileProps): Promise<boolean> => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/file/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
    } catch (err) {}
    return true;
  };
}
