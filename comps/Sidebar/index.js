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

const Sidebar = ({ }) => {

    return <SidebarBox>
        <SidebarMenu text="Dashboard" source="/dash.png"/>
        <SidebarMenu text="Tutors" source="/cap.png"/>
        <SidebarMenu text="Chats" source="/chat.png"/>
        <SidebarMenu text="Profile" source="/user.png"/>
        <SidebarMenu text="Settings" source="/settings.png"/>
        <SidebarMenu text="Help" source="/question.png"/>
    </SidebarBox>
}

Sidebar.defaultProps = {

}

export default Sidebar;