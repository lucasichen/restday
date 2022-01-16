import React from 'react';
import {HomeBtn,NavBtnLinkd,HomeText,SmallText} from './home_page';

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
                <div>
                    Eat, Sleep, Workout,<br />
                </div>
                <div>
                    <strong> Rest</strong>, Repeat
                </div>
                <SmallText>
                    Your ideal workout plan, stress-free.
                </SmallText>
            </HomeText>
            <HomeBtn>
                    <NavBtnLinkd to="/signin">Plan Now</NavBtnLinkd>
            </HomeBtn>
            
        </div>
    )
}
export default Home