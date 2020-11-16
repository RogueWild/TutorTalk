import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
    margin: 5px 0px;
    width: ${props=>props.width ? props.width : ""};
    min-height: 50px;
    display: inline-flex;
    justify-content: left;
    align-items: left;
`;

const IconImg = styled.img`
    margin: 0px 10px 0px 0px;
    width: 32px;
    height: 32px;
`;

const TextData = styled.p`
    min-height: 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #424242;
    margin-left: ${props=>props.marL ? props.marL : ""};
    text-align: left;
`;

const Brief = ({src,text,image,width,marL}) => {
    return <Container width={width}>
    {image === false ? null : <IconImg src={src}></IconImg>
} <TextData marL = {marL}>{text}</TextData>
</Container>
}

Brief.defaultProps = {
    src: "/briefcase.png",
    text: "Work at Web Development Company in Burnaby",
    image: false,
    width: "",
    marL: ""
}


export default Brief;