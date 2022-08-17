import React from "react";
import { useState } from "react";
import { arrNotes } from "../../../reduxSlice/ssd"
import { removeNotes } from "../../../reduxSlice/saveSlice";
import { useDispatch } from "react-redux";

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

   const style = {
      main: {
         backgroundColor: "var(--headerBgrClr)",
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         padding: "0px 0px 20px 0px",
      },
      text: {
         backgroundColor: bookmark,
         backgroundSize: " 115% 252%",
         backgroundPosition: "-200px -30px",
         fontSize: "22px",
         fontFamily: "Mono",
         lineHeight: "22px",
         padding: "10px 20px",
         margin: "30px 20px 15px",
         borderRadius: "25px",
         border: "1px solid black",
         maxWidth: "1084px"
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
         marginLeft: "50px"
      },
      dateCreate: {
         padding: "5px 15px",
         border: "1px solid black",
         backgroundColor: "var(--bgrClrCreateNotes)",
         borderRadius: "10px",
      },
   }

   return (
      <div style={style.main}>
         <div style={style.text}>
            {text}</div>
         <div style={style.groupe1}>
            <span style={style.dateEvent}>{dateE}</span>
            <span style={style.timeEvent}>{timeE}</span>
            <span style={style.localEvent}>{location}</span>
            <button style={style.btnDelete} onClick={/* props.f */
               () => {
                  dispatch(props.f)
               }
               // () => {
               //    dispatch(removeNotes(id))
               // }
            } >удалить</button>
            <span style={style.dateCreate}>дата создания: {dateCN}</span>
         </div>
      </div>
   )
}