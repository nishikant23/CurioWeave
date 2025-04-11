import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer
});

// Infer types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;