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
    color:#424242;
    .navtext:hover{
        font-weight:bold;
        transition:font-weight 0.25s;
    }
    .navtext{
        cursor:pointer;

        .hr, .hr1, .hr2, .hr3{
            position:absolute;
            top:55px;
            height:3.5px;
            background-color:#424242;
            border-radius:70px;
        }
        .hr, .hr1, .hr2, .hr3{
            display:none;
        }
        .hr{
            left:28.8%;
            min-width:9%;
   
        }
        .hr1{
            left:40%;
            min-width:8%;
    
        }
        .hr2{
            left:50.4%;
            min-width:10%;
    
        }
        .hr3{
            left:62.9%;
            min-width:8%;
        }
    }
   
`;

const NavBar = styled.div`
    ${props=>props.position === 0 && css`
    left:28.7%;
    `};
    ${props=>props.position === 1 && css`
    left:39.5%;
    `};
    ${props=>props.position === 2 && css`
    left:50.9%;
    `};
    ${props=>props.position === 3 && css`
    left:62.4%;
    `};
    background-color:#424242;
    min-width:9%;
    min-height:3.5px;
    border-radius:15px;
    position:absolute;
    top:8.9%;
`;

const Nav = ({position}) => {
    return <div>
        <NavBox>
            <NavContent>
                <div className="navtext" onClick={()=>{
                }}>Profile
                    <hr className="hr"></hr>
                </div>

                <div className="navtext" onClick={()=>{
                }}>Forum
                    <hr className="hr1"></hr>
                </div>

                <div className="navtext" >Tutor Tips
                    <hr className="hr2"></hr>
                </div>

                <div className="navtext" >Tutors
                    <hr className="hr3"></hr>
                </div>
                <NavBar position={position}></NavBar>
            </NavContent>
        </NavBox>
    </div>

}

Nav.defaultProps = {
    position:0
}

export default Nav;