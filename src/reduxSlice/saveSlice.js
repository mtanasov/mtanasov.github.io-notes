import { createSlice } from "@reduxjs/toolkit";
import { ActualNotes } from "../components/content/listNotes/ActualNotes";
import { arrNotes, toJSON, toArray } from "./ssd";

const initialState = {
   todos: toArray("actualNotes")
}

export const notes = createSlice({
   name: "newNotes",
   initialState,
   reducers: {
      addNotes: (state, action) => {
         if (!localStorage.getItem("actualNotes")) {
            localStorage.setItem("archiveNotes", JSON.stringify([]))
            state.todos = []
            state.todos.push(action.payload)
            toJSON(state.todos, "actualNotes")
         } else {
            const array = toArray("actualNotes"); //преобразовал JSON в массив
            state.todos = array;
            state.todos.unshift(action.payload)
            toJSON(state.todos, "actualNotes")
         }
      },
      removeNotes: (state, action) => { //новый массив без удаленной заметки
         const array = toArray("actualNotes") //получил массив актуальных заметок
         const el = array.findIndex((el) => el.id === action.payload) // индекс элемента в массиве
         const arrayArchive = toArray("archiveNotes") //получил массив арх.заметок
         arrayArchive.unshift(state.todos[el]) // добавил заметку в массив архива
         toJSON(arrayArchive, "archiveNotes") // сохранил в локалстор
         state.todos = array.filter((todos) => todos.id !== action.payload)
         toJSON(state.todos, "actualNotes")
         console.log(state.todos);
      }
   }
})

export const { addNotes, removeNotes } = notes.actions
export default notes.reducer