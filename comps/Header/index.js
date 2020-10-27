import React from 'react';
import styled, { css } from 'styled-components';

const HeaderDiv = styled.div`
font-weight: bold;
${props=>props.color === 0 && css`
color:#424242;   `};
${props=>props.size === 1 && css`
color:#FFBF00;   `};
${props=>props.size === 0 && css`
font-size: 48px;   `};
${props=>props.size === 1 && css`
font-size: 36px;   `};
${props=>props.size === 2 && css`
font-size: 50px;   `};
`;

const TutorTalk = styled.div`
color:#FFBF00;
font-size: 50px;
display: inline flex;
margin-left: 10px;
`;


const HeaderAccount = ({text, color, size, text2, size2, color2}) => {
    return <HeaderDiv color={color} size={size}>           
            {text}<TutorTalk color2={color2} size2={size2}> {text2}</TutorTalk>
    </HeaderDiv>
}


HeaderAccount.defaultProps = {
    text: "Don't Have an Account?",
    color: "#424242",
    size: "48px",
}


export default HeaderAccount;