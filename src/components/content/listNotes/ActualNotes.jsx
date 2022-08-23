import React from "react";
// import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { TheNote } from "./TheNote";
import { useSelector } from "react-redux/es/exports";
import { removeNotes } from "../../../reduxSlice/saveSlice";
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch()
import useSound from "use-sound";
import iS from "../../../audio/click.mp3"

import { arrNotes, toArray } from "../../../reduxSlice/ssd"
import { memo } from "react";
import { useState } from "react";
import "./st.css"


export function ActualNotes() {
   const todo = useSelector((state) => state.note.todos)
   const [inputValue, setInputValue] = useState("")
   const [inp] = useSound(iS)
   const style = {
      main: {
         display: "flex",
         padding: "5px 0px",
         justifyContent: "center",
         gap: "270px",
         fontFamily: "PoiretOne",
         fontWeight: "700",
         alignItems: "center",

      },
      search: {
         height: "20px",
         borderRadius: "8px",
         padding: "0px 10px",
         border: "1px solid black",
         backgroundColor: "var(--bgrClrCreateNotes)",
         fontFamily: "Mono",
         fontSize: "17px",
         textAlign: "center"
      },
      archiveLink: {
         textDecoration: "none",
         color: "black",
         border: "2px solid red",
         borderRadius: "20px",
         height: "35px",
         width: "35px",
         backgroundImage: "url(../../../img/archive.png)",
         backgroundSize: "20px 20px",
         backgroundRepeat: "no-repeat",
         backgroundPosition: "7px 7px",
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
                        f={removeNotes(element.id)}
                     />
                  </div>)
            )
         } else {
            return <> Тут будут ваши заметки</>
         }
      }
   )



   return (
      <div>
         <div style={style.main} >
            <Link to="/archive" style={style.archiveLink}> {/* Archive */} </Link>
            {/* <div style={style.miniHeader}> */}
            <div> Сохраненные заметки </div>
            <input onKeyDown={() => inp()} onChange={(event) => {
               setInputValue(event.target.value)
            }} placeholder="поиск" style={style.search} />
            {/* </div> */}
         </div>
         <Render />
      </div>
   )
}