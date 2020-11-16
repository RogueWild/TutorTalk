import React from 'react';
import styled, { css } from 'styled-components';

const HeaderContainer = styled.div`
    display:flex;
    align-items:center;
`;

const HeaderDiv = styled.div`
    font-size:${props => props.fontSize ? props.fontSize : "28px"};
    font-weight:${props => props.fontWeight ? props.fontWeight : "bold"};
    margin:${props => props.margin ? props.margin : "0"};
    color:${props => props.color ? props.color : "0"};
`;

const HeaderPartTwo = styled.div`
    ${props=>props.hideDisplay === false && css`
    display:none;
    `};
    color:${props => props.colorTwo ? props.colorTwo : "0"};
    padding-left:20px;
    font-size:28px;
    font-weight:bold;
`;

const HeaderAccount = ({text, textTwo, fontSize, fontWeight, color, colorTwo, margin, hideDisplay }) => {
    return <HeaderContainer>
        <HeaderDiv fontSize={fontSize} fontWeight={fontWeight} color={color} margin={margin} hideDisplay={hideDisplay}> 
            {text}          
        </HeaderDiv>
        <HeaderPartTwo hideDisplay={hideDisplay} colorTwo={colorTwo}>
            {textTwo}
        </HeaderPartTwo>
    </HeaderContainer>
}


HeaderAccount.defaultProps = {
    text:"Default Header",
    textTwo:"TUTOR TALK",
    hideDisplay:false
}


export default HeaderAccount;