import WebSocket from "ws"; 

declare global {
  var socketMap: Record<string, WebSocket> | undefined;
}

export const socketMap: Record<string, WebSocket> =
  global.socketMap || {};

if (process.env.NODE_ENV !== "production") {
  global.socketMap = socketMap;
}
