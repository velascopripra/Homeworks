import singleList from "./singleList"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import "./Songs.css"

const Songs = () => {
    const playlist = new singleList()

    const navigate = useNavigate()
    const sig = () => {
        navigate("/Pages", {replace:true})
    }

     const songs = [
        "Bad Bunny - KETU TeCRÉ",
        "Daft Punk - Around The World",
        "The Royal Concept - Goldrushed",
        "Trent Reznor and Atticus ross - Painted Sun in Abstract",
        "Deorro - Five Hours"
     ]

     songs.forEach(song => playlist.append(song))

    const [currentSong, setCurrentSong] = useState(playlist.head)

    const playNext = () =>{
        if(currentSong && currentSong.next){
            setCurrentSong(currentSong.next)
        }
        console.log(currentSong)
    }


     return (
        <>
            <div className="songs-container">
  <h1>Tu playlist</h1>
  <p>Reproduciendo: {currentSong ? currentSong.value : "No song playing"}</p>
  <button onClick={playNext}>Next</button>
  <br />
  <button onClick={sig}>Historial de Páginas</button>
</div>
        </>
     )
}

export default Songs