import { configureStore } from "@reduxjs/toolkit";
import archNote from "./deleteSlice"

export const store = configureStore({
   reducer: {
      nt: archNote,
   }
})