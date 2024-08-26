import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SocketState {
  isConnected: boolean;
  activeTabs: number;
}

const initialState: SocketState = {
  isConnected: false,
  activeTabs: 0,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    connect(state) {
      state.isConnected = true;
    },
    disconnect(state) {
      state.isConnected = false;
    },
    updateActiveTabs(state, action: PayloadAction<number>) {
      state.activeTabs = action.payload;
    },
  },
});

export const { updateActiveTabs, connect, disconnect } = socketSlice.actions;
export default socketSlice.reducer;
