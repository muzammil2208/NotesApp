import NotesIcon from "./svg/NotesIcon";
import LogoutIcon from "./svg/LogoutIcon";
import EditIcon from "./svg/EditIcon";
import {useState} from 'react';
import uuid from 'react-uuid';
import Note from "./Note";
export default function Sidebar()
{
    const [notes,setNotes]=useState([]);
    const addNotes=()=>{
        const note={
            id:uuid(),
            title:"Unified title",
            body:"type something here",
            lastModefied:(Date.now()/1000),
            folder:""
        }
        setNotes(prevNotes=>[note,...prevNotes]);
    }
    const deleteNote=(idtoBeDeleted)=>
    {
        setNotes(notes.filter(note=>note.id!==idtoBeDeleted));
    }
    return(
        <div className="sideBar">
            <div className="sideBar_top_container">
                <p className="user_name">Muzammil</p>
                <button className="LogoutBtn"><LogoutIcon/></button>
            </div>
            <button className="new_notes_btn" onClick={addNotes} >New Notes</button>
            <div className="sidebar_folder_container">
                    <div className="folder_container_title"><p>Folder</p><p>+</p></div>
                    <div className="folder"><NotesIcon/><p className="notes_title">Workout details</p></div>
                    <div className="folder"><NotesIcon/><p className="notes_title">Holder details</p></div>
                    <div className="folder"><NotesIcon/><p className="notes_title">Programming Stack</p></div>
                    <div className="folder"><NotesIcon/><p className="notes_title">Insurance details</p></div>
                    <div className="folder"><NotesIcon/><p className="notes_title">Quran detailss</p></div>

            </div>
            <h3 className="notes_title">
                    Notes
            </h3>
            <div className="sidebar_notes_container">
               {notes.map((note,index)=>
                <Note 
                    note={note} 
                    index={index} 
                    deleteFunc={deleteNote}
                    />
               )}
            </div>
        </div>
    )
}