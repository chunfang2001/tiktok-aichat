import type { NextApiRequest, NextApiResponse } from "next";
import WebSocket from "ws";
import { socketMap } from "@/lib/socket";

let ws: WebSocket | null = null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let socketNumber = 0;

  if (req.method === "GET") {
    socketNumber = Object.keys(socketMap).length
  }

  return res.status(200).json({ success: true, socketNumber:  socketNumber});
}
