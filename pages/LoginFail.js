import React from 'react';
import LogoHeader from '../comps/LogoHeader';
import AccountHeader from '../comps/Header';
import ErrorLottie from '../comps/Lotties/ErrorLottie';
import Button from '../comps/Button';

export default function SignUp() {
    return (
        <div className="main">
            <LogoHeader profileDisplay="none" />
            <div className="inside">
                <div className="lottie">
                    <ErrorLottie />
                </div>
                <div className="message">
                    <AccountHeader text="Oops!" color="#424242" fontSize="34px" fontWeight="500" />
                    <AccountHeader text="Invalid email or password" color="#424242" fontSize="24px" fontWeight="normal" />
                    <div className="button">
                        <Button text="Try Again" fontSize="18px" />
                    </div>
                </div>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}