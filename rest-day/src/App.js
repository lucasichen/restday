import "./App.css";
import AppBar from "./components/AppBar";
import { Route } from "react-router-dom";
import Trends from "./components/Trends/Trends";

function App() {
    return (
        <div className="App">
            <AppBar />
            <Trends />
        </div>
    );
}

export default App;
