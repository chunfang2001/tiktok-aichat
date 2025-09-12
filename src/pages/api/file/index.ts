import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { KnowledgeFile } from "@/generated/prisma";
import { FileResponse } from "@/lib/type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FileResponse>,
) {
  if (req.method === "GET") {
    const result: KnowledgeFile[] = await prisma.knowledgeFile.findMany({});

    res
      .status(200)
      .json({ success: true, filenameList: result });
  }

  res.status(200).json({ success: true, filenameList: [] });
}
