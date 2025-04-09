import { configureStore } from "@reduxjs/toolkit";
import clientesReducer from "./slices/clientesSlice";
export const store = configureStore({
  reducer: {
    clientes: clientesReducer,
  },
});