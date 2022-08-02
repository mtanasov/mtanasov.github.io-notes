import "../../colors.css"

export const styleHeader = {
   display: "flex",
   width: "100vw",
   height: "7vmin",
   color: "var(--titleClr)",
   backgroundColor: "var(--headerBgrClr)",
   justifyContent: "space-around",
   flexDirection: "row",
   alignItems: "center",
   fontFamily: "PoiretOne",
}

export const styleSearch = {
   height: "20px",
   borderRadius: "8px",
   padding: "0px 10px",
   border: "1px solid black",
   backgroundColor: "var(--bgrClrCreateNotes)"

}

export const styleCurrentDate = {
   generalStyle: {
      display: "flex",
      width: "370px",
      justifyContent: "space-around",
      flexDirection: "row",
      padding: "6px 0px 0px 0px",
      fontWeight: "700",
   },
   styleDay: {
      display: "inline-block",
      color: "red",
      // fontWeight: "700"
   },
   styleDayMonth: {
      width: "25px",
      display: "inline-block",
      border: "2px solid grey",
      borderRadius: "5px",
      margin: "-4px 0px 0px 0px",
      backgroundColor: "white",
      textAlign: "center"
   },
   styleMonth: {
      display: "inline-block"
   },
   styleYear: {
      display: "inline-block"
   },
   styleTime: {
      display: "inline-block",
      width: "70px",
      textAlign: "center"
   },

}