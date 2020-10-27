import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
    margin: 5px 0px;
    width: 500px;
    min-height: 50px;
    display: inline-flex;
    justify-content: left;
    align-items: left;
    margin-left: ${props=>props.marL ? props.marL : ""}
`;
const InputBox = styled.input`
    margin: 5px 0px;
    width: 500px;
    height: 30px;
    margin-left: ${props=>props.marL ? props.marL : ""}
`;

const IconImg = styled.img`
    margin: 0px 10px 0px 0px;
    width: 32px;
    height: 32px;
`;

const BriefInput = ({src,text,width,image,marL,TxtColor}) => {
    return <Container> {image === false ? null : <IconImg src={src}></IconImg>}
    <InputBox onClick={()=> {
        setfocused(true);
    }} marL={marL}>
</InputBox>
</Container>
}


BriefInput.defaultProps = {
    width: "500px",
    src: "/briefcase.png",
    text: "Work at Web Development Company in Burnaby",
    image: false,
    marL: "",
    TxtColor:"#424242"
}


export default BriefInput;