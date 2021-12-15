import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import employeeReducer from "./employeeSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    employee: employeeReducer,
  },
});
