// websocket.ts
let socket: WebSocket | null = null;

export const initWebSocket = (uri: string) => {
  socket = new WebSocket(uri);
};

export const getWebSocket = () => {
  if (!socket) {
    throw new Error('WebSocket is not initialized');
  }

  return socket;
};