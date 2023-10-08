import DeleteIcon from "./svg/DeleteIcon"
import EditIcon from "./svg/EditIcon"
import NotesIcon from "./svg/NotesIcon"
export default function Note({note,index,deleteFunc})
{
    
    
    return(
        <div className="note_container"   key={index}>
            <div className="note_container_content">
                <strong>{note.title}</strong>
                <div><p className="note_container_preview">{note.body.substring(0,9)+"....."}</p></div>
            </div>
           
            <div className="note_container_actions">
                <button onClick={()=>deleteFunc(note.id)} className="delete_btn"><DeleteIcon /></button>
            </div>
          
        </div>
    )
}