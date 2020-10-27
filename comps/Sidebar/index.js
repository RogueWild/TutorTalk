import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SidebarMenu from '../SidebarMenu';

const SidebarBox = styled.div`
    max-width:360px;
    height:100vh;
    background-color:#FEFBF3;
    display:flex;
    flex-direction:column;
    color:#424242;
    font-weight:bold;
    font-size:24px;
    padding-top:20px;
`;

const Underline = styled.div`
    ${props => props.unPos === 0 && css`
    top:90px;
    min-width:120px;
    `};
    ${props => props.unPos === 1 && css`
    top:150px;
    min-width:70px;
    `};
    ${props => props.unPos === 2 && css`
    top:210px;
    min-width:60px;
    `};
    ${props => props.unPos === 3 && css`
    top:270px;
    min-width:70px;
    `};
    ${props => props.unPos === 4 && css`
    top:335px;
    min-width:85px;
    `};
    ${props => props.unPos === 5 && css`
    top:395px;
    min-width:50px;
    `};
    background-color:#FFBF00;
    min-height:3.5px;
    border-radius:15px;
    position:absolute;
    left:103px;
`;

const Sidebar = ({ }) => {
    const [unPos, setUnPos] = useState(false);

    useEffect(() => {
        setUnPos(unPos);
    }, [unPos])

    return <SidebarBox>
        <div onClick={() =>
            setUnPos(0)}>
            <SidebarMenu text="Dashboard" source="/dash.png" />
        </div>

        <div onClick={() =>
            setUnPos(1)}>
            <SidebarMenu text="Tutors" source="/cap.png" />
        </div>
        <div onClick={() =>
            setUnPos(2)}>
            <SidebarMenu text="Chats" source="/chat.png" />
        </div>
        <div onClick={() =>
            setUnPos(3)}>
            <SidebarMenu text="Profile" source="/user.png" />
        </div>
        <div onClick={() =>
            setUnPos(4)}>
            <SidebarMenu text="Settings" source="/settings.png" />
        </div>
        <div onClick={() =>
            setUnPos(5)}>
            <SidebarMenu text="Help" source="/question.png" />
        </div>
            
        <Underline unPos={unPos} />
    </SidebarBox>
}

Sidebar.defaultProps = {
    unPos: 0
}

export default Sidebar;