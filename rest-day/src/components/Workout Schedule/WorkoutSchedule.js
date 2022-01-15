import { useState } from "react";

import "./WorkoutSchedule.css";

const WorkoutSchedule = () => {
    const defaultSchedule = {
        Sunday: {
            target: {
                name: "bicep",
                src: ".../../../assets/Body Icons/bicep.jpg",
            },
            exercises: [],
        },
        Monday: {
            target: {
                name: "aerobics",
                src: "../../Assets/Body Icons/aerobics.png",
            },
            exercises: [],
        },
        Tuesday: {
            target: {
                name: "pectorals",
                src: "../../Assets/Body Icons/Pectorals.png",
            },
            exercises: [
                {
                    name: "Floor Fly (With Barbell)",
                    src: "../../Assets/Workout GIFs/Floor Fly (With Barbell).gif",
                },
                {
                    name: "Chest Tap Pushup",
                    src: "../../Assets/Workout GIFs/Chest Tap Pushup.gif",
                },
                {
                    name: "Dumbbell Fly",
                    src: "../../Assets/Workout GIFs/Dumbbell Fly.gif",
                },
                {
                    name: "Barbell Bench Press",
                    src: "../../Assets/Workout GIFs/Barbell Bench Press.gif",
                },
                {
                    name: "Cable Seated Chest Press",
                    src: "../../Assets/Workout GIFs/Cable Seated Chest Press.gif",
                },
            ],
        },
        Wednesday: {
            target: {
                name: "abs",
                src: "../../Assets/Body Icons/abs.png",
            },
            exercises: [],
        },
        Thursday: {
            target: {
                name: "lats",
                src: "../../Assets/Body Icons/lats.png",
            },
            exercises: [],
        },
        Friday: {
            target: {
                name: "rest",
                src: "../../Assets/Body Icons/rest.png",
            },
            exercises: [],
        },
        Saturday: {
            target: {
                name: "quads",
                src: "../../Assets/Body Icons/quads.png",
            },
            exercises: [],
        },
    };

    const [schedule, setSchedule] = useState(defaultSchedule);

    return <div className="workout-schedule"></div>;
};

export default WorkoutSchedule;
