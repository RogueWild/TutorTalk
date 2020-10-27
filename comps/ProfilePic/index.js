import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    width: 371px;
    height: 433px;
    background: ${props => props.highlight ? "#424242" : "#424242"};
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

const PicTxt = styled.h1`
    width: 211px;
    height: 49px;
    font-style: normal;
    font-weight: 600;
    font-size: ${props=>props.highlight ? "20px" : "40px"};
    line-height: 49px;
    text-align: center;
    color: #FFFFFF;
`;

const AddBtn = styled.div`
    width: 266px;
    height: 59px;
    background: ${props=>props.highlight ? "#FFBF00" : ""};
    border-radius: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProfilePic = ({}) => {
    const [highlight, sethighlight] = useState(false);
    const [text, setText] = useState("Profile Pic");
    return <Container onClick={()=> {
        sethighlight(true),text = "Add Photo";
    }} highlight = {highlight}>
    <AddBtn highlight = {highlight}>
        <PicTxt onClick={() => setText("Add Photo")} highlight = {highlight}>{text}</PicTxt>
    </AddBtn>
    </Container>
}

export default ProfilePic;
