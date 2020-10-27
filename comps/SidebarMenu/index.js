import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const SidebarMenuBox = styled.div`
    display:flex;
    align-items:center;
    margin:15px 40px;
    cursor:pointer;
`;

const Icons = styled.img`
    padding-right:15px;
`;

const Menus = styled.div`
    padding-right:15px;
`;

const SidebarMenu = ({ source, text }) => {

    return <motion.div
        whileHover={{ x: 10}}
        whileTap={{ scale: 0.9, x: 0 }}
    >
        <SidebarMenuBox>
            <Icons src={source} />
            <Menus>
                {text}
            </Menus>
        </SidebarMenuBox>
    </motion.div>

}

SidebarMenu.defaultProps = {

}

export default SidebarMenu;