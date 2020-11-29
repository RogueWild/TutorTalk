import React from 'react';
import styled from 'styled-components';
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

// to-do: auto fill the phone and email
const ContactInputTutor = ({ }) => {
    return <ContactInputCont>
        <InputBox>
            <InputImg src={"phone.png"} />
            <InputText placeholder={"Phone Number"} width={"78%"} />
        </InputBox>
        <InputBox>
            <InputImg src={"message.png"} />
            <InputText placeholder={"Email"} width={"78%"} />
        </InputBox>
        <InputBox>
            <InputImg src={"time.png"} />
            <InputText placeholder={"Hours of availability, Zoom Link"} width={"78%"} />
        </InputBox>
        {/* <BriefInput image={true} src="/phone.png" width="498px" text="(604)284-9574"/>
        <BriefInput image={true} src="/message.png" text="emailname@gmail.com" width="455px" TxtColor="#FFBF00"/>
        <BriefInput image={true} src="/time.png" width="226px" text="Mondays – 13:30-17:30 Thursdays – 9:00-12:00 Zoom Link: www.zoomlink.com"/> */}

    </ContactInputCont>
}

export default ContactInputTutor;