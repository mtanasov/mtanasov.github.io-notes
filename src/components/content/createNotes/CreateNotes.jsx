import React from "react";
import "./styleCreateNotes.css"
import { useSelector, useDispatch } from "react-redux";
import saveSlice, { addNotes, removeNotes } from "../../../reduxSlice/saveSlice";
import { v4 } from "uuid";

export function CreateNotes() {
   const text = useSelector((state) => state.note.txtN)
   const dateEvent = useSelector((state) => state.note.dateE)
   const timeEvent = useSelector((state) => state.note.timeE)
   const placeEvent = useSelector((state) => state.note.placeE)
   const bookmark = useSelector((state) => state.note.bookmark)
   const dateCreate = useSelector((state) => state.note.dateCN)

   const dispatch = useDispatch()

   let iTxt = React.createRef();
   let iDate = React.createRef();
   let iTime = React.createRef();
   let iEPlace = React.createRef();
   let iBookMark = "hsl(58deg 73% 78%)";

   const bgrClr = (event) => {
      iBookMark = event.target.style.backgroundColor
      console.log("backgrounColor: " + iBookMark)
      event.target.style.border = "1px solid red"
      return iBookMark
   }

   const clearInput = () => {
      iTxt.current.value = ""
      iDate.current.value = ""
      iTime.current.value = ""
      iEPlace.current.value = ""
      iBookMark = "hsl(58deg 73% 78%)"
   }

   return (
      <div id="createNotes">
         <div id="group1">
            {/* <textarea id="titleCreateNotes" cols="30" rows="1" placeholder="заголовок"></textarea> */}
            <textarea id="textCreateNotes" ref={iTxt} maxLength={740} cols="125" rows="8" placeholder="набирать текст тут" /* defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et venenatis ante, vel facilisis ex. Proin mattis interdum odio. Etiam id tortor vel nisi semper suscipit. Phasellus vehicula, nisi gravida rutrum tempus, libero mi ornare quam, id tempor libero purus faucibus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut vehicula molestie est vel fermentum. Morbi faucibus maximus ligula. Phasellus maximus leo tincidunt arcu aliquet bibendum. Donec cursus arcu ac metus laoreet, nec gravida ligula fermentum. Vivamus vitae fringilla arcu. Etiam elementum ipsum nec consectetur feugiat. Donec quis suscipit magna, fringilla vehicula turpis. Mauris iaculis dui at erat venenatis, eget semper velit euismod. Vestibulum vulputate viverra justo et eleifend.Donec quis suscipit magna, fringilla vehicula turpis." */ ></textarea>
         </div>
         <div id="settings">
            <input id="dateEvent" type="date" ref={iDate} />
            <input id="timeEvent" type="time" ref={iTime} />
            <input id="locationEvent" type="text" ref={iEPlace} placeholder="место события" />
            <span id="priority">
               <div id="blue" style={{ backgroundColor: "var( --pColorBlue)" }} onClick={(event) => bgrClr(event)} ></div>
               <div id="yellow" style={{ backgroundColor: "var(--pColorYellow)" }} onClick={(event) => bgrClr(event)}></div>
               <div id="orange" style={{ backgroundColor: "var( --pColorOrange)" }} onClick={(event) => bgrClr(event)}></div>
               <div id="pink" style={{ backgroundColor: "var(--pColorPink)" }} onClick={(event) => bgrClr(event)}></div>
            </span>
            <span id="buttonSave" onClick={
               () => {
                  dispatch(addNotes(
                     {
                        txtN: iTxt.current.value,
                        dateE: iDate.current.value,
                        timeE: iTime.current.value,
                        placeE: iEPlace.current.value,
                        bookmark: iBookMark,
                        dateCN: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
                        id: v4(),
                     }
                  ));
                  clearInput()
               }
            }>  Сохранить </span>
            <span id="buttonClear" onClick={() => { clearInput() }}> Очистить </span>
         </div>

      </div>
   )
}