
import LogoutIcon from "./svg/LogoutIcon";


import Note from "./Note";
export default function Sidebar({notes,addNoteFunc,setActiveNote,deleteNote,})
{
    return(
        <div className="sideBar">
            <div className="sideBar_top_container">
            <div className="sidebar_top_container_profile">MK</div>
                <p className="user_name">Muzammil</p>
                <button className="LogoutBtn"><LogoutIcon/></button>
            </div>
            <button className="new_notes_btn" onClick={addNoteFunc} >New Notes</button>
            <h3 className="notes_title">
                    Notes
            </h3>
            <div className="sidebar_notes_container">
               {notes.map((note,index)=>
                <Note 
                    note={note} 
                    key={index} 
                    addNoteFunc={addNoteFunc}
                    setActiveNote={setActiveNote}
                    deleteNote={deleteNote}
                    />
               )}
            </div>
        </div>
    )
}