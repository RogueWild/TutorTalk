import React from 'react';
import styled, { css } from 'styled-components';

const InputBox = styled.input`
    width:${props => props.width ? props.width : ""};
    margin:${props => props.margin ? props.margin : "0"};
    padding: 16px 16px 16px 16px;
    border: none;
    border-radius:7px;
    background: #FBFBFB;
    font-size: 18px;
    ::-webkit-input-placeholder {
        color: #BDBDBD;
`;

const InputText = ({ placeholder, width, margin }) => {
    return <InputBox placeholder={placeholder} width={width} margin={margin}>
    </InputBox>
}


InputText.defaultProps = {
    placeholder: "Defaul Text"
}


export default InputText;