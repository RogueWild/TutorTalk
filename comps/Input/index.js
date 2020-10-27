import React from 'react';
import styled, { css } from 'styled-components';

const InputBox = styled.form`
width: 459px;
height: 56px;
${props=>props.color === 0 && css`
color:#BDBDBD;   `};
${props=>props.size === 0 && css`
size:25px;   `};
background-color: #FBFBFB;
box-shadow: 1px 1px #BDBDBD inset;
border-radius: 7px;
`;

const TextBox = styled.div`
position: absolute;
margin-top: 20px;
margin-left: 15px;
`

const InputText = ({text, color, size}) => {
    return <InputBox color={color} size={size}>           
            <TextBox> {text} </TextBox>
    </InputBox>
}


InputText.defaultProps = {
    text: "email",
    color: "#BDBDBD",
    size: "25px",
}


export default InputText;