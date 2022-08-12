import { createSlice } from "@reduxjs/toolkit";
import { arrNotes } from "./ssd";

const initialState = {
   todos: arrNotes
}

// const initialState = {
//    txtN: "",
//    dateE: "",
//    timeE: "",
//    placeE: "",
//    bookmark: "",
//    dateCN: "",
//    id: "",
// }

export const notes = createSlice({
   name: "newNotes",
   initialState,
   reducers: {
      addNotes: (state, action) => {
         state.note = action.payload
         // arrNotes.push(action.payload)
         state.todos.unshift(action.payload)
         // console.log(action.payload);
      },
      removeNotes: (state, action) => { //новый массив без удаленной заметки
         state.todos = state.todos.filter((todos) => todos.id !== action.payload)
         console.log(state.todos);
      }
   }
})

export const { addNotes, removeNotes } = notes.actions
export default notes.reducer