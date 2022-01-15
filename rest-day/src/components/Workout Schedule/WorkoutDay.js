import "./WorkoutDay.css";

const WorkoutDay = (props) => {
    return <div className="workout-day">
        <img src={props.imageSrc}></img>
    </div>;
};

export default WorkoutDay;
