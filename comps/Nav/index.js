import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import {Router, useRouter} from 'next/router';

const NavBox = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   min-width:100%;
   min-height:50px;
   background-color:#FCCA36;
`;

const NavContent = styled.div`
    display:flex;
    justify-content:space-around;
    min-width:45%;
`;

const NavBar = styled.div`
    ${props=>props.position === "/StudentProfile" && css`
    left:28.8%;
    `};
    ${props=>props.position === "/forumStudent" && css`
    left:39.3%;
    `};
    ${props=>props.position === "/tips" && css`
    left:50.8%;
    `};
    ${props=>props.position === "/search" && css`
    left:62.5%;
    `};
    background-color:#424242;
    min-width:9%;
    min-height:3.5px;
    border-radius:15px;
    position:absolute;
    top:118px;
    transition: left 0.2s, min-width 0.5s;

    @media (max-width:520px) {
        min-width:0px;
    }
`;

const NavMenu = styled.div`
    cursor:pointer;
    color:#424242;
    font-weight:bold; 
`;

export const FramerCont = ({text}) => {
    return <motion.div whileHover={{scale:1.1}}>
        <NavMenu>
            {text}
        </NavMenu>
    </motion.div>
}

const Nav = ({}) => {
    const [position, setPosition] = useState("");

    const router = useRouter();

    const handleProfile = async () => {
        router.push('../StudentProfile');
    }
    const handleForum = async () => {
        router.push('/forumStudent');
    }
    const handleTutorTips = async () => {
        router.push('/tips');
    }
    const handleTutors = async () => {
        router.push('/search');
    }


    useEffect(()=> {
        setPosition(router.pathname)
    },[router.pathname])

    return <NavBox>
            <NavContent>
                <div onClick={()=>
                    setPosition(), handleProfile}>
                    <FramerCont text="Profile"></FramerCont>
                </div>

                <div onClick={()=>
                    setPosition(), handleForum}>
                    <FramerCont text="Forum"></FramerCont>
                </div>

                <div onClick={()=>
                    setPosition(), handleTutorTips}>
                    <FramerCont text="Tutor Tips"></FramerCont>
                </div>

                <div onClick={()=>
                    setPosition(), handleTutors}>
                    <FramerCont text="Tutors"></FramerCont>
                </div>

                <NavBar position={position}></NavBar>
            </NavContent>
        </NavBox>
}

Nav.defaultProps = {
    position:"/StudentProfile"
}

export default Nav;