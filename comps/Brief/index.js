import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
    width: 500px;
    min-height: 50px;
    display: inline-flex;
    justify-content: left;
    align-items: left;
    margin-left: ${props=>props.marL ? props.marL : ""}
`;

const IconImg = styled.img`
    width: 32px;
    height: 32px;
    margin: 15px 0px;
`;

const TextData = styled.p`
    width: ${props=>props.width ? props.width : ""};
    min-height: 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #424242;
    margin-left: 10px;
    text-align: left;
    border: ${props=>props.focused ? "1px solid #424242" : ""};
    box-sizing: border-box;
    border-radius: 4px;
    color: ${props=>props.TxtColor ? props.TxtColor : "#424242"}
`;

const Brief = ({src,text,width,image,marL,TxtColor}) => {
    const [focused, setfocused] = useState(false)
    return <Container onClick={()=> {
        setfocused(true);
    }} marL={marL}>
    {image === false ? null : <IconImg src={src}></IconImg>
} <TextData focused={focused} width={width} TxtColor={TxtColor}>{text}</TextData>
</Container>
}

Brief.defaultProps = {
    width: "500px",
    src: "/briefcase.png",
    text: "Work at Web Development Company in Burnaby",
    image: false,
    marL: "",
    TxtColor:"#424242"
}


export default Brief;