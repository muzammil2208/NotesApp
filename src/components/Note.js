import DeleteIcon from "./svg/DeleteIcon";
export default function Note({note,index,setActiveNote,activeNote,deleteNote,addNoteFunc})
{
    const deleteNoteFunc=()=>deleteNote(note.id);
    
    return(
        <div className={`note_container ${note.id===activeNote.id&&"active"}`} >
            <div className="note_container_content"  onClick={()=>setActiveNote(note.id)}>
                <strong>{note.title}</strong>
                <div><p className="note_container_preview">{note.body.substring(0,9)+"....."}</p></div>
            </div>
           
            <div className="note_container_actions">
                <button onClick={deleteNoteFunc} className="delete_btn"><DeleteIcon /></button>
            </div>
          
        </div>
    )
}