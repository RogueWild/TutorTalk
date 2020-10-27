import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

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
    background-color:${props => props.backgroundColor ? props.backgroundColor : "#FFBF00"};
    border:${props => props.border ? props.border : "none"};

    &:hover {
        background-color:${props => props.hoverColor ? props.hoverColor : "#FFCC33"};
    }
`;


const Button = ({ text, fontWeight, fontSize, backgroundColor, hoverColor, maxWidth, minHeight, border }) => {

    return <motion.div
    
    >
        <ButtonBox
            fontWeight={fontWeight} fontSize={fontSize} backgroundColor={backgroundColor} hoverColor={hoverColor} maxWidth={maxWidth} minHeight={minHeight} border={border}
        >
            {text}
        </ButtonBox>
    </motion.div>

}

Button.defaultProps = {
    text: "Text",
}

export default Button;