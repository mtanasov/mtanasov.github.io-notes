import React from "react";
import "./styleCreateNotes.css"
import { useSelector, useDispatch } from "react-redux";
import saveSlice, { addNotes, removeNotes } from "../../../reduxSlice/saveSlice";
import { v4 } from "uuid";
import useSound from "use-sound";
import inputSound from "../../../audio/click.mp3"
// import "../../../styleMediaLESS1080.css"

export function CreateNotes() {
   const text = useSelector((state) => state.note.txtN)
   const dateEvent = useSelector((state) => state.note.dateE)
   const timeEvent = useSelector((state) => state.note.timeE)
   const placeEvent = useSelector((state) => state.note.placeE)
   const bookmark = useSelector((state) => state.note.bookmark)
   const dateCreate = useSelector((state) => state.note.dateCN)

   const dispatch = useDispatch()

   const [inpSound] = useSound(inputSound)

   let iTxt = React.createRef();
   let iDate = React.createRef();
   let iTime = React.createRef();
   let iEPlace = React.createRef();
   let iBookMark = "hsl(58deg 73% 78%)";

   const bgrClr = (event) => {
      iBookMark = event.target.style.backgroundColor
      console.log("backgrounColor: " + iBookMark)
      // event.target.style.border = "1px solid red"
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
      <div id="createNotes" className="createNotes">
         <div id="group1">
            {/* <textarea id="titleCreateNotes" cols="30" rows="1" placeholder="заголовок"></textarea> */}
            <textarea onKeyDown={() => { inpSound() }} id="textCreateNotes" ref={iTxt} maxLength={740} cols="125" rows="8" placeholder="набирать текст тут" /* defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et venenatis ante, vel facilisis ex. Proin mattis interdum odio. Etiam id tortor vel nisi semper suscipit. Phasellus vehicula, nisi gravida rutrum tempus, libero mi ornare quam, id tempor libero purus faucibus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut vehicula molestie est vel fermentum. Morbi faucibus maximus ligula. Phasellus maximus leo tincidunt arcu aliquet bibendum. Donec cursus arcu ac metus laoreet, nec gravida ligula fermentum. Vivamus vitae fringilla arcu. Etiam elementum ipsum nec consectetur feugiat. Donec quis suscipit magna, fringilla vehicula turpis. Mauris iaculis dui at erat venenatis, eget semper velit euismod. Vestibulum vulputate viverra justo et eleifend.Donec quis suscipit magna, fringilla vehicula turpis." */ ></textarea>
         </div>
         <div id="settings">
            <div className="settingGroupe1">
               <input id="dateEvent" type="date" ref={iDate} />
               <input id="timeEvent" type="time" ref={iTime} maxLength="15" />
               <input id="locationEvent" type="text" ref={iEPlace} placeholder="место события" />
            </div>
            <div className="settingGroupe2">
               <span id="priority">
                  <span id='wrapperBlue' className='wrapper'><input type="radio" name='color' id="blue" style={{ backgroundColor: "var( --pColorBlue)" }} onChange={(event) => bgrClr(event)} /></span>
                  <span id='wrapperYellow' className='wrapper'><input type="radio" name='color' id="yellow" style={{ backgroundColor: "var(--pColorYellow)" }} onChange={(event) => bgrClr(event)} /></span>
                  <span id='wrapperOrange' className='wrapper'><input type="radio" name='color' id="orange" style={{ backgroundColor: "var( --pColorOrange)" }} onChange={(event) => bgrClr(event)} /></span>
                  <span id='wrapperPink' className='wrapper'><input type="radio" name='color' id="pink" style={{ backgroundColor: "var(--pColorPink)" }} onChange={(event) => bgrClr(event)} /></span>
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
               <span id="buttonClear" onClick={() => {
                  if (confirm("Очистить поля ввода?")) {
                     clearInput()
                  }
               }}> Очистить </span>
            </div>
         </div>
      </div>
   )
}