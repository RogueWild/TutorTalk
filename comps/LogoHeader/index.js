import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import DropDown from '../DropDown';

const LogoHeadBox = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding: 0 35px;
   min-width:90%;
   min-height:70px;
   background-color:#FEFAEF;
   .logobox {
       display:flex;
       align-items:center;
       cursor:pointer;

       .logo-icon {
            max-height:50px;
            max-width:50px;
            padding-right:11px;
        }
        .logo-icon:hover {
            max-height:54px;
            max-width:54px;
            cursor:pointer;
            transition: max-height 0.2s, max-width 0.2s;
        }
    }

   .profile-icon {
    
        ${props=>props.displayIcon === false && css`
        display:none !important;
        `};

       cursor:pointer;
       min-width:40px;
       min-height:40px;
       background-color:#FCCA36;
       border-radius:50%;
       display:${props => props.profileDisplay ? props.profileDisplay : "block"};
           .profile-initial {
                color:#FFF;
                font-size:18pt;
                font-weight:bold;
                text-align:center;
                position:relative;
                top:6px;
                left:0;
           }
   }
   .profile-icon:hover {
        min-width:42px;
        min-height:42px;
        transition: min-width 0.2s, min-height 0.2s;
   }
   
`;

const LogoHeadDropDown = styled.div`
   .dropdown {
       position:absolute;
       left:86%;
       top:77px;
       max-width:150px;
       display: ${props=>props.expanded ? "none" : "block"};
   }
`;


const LogoHeader = ({text, profileDisplay, displayIcon}) => {
    const [expanded, setExpanded] = useState(true);
    return <div>
        <LogoHeadBox profileDisplay={profileDisplay}>
            <div className="logobox">
                <img className="logo-icon" src="logo.svg"/>
                <div className="apptitle">
                    <div><b>TUTOR</b></div>
                    <div><b>TALK</b></div>
                </div>
            </div>
            <div className="profile-icon" displayIcon={displayIcon} onClick={()=>{
                setExpanded(!expanded);
            }}>
                <div className="profile-initial">{text}</div>
            </div>
        </LogoHeadBox>
        <LogoHeadDropDown expanded = {expanded}>
        <div className ="dropdown">
                <DropDown />
        </div>
        </LogoHeadDropDown>
    </div>

}

LogoHeader.defaultProps = {
    text:"U",
    profileDisplay:"block",
    displayIcon:false
}

export default LogoHeader;