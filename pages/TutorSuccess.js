import React from 'react';
import LogoHeader from '../comps/LogoHeader';
import AccountHeader from '../comps/Header';
import TutorSuccessLottie from '../comps/Lotties/TutorSuccessLottie';
import Button from '../comps/Button';

export default function SignUp() {
    return (
        <div className="main">
            <LogoHeader profileDisplay="none" />
            <div className="inside">
                <AccountHeader text="Screening & Sign Up Complete" color="#3662FC" />
                <AccountHeader text="You are now a certified tutor!" />
                <TutorSuccessLottie />
                <div className="button">
                    <Button text="Continue" fontSize="18px" />
                </div>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}