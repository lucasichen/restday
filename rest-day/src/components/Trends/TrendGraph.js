import "./TrendGraph.css";

import Trend from "react-trend";

const TrendGraph = (props) => {
    return (
        <div className="trend-graph">
            <div className="graph-header">
                <div className="graph-title">{props.title}</div>
            </div>
            <div className="graph">
                <Trend
                    smooth
                    autoDraw
                    autoDrawDuration={3000}
                    autoDrawEasing="ease-out"
                    data={props.data}
                    gradient={["#DE445D", "#DE0f0D"]}
                    radius={10}
                    strokeWidth={2}
                    strokeLinecap={"round"}
                />
            </div>
            <div className="days-of-week">
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
                <div>M</div>
                <div>T</div>
            </div>
        </div>
    );
};

export default TrendGraph;
