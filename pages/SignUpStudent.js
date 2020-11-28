import React, { useEffect } from 'react';
import LogoHeader from '../comps/LogoHeader';
import HeaderAccount from '../comps/Header';
import Button from '../comps/Button';
import StudentSignUpForm from '../comps/StudentSignUpForm';

import { Router, useRouter } from 'next/router'

import Link from 'next/link';
import * as network from '../network';

export default function SignUpStudent() {
    const router = useRouter();

    const HandleSignUpStudent = async (email, password, firstname, lastname, phonenumber) => {
        if (!email || !password || !firstname || !lastname || !phonenumber) {
            alert("Please fill up all of the fields.");
        } else {
            let data = await network.registerStudent(email, password, firstname, lastname, phonenumber);
            console.log(data);
            if (data.err) {
                alert("This email has already been used.");
            } else {
                router.push('/StudentSuccess');
            }
        }
    }

    return (
        <div className="sign-up-student">
            <LogoHeader profileDisplay="none" />
            <div className="contents">
                <div className="login">
                    <HeaderAccount text="Already have an account?" fontSize="34px" color="white" margin="0px 0px 30px 0px" />
                    <HeaderAccount text="Login now!" color="#747474" fontSize="28px" margin="0px 0px 50px 0px" />
                    <Link href="/MainPage" >
                        <Button text="Login" border="2px solid #FFFFFF" backgroundColor="none" hoverColor="#FFD557" />
                    </Link>
                </div>
                <div className="signUp">
                    <StudentSignUpForm onClick={HandleSignUpStudent} />
                </div>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}