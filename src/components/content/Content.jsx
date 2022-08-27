import React from "react"

import { CreateNotes } from "./createNotes/CreateNotes"
import { ListNotes } from "./listNotes/ListNotes"
import useSound from "use-sound";
import clickS from "../../audio/click.mp3"
import "./listNotes/styleActualNotes.css"


export const Content = () => {
   const [click] = useSound(clickS)
   return (
      <div onClick={() => click()} className="content actualMain" >
         <CreateNotes />
         <ListNotes />
      </div>
   )
}