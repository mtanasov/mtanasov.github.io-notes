import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { TheNote } from "./TheNote";
import { useSelector } from "react-redux/es/exports";

export function ArchiveNotes() {
   const todoArchive = useSelector((state) => state.archive)
   console.log(todoArchive)

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
         color: "var(--titleClr)",
         letterSpacing: "2px"
      }
   }

   const Render = () => {
      if (localStorage.getItem("archiveNotes")) {
         return (
            // todoArchive.map((element) =>
            JSON.parse(localStorage.getItem("archiveNotes")).map((element) =>
               <div key={element.id}>
                  <TheNote
                     id={element.id}
                     txtN={element.txtN}
                     timeE={element.timeE}
                     dateE={element.dateE}
                     placeE={element.placeE}
                     dateCN={element.dateCN}
                     bookmark={element.bookmark} />
               </div>)
         )
      } else {
         return <> Тут будут ваши удаленные заметки</>
      }
   }

   return (
      <div>
         <div style={style.main}>
            <Link to="/" style={style.archiveLink}> Actual</Link>
            <div>Архив заметок</div>
            <input type="text" placeholder="поиск" style={style.search} />
         </div>
         <Render />
      </div>
   )
}