import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { TheNote } from "./TheNote";
import { useSelector } from "react-redux/es/exports";
import { destroy } from "../../../reduxSlice/deleteSlice";
import { useDispatch } from "react-redux";
import { memo } from "react";
import { useState } from "react";

import useSound from "use-sound";
import iS from "../../../audio/click.mp3"

export function ArchiveNotes() {
   const todoArchive = useSelector((state) => state.nt.archive)
   // console.log(todoArchive)
   const [inputValue, setInputValue] = useState("")
   const dispatch = useDispatch()
   const [inp] = useSound(iS)
   const style = {
      main: {
         display: "flex",
         padding: "5px 0px",
         justifyContent: "center",
         // gap: "270px",
         fontFamily: "PoiretOne",
         fontWeight: "700",
         alignItems: "center"

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
         border: "2px solid var(--titleClr)",
         borderRadius: "20px",
         height: "35px",
         width: "35px",
         backgroundImage: "url(../../../img/note.png)",
         backgroundSize: "22px 20px",
         backgroundRepeat: "no-repeat",
         backgroundPosition: "8.5px 8px",

         // color: "var(--titleClr)",
         // letterSpacing: "2px"
      }
   }

   // const filterByNotesText = JSON.parse(localStorage.getItem("archiveNotes")).filter((n) => { return n.txtN.toLowerCase().includes(inputValue.toLowerCase()) })
   // const filterByNotesText = todoArchive.filter((n) => { return n.txtN.toLowerCase().includes(inputValue.toLowerCase()) })

   const Render = memo(
      () => {
         if (localStorage.getItem("archiveNotes")) {
            // console.log(JSON.parse(localStorage.getItem("archiveNotes")))
            return (
               // todoArchive.map((element) =>
               JSON.parse(localStorage.getItem("archiveNotes")).map((element) =>
                  // filterByNotesText.map((element) =>
                  <div key={element.id}>
                     <TheNote
                        id={element.id}
                        txtN={element.txtN}
                        timeE={element.timeE}
                        dateE={element.dateE}
                        placeE={element.placeE}
                        dateCN={element.dateCN}
                        bookmark={element.bookmark}
                        // f={() => console.log("key")}
                        f={destroy(element.id)}
                        bgrColor={"hsl(73 3% 64% / 1"}
                     // style={{ backgroundColor: "hsl(73 3% 64% / 1" }}
                     />
                  </div>)
            )
         } else {
            return <div style={{ textAlign: "center" }}> Тут будут ваши удаленные заметки</div>
         }
      }
   )

   return (
      <div >
         <div className="archiveNotes" style={style.main}>
            <Link to="/" style={style.archiveLink} > {/* Actual */}</Link>
            <div>Список удаленных заметок</div>
            <input onKeyDown={() => inp()} onChange={(event) => {
               setInputValue(event.target.value)
            }} type="text" placeholder="поиск" style={style.search} />
         </div>
         <Render style={{ backgroundColor: "hsl(73 3% 64% / 1" }} />
      </div>
   )
}