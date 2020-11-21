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

const SignUpForm = ({ onClick }) => {
    const [email, setEmail] = useState("");

    return <SignUpFormBox>
        <HeaderAccount text="Create your account" fontSize="34px" margin="0px 0px 20px 0px" />
        <Input placeholder="Email" margin="0px 0px 20px 0px" onChange={(e) => {
            setEmail(e.target.value)
        }} />
        <Input placeholder="Password" margin="0px 0px 20px 0px" />
        <Input placeholder="Confirm Password" margin="0px 0px 20px 0px" />
        <Cont>
            <Input placeholder="First Name" width="40%" margin="0px 0px 20px 0px" />
            <Input placeholder="Last Name" width="40%" margin="0px 0px 20px 0px" />
        </Cont>
        <Input placeholder="Phone" margin="0px 0px 20px 0px" />
        <button onClick={() => {
            onClick(email)
        }}>Submit</button>
    </SignUpFormBox>

}

SignUpForm.defaultProps = {
    onClick: () => { }
}

export default SignUpForm;