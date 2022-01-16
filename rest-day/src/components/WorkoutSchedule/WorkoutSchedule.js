import { useState } from "react";
import WorkoutDay from "./WorkoutDay";
import React from 'react'

import "./WorkoutSchedule.css";

const WorkoutSchedule = () => {
    const defaultSchedule = [
        {
            id: 1,
            day: "sunday",
            target: {
                name: "bicep",
                src: require("../../Assets/Body Icons/Bicep.png"),
            },
            exercises: [],
        },
        {
            id: 2,
            day: "monday",
            target: {
                name: "aerobics",
                src: require("../../Assets/Body Icons/Aerobics.png"),
            },
            exercises: [],
        },
        {
            id: 3,
            day: "tuesday",
            target: {
                name: "pectorals",
                src: require("../../Assets/Body Icons/Pectorals.png"),
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
        {
            id: 4,
            day: "wednesday",
            target: {
                name: "abs",
                src: require("../../Assets/Body Icons/Abs.png"),
            },
            exercises: [],
        },
        {
            id: 5,
            day: "thursday",
            target: {
                name: "lats",
                src: require("../../Assets/Body Icons/Lats.png"),
            },
            exercises: [],
        },
        {
            id: 6,
            day: "friday",
            target: {
                name: "rest",
                src: require("../../Assets/Body Icons/Rest.png"),
            },
            exercises: [],
        },
        {
            id: 7,
            day: "saturday",
            target: {
                name: "quads",
                src: require("../../Assets/Body Icons/Quads.png"),
            },
            exercises: [],
        },
    ];

    const [schedule, setSchedule] = useState(defaultSchedule);

    return (
        <div
            className="workout-schedule"
            style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "90vh",
                backgroundColor: "#191922",
                flexDirection: "column",
            }}
        >
            <div className="days">
                {schedule.map((day) => {
                    return (
                        <WorkoutDay
                            key={day.id}
                            imgSrc={day.target.src}
                            targetName={day.target.name}
                            day={day.day}
                        />
                    );
                })}
            </div>
            <div className="start-btn">Start Today's Session</div>
        </div>
    );
};

export default WorkoutSchedule;
