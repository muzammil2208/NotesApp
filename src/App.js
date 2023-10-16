import Sidebar from "./components/Sidebar";
import "./App.css";
import uuid from "react-uuid";
import { useState } from "react";
import MainWindow from "./components/MainWindow";

export default function App()
{
    const[activeNote,setActiveNote]=useState({});
    const [notes,setNotes]=useState([]);
    const addNotes=()=>{
        const note={
            id:uuid(),
            title:"Unified title",
            body:"type something here",
            lastModefied:(Date.now()/1000),
            folder:"",
        }
        setNotes(prevNotes=>[note,...prevNotes]);
    }
    const ActiveNoteSet=(idtobeSelected)=>{
        setActiveNote(notes.find(note=>note.id===idtobeSelected))
    }
    const deleteNote=(idtoBeDeleted)=>
    {
        setNotes(notes.filter(note=>note.id!==idtoBeDeleted));
    }
    return(
        <div className="main_container">
            <Sidebar 
                notes={notes}
                addNoteFunc={addNotes}
                setActiveNote={ActiveNoteSet}
                deleteNote={deleteNote}
                activeNote={activeNote}
            />
            <MainWindow activeNote={activeNote}/>
        </div>
    );
}