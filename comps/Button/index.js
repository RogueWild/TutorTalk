import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const ButtonBox = styled.div`
    max-width:${props => props.maxWidth ? props.maxWidth : "144px"};
    min-height:${props => props.minHeight ? props.minHeight : "42px"};
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    border-radius: 50px;
    color:white;
    font-weight:${props => props.fontWeight ? props.fontWeight : "normal"};
    font-size:${props => props.fontSize ? props.fontSize : "20px"};
    background:${props => props.backgroundColor ? props.backgroundColor : "#FFBF00"};
    border:${props => props.border ? props.border : "none"}
`;


const Button = ({ text, fontWeight, fontSize, backgroundColor, maxWidth, minHeight, border  }) => {

    return <ButtonBox
    fontWeight={fontWeight} fontSize={fontSize} backgroundColor={backgroundColor} maxWidth={maxWidth} minHeight={minHeight} border={border}
    >
            {text}
        </ButtonBox>
}

Button.defaultProps = {
    text:"Text",
}

export default Button;