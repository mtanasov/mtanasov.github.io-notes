import React from "react";
import "./styleCreateNotes.css"

export class CreateNotes extends React.Component {

   render() {
      return (
         <div id="createNotes">
            <div id="group1">
               {/* <textarea id="titleCreateNotes" cols="30" rows="1" placeholder="заголовок"></textarea> */}
               <textarea id="textCreateNotes" cols="125" rows="8" placeholder="текст" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et venenatis ante, vel facilisis ex. Proin mattis interdum odio. Etiam id tortor vel nisi semper suscipit. Phasellus vehicula, nisi gravida rutrum tempus, libero mi ornare quam, id tempor libero purus faucibus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut vehicula molestie est vel fermentum. Morbi faucibus maximus ligula. Phasellus maximus leo tincidunt arcu aliquet bibendum. Donec cursus arcu ac metus laoreet, nec gravida ligula fermentum. Vivamus vitae fringilla arcu. Etiam elementum ipsum nec consectetur feugiat. Donec quis suscipit magna, fringilla vehicula turpis. Mauris iaculis dui at erat venenatis, eget semper velit euismod. Vestibulum vulputate viverra justo et eleifend.Donec quis suscipit magna, fringilla vehicula turpis."></textarea>
            </div>
            <div id="settings">
               <input id="dateEvent" type="date" />
               <input id="timeEvent" type="time" />
               <input id="locationEvent" type="text" placeholder="место события" />
               <span id="priority">
                  <div id="blue"></div>
                  <div id="yellow"></div>
                  <div id="orange"></div>
                  <div id="pink"></div>
               </span>
               <span id="buttonSave">  Сохранить </span>
               <span id="buttonClear"> Очистить </span>
            </div>

         </div>
      )

   }
}