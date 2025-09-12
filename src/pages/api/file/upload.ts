import type { NextApiRequest, NextApiResponse } from "next";
import formidable, { File as FormidableFile, Fields, Files } from "formidable";
import fs from "fs";
import { API_ROUTE } from "@/lib/constant";
import { prisma } from "@/lib/prisma";
import { FileUploadResponse } from "@/lib/type";

export const config = {
  api: {
    bodyParser: false,
  },
};

function parseForm(
  req: NextApiRequest,
): Promise<{ fields: Fields; files: Files }> {
  const form = formidable();
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FileUploadResponse>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }
  try {
    const { files } = await parseForm(req);

    const file = (files.file as FormidableFile[])?.[0];

    if (!file) {
      return res.status(400).json({ success: false });
    }

    const buffer = fs.readFileSync(file.filepath);
    const nodeFile = new File([buffer], file.originalFilename ?? "", {
      type: "application/pdf",
    });

    const formData = new FormData();
    formData.append("file", nodeFile);
    formData.append("category", "");
    formData.append("source", file.originalFilename || "");
    formData.append("tags", "");

    const fastapiRes = await fetch(`${API_ROUTE}/upload-pdf`, {
      method: "POST",
      body: formData as any,
    });
    const data = await fastapiRes.json();

    if (fastapiRes.ok && data.success !== false) {
      await prisma.knowledgeFile.create({
        data: {
          name: file.originalFilename || "unknown.pdf",
        },
      });
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false });
    }
  } catch (error: any) {
    return res.status(500).json({ success: false });
  }
}
