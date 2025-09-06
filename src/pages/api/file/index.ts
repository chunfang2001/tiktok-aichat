import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FileResultType>,
) {
  if (req.method === "GET") {
    res.status(200).json({success: true, filenameList : ["123", "234", "567"]});
  }

  res.status(200).json({success: true, filenameList : []});
}
