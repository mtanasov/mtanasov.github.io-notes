import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./saveSlice"

export const store = configureStore({
   reducer: {
      note: noteReducer,
   }
})