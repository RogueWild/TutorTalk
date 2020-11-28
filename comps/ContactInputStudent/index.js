import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import BriefInput from '../BriefInput';
import InputText from '../Input';

const ContactInputCont = styled.div`
    width: 370px;
    height: 322px;
    display: inline-flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;
`;

const InputBox = styled.div`
    margin:8px 0;
`;
const InputImg = styled.img`
    margin:0 14px 0 0;
`;

// to-do auto fill the phone and email
const ContactInputStudent = ({ }) => {
    return <ContactInputCont>
        <InputBox>
            <InputImg src={"phone.png"} />
            <InputText placeholder={"Phone Number"} width={"78%"} />
        </InputBox>
        <InputBox>
            <InputImg src={"message.png"} />
            <InputText placeholder={"Email"} width={"78%"} />
        </InputBox>
    </ContactInputCont>
}

export default ContactInputStudent;