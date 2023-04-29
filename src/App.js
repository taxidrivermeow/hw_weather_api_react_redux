import './App.css';
import Info from "./components/Info";
import Data from "./components/Data";
import {useSelector} from "react-redux";
import {weatherTypes} from "./constants";

function App() {
    const weatherType = useSelector(state => state.weatherType);
    const video = weatherTypes.includes(weatherType)?weatherType:"default";
    return (
        <div className="wrapper">
            <div className="video">
                <video className="wrapper-bg-video" src={require(`./assets/video/${video}.mp4`)} autoPlay muted loop />
            </div>
            <div className="content">
                <Info/>
                <Data/>
            </div>
        </div>
    );
}

export default App;
