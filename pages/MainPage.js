import React from 'react';
import LogoHeader from '../comps/LogoHeader';
import HeaderAccount from '../comps/Header';
import Button from '../comps/Button';
import Input from '../comps/Input';

import Link from 'next/link'
import axios from 'axios';

export default function SignUpStudent() {

    const HandleLogin = async () => {

        //Communicate with the endpoint
        var resp = await axios.post("http://localhost:8888/user/register/student");

        //Response comes back as an object from the server
        console.log(resp.data);

    }

    return (
        <div className="main-page">

            <LogoHeader profileDisplay="none" />

            <div className="contents">

                <div className="login">
                    <div className="header">
                        <HeaderAccount text="Log in to" color="#676767" fontSize="32px" margin="0px 10px 40px 0px" />
                        <HeaderAccount text="TUTOR TALK" color="#FFBF00" fontSize="32px" />
                    </div>
                    <Input placeholder="Email" width="50%" />
                    <Input placeholder="Password" width="50%" margin="10px 0px 0px 0px" />
                    <div className="buttons">
                        <Button text="Log in" margin="40px 0px 0px 0px" onClick={HandleLogin} />
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