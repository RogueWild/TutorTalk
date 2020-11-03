import React from 'react';
import LogoHeader from '../comps/LogoHeader';
import HeaderAccount from '../comps/Header';
import Button from '../comps/Button';
import SignUpForm from '../comps/SignUpForm';

export default function SignUp() {
    return (
        <div className="main">
            <LogoHeader />
            <div className="contents">
                <div className="login">
                    <HeaderAccount text="Already have an account?" fontSize="34px" color="white" margin="0px 0px 30px 0px" />
                    <HeaderAccount text="Login now!" color="#747474" fontSize="28px" margin="0px 0px 50px 0px" />
                    <Button text="Login" border="2px solid #FFFFFF" backgroundColor="none" hoverColor="#FFD557" />
                </div>
                <div className="signUp">
                    <SignUpForm />
                    <div className="buttons">
                        <Button text="Sign Up" />
                    </div>
                </div>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}