import "./WorkoutDay.css";

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

const WorkoutDay = (props) => {
    const dayOfWeek = "tuesday";

    return (
        <div className="workout-day">
            <div className="body-icon">
                <img src={props.imgSrc} alt={props.targetName} />
            </div>
            <p className="body-part-name">{toTitleCase(props.targetName)}</p>
            {props.day === dayOfWeek ? (
                <div>
                    <hr className="divider-selected"></hr>
                    <p className="day-of-the-week-selected">{props.day.toUpperCase()}</p>
                </div>
            ) : (
                <div>
                    <hr className="divider"></hr>
                    <p className="day-of-the-week">{props.day.toUpperCase()}</p>
                </div>
            )}
        </div>
    );
};

export default WorkoutDay;
