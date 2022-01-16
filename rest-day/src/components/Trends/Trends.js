import TrendGraph from "./TrendGraph";
import "./Trends.css";

const Trends = () => {
    const data = [
        {
            id: 1,
            title: "Sleep (Duration)",
            data: [8, 10, 6, 7, 10, 8, 5],
        },
        {
            id: 2,
            title: "Activity (Duration)",
            data: [0, 7, 2, 4, 6, 2, 3],
        },
        {
            id: 3,
            title: "Fatigue",
            data: [6, 2, 4, 9, 2, 10, 4],
        },
        {
            id: 4,
            title: "Stress",
            data: [2, 4, 6, 2, 4, 6, 2],
        },
    ];

    return (
        <div className="trends">
            {data.map((graphData) => (
                <TrendGraph
                    key={graphData.id}
                    title={graphData.title}
                    data={graphData.data}
                />
            ))}
        </div>
    );
};

export default Trends;
