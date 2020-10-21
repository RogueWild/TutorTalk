import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const ButtonBox = styled.div`
    max-width:110px;
    min-height:40px;
    border-radius: 5px;
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
    font-size:18px;
    color:white;
    cursor:pointer;
    user-select: none;
    border:${props => props.disabled ? "none" : "3px solid #002ED2"};
    background:${props => props.disabled ? "#B8B9BD" : "#3670EE"};
    transition: background 0.3s, border 0.3s;
`;


const Button = ({ text, }) => {
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setDisabled(disabled);
    }, [disabled])

    const variants = {
        hidden: { x: 0 },
        visible: { x: 100 }
    }

    return <motion.div
        variants={variants}
        transition={{ease:"easeOut", duration:3}}
        drag
        dragConstraints={{left:0, right:200, top:0, bottom:200}}
    >
        <ButtonBox disabled={disabled}
            onClick={() =>
                setDisabled(!disabled)}>
            {text}
        </ButtonBox>
    </motion.div>
}

Button.defaultProps = {
    text: "Button",
    disabled: false
}

export default Button;