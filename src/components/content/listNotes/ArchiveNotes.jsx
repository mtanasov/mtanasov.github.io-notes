import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { TheNote } from "./TheNote";
import { useSelector } from "react-redux/es/exports";
import { destroy } from "../../../reduxSlice/deleteSlice";
import { useDispatch } from "react-redux";


export function ArchiveNotes() {
   const todoArchive = useSelector((state) => state.nt.archive)
   // console.log(todoArchive)
   const dispatch = useDispatch()
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

         // color: "var(--titleClr)",
         // letterSpacing: "2px"
      }
   }

   const Render = () => {
      if (localStorage.getItem("archiveNotes")) {
         // console.log(JSON.parse(localStorage.getItem("archiveNotes")))
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
                     bookmark={element.bookmark}
                     // f={() => console.log("key")}
                     f={destroy(element.id)}
                  />
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
            <div>Список удаленных заметок</div>
            <input type="text" placeholder="поиск" style={style.search} />
         </div>
         <Render />
      </div>
   )
}