import React from "react";
// import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { TheNote } from "./TheNote";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { removeNotes } from "../../../reduxSlice/saveSlice";
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch()
import useSound from "use-sound";
import iS from "../../../audio/click.mp3"

import { arrNotes, toArray } from "../../../reduxSlice/ssd"
import { memo } from "react";
import { useState } from "react";
import "./st.css"
import "./filter.css"

export function setFilterOn(params) {
   return setFilterOn(false)
}

export function ActualNotes(props) {
   const todo = useSelector((state) => state.note.todos)
   // const todo = useSelector(() => JSON.parse(localStorage.getItem("actualNotes")))
   // const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("actualNotes"))) // 
   // console.log(todo);
   // const [filter, setFilter] = useState(JSON.parse(localStorage.getItem("actualNotes"))) // 
   const [filter, setFilter] = useState(todo) // 
   const [filterOn, setFilterOn] = useState(false)
   const [inputValue, setInputValue] = useState("")
   const [inp] = useSound(iS)
   let dateStart = React.createRef()
   let dateEnd = React.createRef()

   const style = {
      main: {
         display: "flex",
         padding: "5px 0px",
         justifyContent: "center",
         gap: "30px",
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
      },
      dateEvent: {
         padding: "0px 5px 0px 8px",
         border: "1px solid black",
         backgroundColor: "var(--bgrClrCreateNotes)",
         borderRadius: "8px",
         cursor: "pointer",
         fontFamily: "PoiretOne",
         fontSize: "14px",
         fontWeight: "700",
      },
      btnFilter: {
         border: "3px solid white",
         padding: "3px",
         backgroundColor: "var(--bgrClrCreateNotes)",
         borderRadius: "5px",
      }
   }

   // let filterByNotesText = filter.filter((n) => { return n.txtN.toLowerCase().includes(inputValue.toLowerCase()) })
   // let filterByNotesText = todo.filter((n) => { return n.txtN.toLowerCase().includes(inputValue.toLowerCase()) })
   let filterByNotesText = () => {
      if (JSON.parse(localStorage.getItem("actualNotes"))) {
         return todo.filter((n) => { return n.txtN.toLowerCase().includes(inputValue.toLowerCase()) })
      } else {
         return todo
      }
   }
   // todo.filter((n) => { return n.txtN.toLowerCase().includes(inputValue.toLowerCase()) })

   function filterColor(color) {
      if (color === "hsl(199deg 63% 62%)") {//blue  
         // console.log(todo)
         let blueArr = todo.filter(item => { return item.bookmark.includes("var( --pColorBlue)") })
         setFilter(blueArr)
      } else if (color === "hsl(58deg 73% 78%)") {//yellow  
         let yellowArr = todo.filter(item => { return item.bookmark.includes("var(--pColorYellow)") })
         setFilter(yellowArr)
      } else if (color === "hsl(29deg 89% 64%)") {//orange  
         let orangeArr = todo.filter(item => { return item.bookmark.includes("var( --pColorOrange)") })
         setFilter(orangeArr)
      } else if (color === "hsl(338deg 79% 70%)") {//pink  
         let pinkArr = todo.filter(item => { return item.bookmark.includes("var(--pColorPink)") })
         setFilter(pinkArr)
      } else if (color === "ALL") {
         // setFilter(todo)
         setFilterOn(false)
      } else if (color === "search") {
         setFilterOn(true)
         setFilter(todo.filter((n) => { return n.txtN.toLowerCase().includes(inputValue.toLowerCase()) }))
      } else {
         // setFilterOn(true)
         setFilter(todo.filter((n) => { return n.txtN.toLowerCase().includes(inputValue.toLowerCase()) }))
         // if (filterOn) { //filter on
         // let input = filter.filter((n) => { return n.txtN.toLowerCase().includes(inputValue.toLowerCase()) })
         // } else if (!filterOn) { //filter off
         // let input = todo.filter((n) => { return n.txtN.toLowerCase().includes(inputValue.toLowerCase()) })
         // setFilter(input)
      }
   }

   function filterDate() {
      setFilterOn(false)
      setFilterOn(true)
      let arrOnDate = filter.filter((obj) => Date.parse(obj.dateE) >= Date.parse(dateStart.current.value) && Date.parse(obj.dateE) <= Date.parse(dateEnd.current.value))
      console.log(arrOnDate);
      setFilter(arrOnDate)
      // setFilterOn(false)
   }

   // const Render = memo(
   const Render = () => {
      if (localStorage.getItem("actualNotes")) {
         if (filterOn) {
            return (
               filter.map((element) => // массив фильтрации
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
         } else if (!filterOn) {
            return (
               filterByNotesText().map((element) => //основной массив со store
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
         }
      } else {
         return <div style={{ textAlign: "center" }}> Тут будут ваши заметки</div>
      }
   }

   return (
      <div className="actualNotes">
         <div style={style.main} >
            <Link to="/archive" style={style.archiveLink}> {/* Archive */} </Link>
            {/* <div style={style.miniHeader}> */}
            <div> Сохраненные заметки </div>
            <div id="filterColors">
               {/* <span id='wrapperBlue' className='wrapper' onClick={() => filterColor(setFilter("var( --pColorBlue)"))}></span> */}
               <span id='wrapperBlue' className='wrapper' onClick={() => { setFilterOn(true); console.log("filter on"); filterColor("hsl(199deg 63% 62%)") }}></span>
               <span id='wrapperYellow' className='wrapper' onClick={() => { setFilterOn(true); console.log("filter on"); filterColor("hsl(58deg 73% 78%)") }}></span>
               <span id='wrapperOrange' className='wrapper' onClick={() => { setFilterOn(true); console.log("filter on"); filterColor("hsl(29deg 89% 64%)") }}></span>
               <span id='wrapperPink' className='wrapper' onClick={() => { setFilterOn(true); console.log("filter on"); filterColor("hsl(338deg 79% 70%)") }}></span>
               <span id='resetFilterColors' className='wrapper' onClick={() => { setFilterOn(false); console.log("filter off"); filterColor("ALL") }}></span>
            </div>
            <input onKeyDown={() => inp()} onBlur={() => { setFilterOn(false); console.log("filter off on event blur") }} onChange={(event) => { filterColor(setInputValue(event.target.value)) }} placeholder="поиск" style={style.search} />
            от<input style={style.dateEvent} type="date" ref={dateStart} />
            до<input style={style.dateEvent} type="date" ref={dateEnd} />
            <div style={style.btnFilter} onClick={() => { filterDate() }} > Ф </div>
         </div>
         <Render />
      </div>
   )
}
