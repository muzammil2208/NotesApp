import DeleteIcon from "./svg/DeleteIcon";
export default function Note({note,index,setActiveNote,deleteNote,addNoteFunc})
{
    
    
    return(
        <div className="note_container"  onClick={()=>setActiveNote(note)} key={index}>
            <div className="note_container_content">
                <strong>{note.title}</strong>
                <div><p className="note_container_preview">{note.body.substring(0,9)+"....."}</p></div>
            </div>
           
            <div className="note_container_actions">
                <button onClick={()=>deleteNote(note.id)} className="delete_btn"><DeleteIcon /></button>
            </div>
          
        </div>
    )
}