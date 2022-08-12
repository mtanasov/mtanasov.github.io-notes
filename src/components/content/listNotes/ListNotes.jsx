import React from "react";
import { styleListNotes } from "./styleListNotes";
import "./styleListNotes";
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

import { ActualNotes } from "./ActualNotes";
import { ArchiveNotes } from "./ArchiveNotes";

export function ListNotes(params) {
   return (
      <div style={styleListNotes}>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<ActualNotes />} />
               <Route path="/archive" element={<ArchiveNotes />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}