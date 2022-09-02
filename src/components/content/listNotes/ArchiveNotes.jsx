import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { TheNote } from "./TheNote";
import { useSelector } from "react-redux/es/exports";
import { destroy } from "../../../reduxSlice/deleteSlice";
import { useDispatch } from "react-redux";
import { memo } from "react";
import { useState } from "react";
import "./styleArchiveNotes.css";

import useSound from "use-sound";
import iS from "../../../audio/click.mp3"

export function ArchiveNotes() {
   const todoArchive = useSelector((state) => state.nt.archive)
   // console.log(todoArchive)
   const [inputValue, setInputValue] = useState("")
   const dispatch = useDispatch()
   const [inp] = useSound(iS)

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
         <div className="archiveNotes" >
            <Link className="archiveLink" to="/" > {/* Actual */}</Link>
            <div>Список удаленных заметок</div>
            <input className="archiveSearch" onKeyDown={() => inp()} onChange={(event) => {
               setInputValue(event.target.value)
            }} type="text" placeholder="поиск" />
         </div>
         <Render style={{ backgroundColor: "hsl(73 3% 64% / 1" }} />
      </div>
   )
}