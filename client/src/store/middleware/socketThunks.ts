import { createAsyncThunk } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import {
  updateActiveTabs,
  connect,
  disconnect,
} from "@/store/slices/socketSlice";

let socket: Socket | null = null;

export const connectSocket = createAsyncThunk(
  "socket/connect",
  async (_, { dispatch }) => {
    socket = io(import.meta.env.VITE_SERVER_URL || "http://localhost:3000");

    socket.on("connect", () => {
      dispatch(connect());
    });

    socket.on("activeTabs", (count: number) => {
      dispatch(updateActiveTabs(count));
    });

    socket.on("disconnect", () => {
      dispatch(disconnect());
    });
  }
);

export const disconnectSocket = createAsyncThunk(
  "socket/disconnect",
  async () => {
    if (socket) {
      socket.disconnect();
      socket = null;
    }
  }
);
