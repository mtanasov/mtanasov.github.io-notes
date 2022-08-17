import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./saveSlice"
import archNote from "./deleteSlice"

export const store = configureStore({
   reducer: {
      note: noteReducer,
      nt: archNote,
   }
})