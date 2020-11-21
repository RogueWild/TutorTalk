import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import {useRouter} from 'next/router';

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
    ${props=>props.position === "/profilePage" && css`
    left:28.8%;
    `};
    ${props=>props.position === 0 && css`
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
    const [position, setPosition] = useState(false);

    const router = useRouter();
    console.log(router);

    useEffect(()=> {
        setPosition(router.pathname)
    },[router.pathname])

    // useEffect(()=>{
    //     setPosition(position);
    // }, [position])

    return <NavBox>
            <NavContent>
                <Link href="../profilePage"><div onClick={()=>
                    setPosition()}>
                    <FramerCont text="Profile"></FramerCont>
                </div></Link>

                <div onClick={()=>
                    setPosition(0)}>
                    <FramerCont text="Forum"></FramerCont>
                </div>

                <Link href="../tips"><div onClick={()=>
                    setPosition(2)}>
                    <FramerCont text="Tutor Tips"></FramerCont>
                </div></Link>

                <Link href="../search"><div onClick={()=>
                    setPosition()}>
                    <FramerCont text="Tutors"></FramerCont>
                </div></Link>

                <NavBar position={position}></NavBar>
            </NavContent>
        </NavBox>
}

Nav.defaultProps = {
    position:0
}

export default Nav;