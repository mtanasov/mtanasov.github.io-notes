import useSound from "use-sound";



// const audio = {
export const clickAudio = () => {
   const [audio] = useSound("./click.mp3");
   return audio
}

export const deleteAudio = () => {
   const [audio] = useSound("./delete.mp3");
}

   // removeAudio() {
   //    let song = document.querySelector("#sound");
   //    document.addEventListener("click", () => {
   //       if (song.checked === true) {
   //          this.click()
   //       }
   //    });
   //    document.addEventListener("input", () => {
   //       if (song.checked === true) {
   //          this.click()
   //       }
   //    })
   // }
// }