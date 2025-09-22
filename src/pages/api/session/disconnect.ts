import type { NextApiRequest, NextApiResponse } from "next";
import WebSocket from "ws";
import { socketMap } from "@/lib/socket";

let ws: WebSocket | null = null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const body = await req.body;

    const { key } = body;

    const socket = socketMap[key];

    if (socket) {
      try {
        socket.close();
        console.log(`🔌 Closed socket for key: ${key}`);
      } catch (err) {
        console.error(`⚠️ Error closing socket for key ${key}:`, err);
      }
      // Remove from the map
      delete socketMap[key];
    }
  }

  return res.status(200).json({ success: true, message: "Socket created" });
}
