import React from "react";
import { useState } from "react";
import { arrNotes } from "../../../reduxSlice/ssd"
import { removeNotes } from "../../../reduxSlice/saveSlice";
import { useDispatch } from "react-redux";
import useSound from "use-sound";
import dS from "../../../audio/delete.mp3";
import "./styleTheNote.css"

export function TheNote(props) {
   const [text, setObj] = useState(props.txtN)
   const [dateE, setDateE] = useState(props.dateE)
   const [dateCN, setDateCN] = useState(props.dateCN)
   const [id, setId] = useState(props.id)
   const [location, setLocation] = useState(props.placeE)
   const [timeE, setTimeE] = useState(props.timeE)
   const [bookmark, setBookmark] = useState(props.bookmark)
   // console.log(arrNotes)

   const dispatch = useDispatch()

   const [dSound] = useSound(dS)

   const style = {
      main: {
         backgroundColor: props.bgrColor, //"var(--headerBgrClr)"
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         padding: "5px 0px 10px 0px",
      },
      text: {
         backgroundColor: bookmark,
         backgroundSize: " 115% 252%",
         backgroundPosition: "-200px -30px",
         fontSize: "22px",
         fontFamily: "Mono",
         lineHeight: "22px",
         padding: "10px 20px",
         margin: "5px 0px 15px",
         borderRadius: "25px",
         border: "1px solid black",
         maxWidth: "90%",
         // whiteSpace: "pre-wrap",

      },
      groupe1: {
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         gap: "15px",
         maxWidth: "1084px",
         fontFamily: "PoiretOne",
         fontWeight: "700",
         fontSize: "13px",

      },
      dateEvent: {
         padding: "7px 10px",
         border: "1px solid black",
         backgroundColor: "var(--bgrClrCreateNotes)",
         borderRadius: "10px",
      },
      timeEvent: {
         padding: "5px 15px",
         border: "1px solid black",
         backgroundColor: "var(--bgrClrCreateNotes)",
         borderRadius: "10px",
      },
      localEvent: {
         padding: "5px 15px",
         border: "1px solid black",
         backgroundColor: "var(--bgrClrCreateNotes)",
         borderRadius: "10px",
      },
      btnDelete: {
         padding: "5px 15px",
         border: "1px solid black",
         backgroundColor: "hsl(354 95% 85% / 1)",
         borderRadius: "10px",
         fontFamily: "PoiretOne",
         fontSize: "13px",
         fontWeight: "700",
         marginLeft: "50px",
         cursor: "pointer"
      },
      dateCreate: {
         padding: "5px 15px",
         border: "1px solid black",
         backgroundColor: "var(--bgrClrCreateNotes)",
         borderRadius: "10px",
      },
   }

   return (
      <div className="theNotes">
         <div style={style.text}>
            {text}</div>
         <div className="menuSavedNores" >
            <span style={style.dateEvent}>{dateE}</span>
            <span style={style.timeEvent}>{timeE}</span>
            <span style={style.localEvent}>{location}</span>
            <button className="btnDelNotes" onClick={/* props.f */
               () => {
                  if (confirm("Удалить заметку?")) {
                     dispatch(props.f)
                     dSound()
                  }
               }
               // () => {
               //    dispatch(removeNotes(id))
               // }
            } >удалить</button>
            <span style={style.dateCreate}>дата создания: {dateCN}</span>
         </div>
         <hr style={{ color: "red", maxWidth: "1084px", minWidth: "1084px" }} />
      </div>
   )
}