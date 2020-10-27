import React from 'react';
import styled, { css } from 'styled-components';

const AboutDiv = styled.div`
${props=>props.size === 0 && css`
font-size: 16px;   `};
${props=>props.color === 0 && css`
color:#000000;   `};
border-style: solid;
border-width: 1px;
border-radius: 5px;
padding: 10px;
border-color: #424242;
`;

const AboutHeader = styled.div`
font-size: 36px;
`

const AboutBox = ({text, color, size, text2}) => {
    return <AboutHeader> {text2} 
    <AboutDiv color={color} size={size}>           
            {text}
    </AboutDiv>
    </AboutHeader> 
    
}


AboutBox.defaultProps = {
    text: "I’m a Computer Science student at BCIT, and I’m passionate about helping others learn while I learn! I have a good understanding of interdisciplinary computer programming. Ask me anything and I’ll try to help you out. Email me or give me a call and leave a voice mail. I like to teach through Zoom; once you reach out and we seem like a good student/ tutor fit, I will set up a meeting for us on Zoom. ",
    color: "#000000",
    size: "16px",
}


export default AboutBox;