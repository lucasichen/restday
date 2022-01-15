import "./App.css";
import AppBar from "./components/AppBar";
import { Route } from "react-router-dom";
import WorkoutSchedule from "./components/Workout Schedule/WorkoutSchedule";

function App() {
    return (
        <div>
            <AppBar />
            <Route path="/workout-schedule">
                <WorkoutSchedule />
            </Route>
        </div>
    );
}

export default App;
