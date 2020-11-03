import React from 'react';
import styled, { css } from 'styled-components';

const HeaderDiv = styled.div`
    font-size:${props => props.fontSize ? props.fontSize : "28px"};
    font-weight:${props => props.fontWeight ? props.fontWeight : "bold"};
    margin:${props => props.margin ? props.margin : "0"};
    color:${props => props.color ? props.color : "0"};
`;


const HeaderAccount = ({text, fontSize, fontWeight, color, margin }) => {
    return <HeaderDiv fontSize={fontSize} fontWeight={fontWeight} color={color} margin={margin}> 
        {text}          
    </HeaderDiv>
}


HeaderAccount.defaultProps = {
    text:"Default Header"
}


export default HeaderAccount;