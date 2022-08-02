import React from "react"
import { styleCurrentDate } from "./styleHeader";

export class CurrentDate extends React.Component {

   constructor() {
      super()
      this.state = { date: new Date() }
   }

   componentDidMount() {
      this.update = setInterval(() => {
         this.setState({ date: new Date() });
      }, 1000);
   }

   componentWillUnmount() {
      clearInterval(this.update);
   }

   render() {
      const { date } = this.state
      const getDay = () => {
         switch (date.getDay()) {
            case (0): return "воскресенье"
            case (1): return "понедельник"
            case (2): return "вторник"
            case (3): return "среда"
            case (4): return "четверг"
            case (5): return "пятница"
            case (6): return "суббота"
         }
      }
      const getDayMonth = String(date.getDate());
      const getMonth = () => {
         switch (date.getMonth()) {
            case (0): return "января"
            case (1): return "февраля"
            case (2): return "марта"
            case (3): return "апреля"
            case (4): return "мая"
            case (5): return "июня"
            case (6): return "июля"
            case (7): return "августа"
            case (8): return "сентября"
            case (9): return "октября"
            case (10): return "ноября"
            case (11): return "декабря"
         }
      }
      const getYear = String(date.getFullYear());
      const getTime = String(date.toLocaleTimeString())
      return (
         <div style={styleCurrentDate.generalStyle} >
            <div style={styleCurrentDate.styleDay} >{getDay()} </div>
            <div style={styleCurrentDate.styleDayMonth} >{getDayMonth} </div>
            <div style={styleCurrentDate.styleMonth}>{getMonth()} </div>
            <div style={styleCurrentDate.styleYear}>{getYear} </div>
            <div style={styleCurrentDate.styleTime}>{getTime} </div>
         </div>
      )
   }
}