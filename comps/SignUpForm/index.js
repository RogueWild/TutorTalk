import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import HeaderAccount from '../Header';
import Input from '../Input';
import Button from '../Button';

const SignUpFormBox = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    max-width:50%;
`;

const Cont = styled.div`
    position:relative;
    display:flex;
    justify-content:space-between;
`;

const SignUpForm = ({ }) => {

    return <SignUpFormBox>
        <HeaderAccount text="Create your account" fontSize="42px" margin="0px 0px 20px 0px" />
        <Input placeholder="Email" margin="0px 0px 20px 0px" />
        <Input placeholder="Password" margin="0px 0px 20px 0px" />
        <Input placeholder="Confirm Password" margin="0px 0px 20px 0px" />
        <Cont>
            <Input placeholder="First Name" width="40%" margin="0px 0px 20px 0px" />
            <Input placeholder="Last Name" width="40%" margin="0px 0px 20px 0px" />
        </Cont>
        <Input placeholder="Phone" margin="0px 0px 20px 0px" />
        <Cont>
            <Button text="Peer Tutor" />
            <Button text="Certified Tutor" fontSize="16px" />
        </Cont>
    </SignUpFormBox>

}

SignUpForm.defaultProps = {

}

export default SignUpForm;