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

    console.log("AAAAAAA")
    console.log(socketMap[key]);


    if (socketMap[key] !== undefined) {
      return res.status(200).json({ success: true, message: "Socket existed" });
    }

    ws = new WebSocket("ws://localhost:8765"); // Python publisher
    socketMap[key] = ws;

    ws.on("open", () => {
      console.log("✅ Connected to Python publisher");
      ws?.send("Hello from Next.js backend subscriber!");
    });

    ws.on("message", (msg) => {
      console.log("📩 Received from publisher:", msg.toString());
    });

    ws.on("close", () => {
      console.log("❌ Connection closed");
      ws = null;
    });

    socketMap[key] = ws;
  }

  res.status(200).json({ success: true, message: "Socket created" });
}
