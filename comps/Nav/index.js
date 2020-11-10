import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

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
    ${props=>props.position === 0 && css`
    left:28.8%;
    `};
    ${props=>props.position === 1 && css`
    left:39.3%;
    `};
    ${props=>props.position === 2 && css`
    left:50.8%;
    `};
    ${props=>props.position === 3 && css`
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

    useEffect(()=>{
        setPosition(position);
    }, [position])

    return <NavBox>
            <NavContent>
                <div onClick={()=>
                    setPosition(0)}>
                    <FramerCont text="Profile"></FramerCont>
                </div>

                <div onClick={()=>
                    setPosition(1)}>
                    <FramerCont text="Forum"></FramerCont>
                </div>

                <div onClick={()=>
                    setPosition(2)}>
                    <FramerCont text="Tutor Tips"></FramerCont>
                </div>

                <div onClick={()=>
                    setPosition(3)}>
                    <FramerCont text="Tutors"></FramerCont>
                </div>

                <NavBar position={position}></NavBar>
            </NavContent>
        </NavBox>
}

Nav.defaultProps = {
    position:0
}

export default Nav;