import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SidebarMenu from '../SidebarMenu';
import Link from 'next/link';

const SidebarBox = styled.div`
    max-width:360px;
    min-height:100%;
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
    bottom:320px;
    width:120px;
    `};
    ${props => props.unPos === 1 && css`
    bottom:255px;
    width:70px;
    `};
    ${props => props.unPos === 2 && css`
    bottom:195px;
    width:60px;
    `};
    ${props => props.unPos === 3 && css`
    bottom:135px;
    width:70px;
    `};
    ${props => props.unPos === 4 && css`
    bottom:70px;
    width:85px;
    `};
    ${props => props.unPos === 5 && css`
    bottom:10px;
    width:50px;
    `};
    background-color:#FFBF00;
    min-height:3.5px;
    border-radius:15px;
    position:relative;
    left:90px;
`;

const Sidebar = ({ }) => {
    const [unPos, setUnPos] = useState(0);

    useEffect(() => {
        setUnPos(unPos);
    }, [unPos])

    return <SidebarBox>
        <div onClick={() =>
            setUnPos(0)}>
            <SidebarMenu text="Dashboard" source="/dash.png" />
        </div>

        <Link href="/search">
            <div onClick={() =>
                setUnPos(1)}>
                <SidebarMenu text="Tutors" source="/cap.png" />
            </div>
        </Link>


        <div onClick={() =>
            setUnPos(2)}>
            <SidebarMenu text="Chats" source="/chat.png" />
        </div>

        <Link href="/StudentProfile">
            <div onClick={() =>
                setUnPos(3)}>
                <SidebarMenu text="Profile" source="/user.png" />
            </div>
        </Link>

        <Link href="/accountSettings">
            <div onClick={() =>
                setUnPos(4)}>
                <SidebarMenu text="Settings" source="/settings.png" />
            </div>
        </Link>


        <Underline unPos={unPos} />
    </SidebarBox>
}

Sidebar.defaultProps = {
    unPos: 0
}

export default Sidebar;