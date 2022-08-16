import { createSlice } from "@reduxjs/toolkit";
import { toJSON, toArray } from "./ssd"

const arrayDelNotes = JSON.parse(localStorage.getItem("archiveNotes"))
console.log(arrayDelNotes);
const initialState = {
   // archive: toArray("archiveNotes")
   archive: arrayDelNotes

}

export const archiveNotes = createSlice({
   name: "aN",
   initialState,
   reducers: {
      destroy: (state, action) => {
         const array = toArray("archiveNotes")
         state.archive = array.filter((todos) => todos.id !== action.payload)
         toJSON(state.archive, "archiveNotes")
      }
   }
})

export const { destroy } = archiveNotes.actions
export default archiveNotes.reducer