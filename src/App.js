import Sidebar from "./components/Sidebar";
import "./App.css";
import { useState } from "react";
import MainWindow from "./components/MainWindow";

export default function App()
{
    const[activeNote,setActiveNote]=useState({});
    const getActiveNote=(note)=>{
        
        setActiveNote(()=>note);
    }
    return(
        <div className="main_container">
            <Sidebar selectNote={getActiveNote}/>
            <MainWindow note={activeNote}/>
        </div>
    );
}