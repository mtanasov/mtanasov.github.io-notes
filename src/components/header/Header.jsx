import React from "react";
import { styleHeader } from "./styleHeader";
import { CurrentDate } from "./CurrentDate"
import { audio } from "../../audio/Audio";

// import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

export function Header() {
   return (
      <div style={styleHeader}  >
         <h1> Заметки</h1 >
         <div>
            <CurrentDate />
         </div>

         {/* <Link to="/archive">A</Link> */}
      </div>
   )
}