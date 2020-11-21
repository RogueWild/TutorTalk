import React, { useState, useEffect } from 'react';
import LogoHeader from '../comps/LogoHeader';
import HeaderAccount from '../comps/Header';
import Button from '../comps/Button';
import Input from '../comps/Input';

import Link from 'next/link';
import * as network from '../network';

export default function mainPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        // look here!! pls name the inputs for useState as these values in the argument
        // the error will be gone til you add them
        let data = await network.login(email, password);
        console.log(data);
    }
    useEffect(() => {
        handleLogin();
    }, [])

    return (
        <div className="main-page">

            <LogoHeader profileDisplay="none" />

            <div className="contents">

                <div className="login">
                    <div className="header">
                        <HeaderAccount text="Log in to" color="#676767" fontSize="32px" margin="0px 10px 40px 0px" />
                        <HeaderAccount text="TUTOR TALK" color="#FFBF00" fontSize="32px" margin="0px 10px 40px 0px" />
                    </div>
                    <Input placeholder="Email" width="50%" onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <Input placeholder="Password" width="50%" margin="10px 0px 0px 0px" onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                    <div className="buttons">
                        <Button text="Log in" margin="40px 0px 0px 0px" onClick={handleLogin} />
                    </div>
                </div>

                <div className="sign-up">
                    <HeaderAccount text="Don’t Have an Account?" fontSize="34px" color="white" margin="0px 0px 30px 0px" />
                    <HeaderAccount text="Sign up as a..." color="#747474" fontSize="28px" margin="0px 0px 50px 0px" />
                    <Link href="/SignUpStudent" >
                        <Button text="Student" border="2px solid #FFFFFF" backgroundColor="none" hoverColor="#FFD557" />
                    </Link>
                    <Link href="/SignUpTutor" >
                        <Button text="Tutor" border="2px solid #FFFFFF" backgroundColor="none" hoverColor="#FFD557" margin="40px 0px 0px 0px" />
                    </Link>
                </div>

            </div>

            <div className="footer">
            </div>

        </div>
    )
}