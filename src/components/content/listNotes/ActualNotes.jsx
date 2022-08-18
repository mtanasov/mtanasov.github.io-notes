import React from "react";
// import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { TheNote } from "./TheNote";
import { useSelector } from "react-redux/es/exports";
import { removeNotes } from "../../../reduxSlice/saveSlice";
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch()


import { arrNotes, toArray } from "../../../reduxSlice/ssd"
import { memo } from "react";
import { useState } from "react";


export function ActualNotes() {
   const todo = useSelector((state) => state.note.todos)
   const [inputValue, setInputValue] = useState("")
   const style = {
      main: {
         display: "flex",
         padding: "5px 0px",
         justifyContent: "center",
         gap: "270px",
         fontFamily: "PoiretOne",
         fontWeight: "700"
      },
      search: {
         height: "20px",
         borderRadius: "8px",
         padding: "0px 10px",
         border: "1px solid black",
         backgroundColor: "var(--bgrClrCreateNotes)",
         fontFamily: "PoiretOne",
         fontWeight: "700",
      },
      archiveLink: {
         textDecoration: "none",
         color: "black",
         border: "2px solid red",
         // height: "25px",
         // width: "25px",
         // backgroundImage: "url(../../../img/iconSprite.png)",
         // backgroundSize: "450px 860px",
         // backgroundPosition: "10px 10px"
         // color: "var(--titleClr)",
         // letterSpacing: "2px",
      }
   }

   const filterByNotesText = todo.filter((n) => { return n.txtN.toLowerCase().includes(inputValue.toLowerCase()) })
   // console.log(filter)

   const Render = memo(
      () => {
         if (localStorage.getItem("actualNotes")) {
            return (
               // todo.map((element) =>
               filterByNotesText.map((element) =>
                  <div key={element.id}>
                     <TheNote
                        id={element.id}
                        txtN={element.txtN}
                        timeE={element.timeE}
                        dateE={element.dateE}
                        placeE={element.placeE}
                        dateCN={element.dateCN}
                        bookmark={element.bookmark}
                        f={removeNotes(element.id)} />
                  </div>)
            )
         } else {
            return <> Тут будут ваши заметки</>
         }
      }
   )



   return (
      <div>
         <div style={style.main}>
            <Link to="/archive" style={style.archiveLink}> Archive</Link>
            {/* <div style={style.miniHeader}> */}
            <div> Сохраненные заметки </div>
            <input onChange={(event) => {
               setInputValue(event.target.value)
            }} placeholder="поиск" style={style.search} />
            {/* </div> */}
         </div>
         <Render />
      </div>
   )
}