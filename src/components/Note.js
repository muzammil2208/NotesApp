import DeleteIcon from "./svg/DeleteIcon"
import EditIcon from "./svg/EditIcon"
import NotesIcon from "./svg/NotesIcon"
export default function Note({title,index})
{
    
    
    return(
        <div className="note_container"   key={index}>
            <div className="note_container_content">
                <NotesIcon/>
                <p className="note_container_title">{title}</p>
            </div>
            <div className="note_container_actions">
                <EditIcon/>
                <DeleteIcon/>
            </div>
          
        </div>
    )
}