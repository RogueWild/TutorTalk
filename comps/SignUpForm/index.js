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

const ButtonContStudent = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    display:${props => props.displayStudentButton ? props.displayStudentButton : "none"};
`;

const ButtonContTutor = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    display:${props => props.displayTutorButton ? props.displayTutorButton : "none"};
`;

const SignUpForm = ({ onClick, displayStudentButton, displayTutorButton }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [confirmPassword, setconfirmPassword] = useState("");
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
        {/* <Input placeholder="Confirm Password" margin="0px 0px 20px 0px" onChange={(e) => {
            setconfirmPassword(e.target.value)
        }} /> */}
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
        <ButtonContStudent displayStudentButton={displayStudentButton}>
            <Button onClick={() => {
                // if (confirmPassword == password) {
                //     onClick(email);
                //     onClick(password);
                //     onClick(firstname);
                //     onClick(lastname);
                //     onClick(phonenumber);
                // } else {
                //     alert("Password Does Not Match!")
                // }
                onClick(email);
                onClick(password);
                onClick(firstname);
                onClick(lastname);
                onClick(phonenumber);
            }}
                text="Sign Up" />
        </ButtonContStudent>
        <ButtonContTutor displayTutorButton={displayTutorButton}>
            <Button onClick={() => {
                // if (confirmPassword == password) {
                //     onClick(email);
                //     onClick(password);
                //     onClick(firstname);
                //     onClick(lastname);
                //     onClick(phonenumber);
                // } else {
                //     alert("Password Does Not Match!")
                // }
                onClick(email);
                onClick(password);
                onClick(firstname);
                onClick(lastname);
                onClick(phonenumber);
            }}
                text="Sign Up" />
        </ButtonContTutor>
    </SignUpFormBox>

}

SignUpForm.defaultProps = {
    onClick: () => { }
}

export default SignUpForm;