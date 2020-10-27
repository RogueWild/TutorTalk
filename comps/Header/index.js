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

const HeaderAccount = ({text, color, size}) => {
    return <HeaderDiv color={color} size={size}>           
            {text}
    </HeaderDiv>
}


HeaderAccount.defaultProps = {
    text: "Don't Have an Account?",
    color: "#424242",
    size: "48px",
}


export default HeaderAccount;