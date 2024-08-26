import { configureStore, combineReducers } from "@reduxjs/toolkit";
import localeSlice from "@/store/slices/localeSlice";
import socketSlice from "@/store/slices/socketSlice";

const rootReducer = combineReducers({
  locale: localeSlice,
  socket: socketSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
