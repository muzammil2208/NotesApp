export default function MainWindow({note})
{
    
    return(
        <div className="main_window">
            <input className="main_window_title" type="text"  value={note.title || 'undefined value'} ></input>
            <textarea className="main_window_body" value={note.body||''}></textarea>
            <div className="main_window_folder">folder association</div>
            <button className="main_window_savebtn">save</button>
        </div>
    )
}