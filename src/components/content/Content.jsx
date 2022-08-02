import React from "react"

import { CreateNotes } from "./createNotes/CreateNotes"
import { ListNotes } from "./listNotes/ListNotes"

export class Content extends React.Component {

   render() {
      return (
         <>
            <CreateNotes />
            <ListNotes />
         </>
      )
   }
}