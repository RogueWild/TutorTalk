import React, { useState, useEffect } from 'react';
import LogoHeader from '../comps/LogoHeader';
import HeaderAccount from '../comps/Header';
import Button from '../comps/Button';
import SignUpForm from '../comps/SignUpForm';

import Link from 'next/link'
import * as network from '../network';

export default function SignUpTutor(email, password, firstname, lastname, phonenumber) {
  const HandleSignUpTutor = async () => {
    // look here!! pls name the inputs for useState as these values in the argument
    // the error will be gone til you add them
    let data = await network.registerTutor(email, password, firstname, lastname, phonenumber);
    console.log(data);
  }
  useEffect(() => {
    HandleSignUpTutor();
  }, [])

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
          <SignUpForm displayTutorButton="flex" onClick={HandleSignUpTutor} />
        </div>
      </div>
      <div className="footer">
      </div>
    </div>
  )
}