import "./App.css";
import AppBar from "./components/AppBar";
import WorkoutSchedule from "./components/WorkoutSchedule/WorkoutSchedule";

function App() {
    return (
        <div className="App">
            <AppBar />
            <WorkoutSchedule />
        </div>
    );
}

export default App;
