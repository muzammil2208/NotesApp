export default function MainWindow({activeNote})
{
    
    return(
        <div className="main_window">
            <input className="main_window_title" type="text"  value={activeNote.title||"undefined"}  ></input>
            <textarea className="main_window_body" value={activeNote.body||"please select a note to edit"} ></textarea>
            
            
        </div>
    )
}