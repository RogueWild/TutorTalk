import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import InputText from '../Input';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
max-width: 459px;
min-height: 95px;
`;

const InputT = styled.p`
font-style: normal;
font-weight: 600;
font-size: 23px;
line-height: 30px;
min-width:800px;
color: #424242;
margin: ${props => props.margin ? props.margin : ""};
`;

const InputLabel = ({text, margin, placeholder}) => {
    return <Container>
        <InputT margin={margin}>{text}</InputT>
            <InputText placeholder={placeholder} margin="0px 0px 20px 0px" width="459px"/>
    </Container>
}

InputLabel.defaultProps = {
    text: "Email",
    margin: "40px 0px 0px 0px",
    placeholder: "sarahL@gmail.com"
}

export default InputLabel;