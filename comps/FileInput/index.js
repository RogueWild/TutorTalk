import React from 'react';
import styled, { css } from 'styled-components';

const FileInputBox = styled.input`
    width:${props => props.width ? props.width : ""};
    margin:${props => props.margin ? props.margin : "0"};
    padding: 16px 16px 16px 16px;
    border: none;
    border-radius:7px;
    background: #FBFBFB;
    font-size: 18px;
    ::-webkit-input-placeholder {
        color: #BDBDBD;
    }
`;


const FileInput = ({ placeholder, width, margin }) => {
    return <FileInputBox type="file" placeholder={placeholder} width={width} margin={margin}>
    </FileInputBox>
}


FileInput.defaultProps = {
    placeholder: "Default Text"
}


export default FileInput;