import {
    HomeBtn,
    HomeText,
    NavBtnLinkd,
    SmallText,
} from "../../pages/home_page";
import React from 'react'

export const Home = () => {
    return (
        <div className="homepage"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
                backgroundColor: "#191922",
            }}
        >
            <HomeText>
                <div>
                    Eat, Sleep, Workout,
                    <br />
                </div>
                <div>
                    <strong> Rest</strong>, Repeat
                </div>
                <SmallText>Your ideal workout plan, stress-free.</SmallText>
            </HomeText>
            <HomeBtn>
                <NavBtnLinkd to="/workout-schedule">Plan Now</NavBtnLinkd>
            </HomeBtn>
        </div>
    );
};
export default Home;
