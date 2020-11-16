import React from 'react';
import LogoHeader from '../comps/LogoHeader';
import HeaderAccount from '../comps/Header';
import Button from '../comps/Button';
import SignUpForm from '../comps/SignUpForm';

import Link from 'next/link'
import axios from 'axios';

export default function SignUpStudent() {

    const HandleSignUpStudent = async () => {

        //Communicate with the endpoint
        var resp = await axios.post("http://localhost:8888/user/register/student");

        //Response comes back as an object from the server
        console.log(resp.data);

    }

    return (
        <div className="sign-up-student">
            <LogoHeader profileDisplay="none" />
            <div className="contents">
                <div className="login">
                    <HeaderAccount text="Already have an account?" fontSize="34px" color="white" margin="0px 0px 30px 0px" />
                    <HeaderAccount text="Login now!" color="#747474" fontSize="28px" margin="0px 0px 50px 0px" />
                    <Link href="" >
                        <Button text="Login" border="2px solid #FFFFFF" backgroundColor="none" hoverColor="#FFD557" />
                    </Link>
                </div>
                <div className="signUp">
                    <SignUpForm />
                    <div className="buttons">
                        <Button text="Sign Up" onClick={HandleSignUpStudent} />
                    </div>
                </div>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}