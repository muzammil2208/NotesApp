import Sidebar from "./components/Sidebar";
import "./App.css";
import MainWindow from "./components/MainWindow";
export default function App()
{
    return(
        <div className="main_container">
            <Sidebar/>
            <MainWindow/>
        </div>
    );
}