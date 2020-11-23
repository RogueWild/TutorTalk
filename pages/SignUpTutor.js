import React, { useEffect } from 'react';
import LogoHeader from '../comps/LogoHeader';
import HeaderAccount from '../comps/Header';
import Button from '../comps/Button';
import TutorSignUpForm from '../comps/TutorSignUpForm';

import { Router, useRouter } from 'next/router'

import Link from 'next/link'
import * as network from '../network';

export default function SignUpTutor() {
  const router = useRouter();

  const HandleSignUpTutor = async (email, password, firstname, lastname, phonenumber) => {
    let data = await network.registerTutor(email, password, firstname, lastname, phonenumber);
    console.log(data);
    if (data.err) {
      alert("Email alredy exists!");
    } else {
      router.push('/screeningPage');
    }
  }

  return (
    <div className="sign-up-tutor">
      <LogoHeader />
      <div className="contents">
        <div className="login">
          <HeaderAccount text="Already have an account?" fontSize="34px" color="white" margin="0px 0px 30px 0px" />
          <HeaderAccount text="Login now!" color="#747474" fontSize="28px" margin="0px 0px 50px 0px" />
          <Link href="/MainPage" >
            <Button text="Login" border="2px solid #FFFFFF" backgroundColor="none" hoverColor="#FFD557" />
          </Link>
        </div>
        <div className="signUp">
          <TutorSignUpForm onClick={HandleSignUpTutor} />
        </div>
      </div>
      <div className="footer">
      </div>
    </div>
  )
}