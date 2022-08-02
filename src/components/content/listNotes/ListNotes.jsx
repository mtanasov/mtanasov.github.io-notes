import React from "react";
import { styleListNotes } from "./styleListNotes";
import "./styleListNotes";
// import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'

import { ActualNotes } from "./ActualNotes";
import { ArchiveNotes } from "./ArchiveNotes";

export class ListNotes extends React.Component {
   render() {
      return (
         <div style={styleListNotes}>

         </div>
      )
   }
}