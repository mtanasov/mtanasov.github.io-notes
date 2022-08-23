import React from "react";
import { styleHeader } from "./styleHeader";
import { CurrentDate } from "./CurrentDate"
import useSound from "use-sound";
import clickS from "../../audio/click.mp3"

// import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

export function Header() {
   const [click] = useSound(clickS)
   return (
      <div style={styleHeader} onClick={() => click()}  >
         <h1> Заметки</h1 >
         <div>
            <CurrentDate />
         </div>

         {/* <Link to="/archive">A</Link> */}
      </div>
   )
}