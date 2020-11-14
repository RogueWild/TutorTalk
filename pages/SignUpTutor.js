import React from 'react';
import LogoHeader from '../comps/LogoHeader';
import HeaderAccount from '../comps/Header';
import Button from '../comps/Button';
import SignUpForm from '../comps/SignUpForm';

import Link from 'next/link'
import axios from 'axios';

export default function SignUpTutor() {

  const HandleSignUpTutor = async (email, pass, firstName, lastName, phone) => {

    //Communicate with the endpoint
    var resp = await axios.post("link", {
      email: email,
      password: pass,
      firstName: firstName,
      lastName: lastName,
      phone: phone
    });

    //Response comes back as an object from the server
    console.log(resp.data);

  }

  return (
    <div className="sign-up-tutor">
      <LogoHeader />
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
            <Button text="Peer Tutor" onClick={HandleSignUpTutor} />
            <Button text="Certified Tutor" fontSize="16px" onClick={HandleSignUpTutor} />
          </div>
        </div>
      </div>
      <div className="footer">
      </div>
    </div>
  )
}