import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import HeaderAccount from '../Header';
import Input from '../Input';
import Button from '../Button';

const SignUpFormBox = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    max-width:70%;
`;

const Cont = styled.div`
    position:relative;
    display:flex;
    justify-content:space-between;
`;

const ButtonCont = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
`;

const TutorSignUpForm = ({ onClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [phonenumber, setPhone] = useState("");

    return <SignUpFormBox>
        <HeaderAccount text="Create your account" fontSize="34px" margin="0px 0px 20px 0px" />
        <Input placeholder="Email" margin="0px 0px 20px 0px" onChange={(e) => {
            setEmail(e.target.value)
        }} />
        <Input placeholder="Password" margin="0px 0px 20px 0px" onChange={(e) => {
            setPassword(e.target.value)
        }} />
        <Input placeholder="Confirm Password" margin="0px 0px 20px 0px" onChange={(e) => {
            setconfirmPassword(e.target.value)
        }} />
        <Cont>
            <Input placeholder="First Name" width="40%" margin="0px 0px 20px 0px" onChange={(e) => {
                setFirstName(e.target.value)
            }} />
            <Input placeholder="Last Name" width="40%" margin="0px 0px 20px 0px" onChange={(e) => {
                setLastName(e.target.value)
            }} />
        </Cont>
        <Input placeholder="Phone" margin="0px 0px 20px 0px" onChange={(e) => {
            setPhone(e.target.value)
        }} />
        <ButtonCont >
        <Button onClick={() => {
                if (confirmPassword == password) {
                    onClick(email, password, firstname, lastname, phonenumber);
                } else {
                    alert("Password Does Not Match!")
                }
            }}
                text="Sign Up" />
        </ButtonCont>
    </SignUpFormBox>

}

TutorSignUpForm.defaultProps = {
    onClick: () => { }
}

export default TutorSignUpForm;