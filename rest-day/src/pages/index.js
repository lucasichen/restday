import React from 'react'
import {NavBtn,NavBtnLinkd,HomeText} from './home_page';

export const Home = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
            backgroundColor: '#191919'
        }}
        >
            <HomeText>
                Eat, Sleep, Workout,{"\n"} <strong>Rest</strong>, Repeat
                <div>
                    Your ideal workout plan, stress-free.
                </div>
            </HomeText>
            <NavBtn>
                    <NavBtnLinkd to="/signin">Plan Now</NavBtnLinkd>
            </NavBtn>
            
        </div>
    )
}
export default Home