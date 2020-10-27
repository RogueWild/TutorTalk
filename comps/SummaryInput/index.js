import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import BriefInput from '../BriefInput';

const Container = styled.div`
    margin: 0px;
    min-width: 616px;
    min-height: 433px;
    display: inline-flex;
    flex-direction: column;
    justify-content: left;
    align-content: left;
`;

const Header = styled.input`
    margin: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 61px;
    color: #424242;
    border: ${props=>props.focused ? "1px solid #424242;" : ""};
    box-sizing: border-box;
    border-radius: 4px;
`;

const SubHeader = styled.input`
    margin: 8px 0px 35px 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 154.8%;
    color: #000000;
    border: ${props=>props.focused ? "1px solid #424242;" : ""};
    box-sizing: border-box;
    border-radius: 4px;
`;

const SummaryInput = ({}) => {
    const [focused, setfocused] = useState(false)
    return <Container onClick={()=> {
        setfocused(true);
    }}> 
        <Header focused={focused}></Header>
        <SubHeader focused={focused}></SubHeader>
        
        <BriefInput image={true} width="498px"/>
        <BriefInput image={true} src="/mortarboard.png" text="Diploma of Computer Science
    Studying for Bachelor’s of Computer Science" width="455px"/>
        <BriefInput marL="42px" width="226px" text="Mondays – 13:30-17:30 Thursdays – 9:00-12:00 Zoom Link: www.zoomlink.com"/>
    </Container>

}

SummaryInput.defaultProps = {
    HeadTxt: "Sarah Lee",
    SubTxt: "Peer Tutor, Computer Science, BCIT"
}

export default SummaryInput;