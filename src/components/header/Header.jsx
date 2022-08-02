import React from "react";
import { styleHeader, styleSearch } from "./styleHeader";
import { CurrentDate } from "./CurrentDate"

import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

export class Header extends React.Component {
   render() {
      return (
         <div style={styleHeader}>
            <h1> Заметки</h1 >
            <div>
               <CurrentDate />
            </div>
            <input type="text" placeholder="поиск" style={styleSearch} />
            {/* <Link to="/archive">A</Link> */}
         </div>
      )
   }
}