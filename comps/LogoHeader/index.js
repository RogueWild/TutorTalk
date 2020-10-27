import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

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

       .logo-icon {
        max-height:50px;
        max-width:50px;
        padding-right:11px;
        }
    }
   .profile-icon {
       cursor:pointer;
       .circle {
           min-width:40px;
           min-height:40px;
           background-color:#FCCA36;
           border-radius:50%;
           float:left;
           font-size:18pt;
           font-weight:bold;
           color:#FFF;
           text-align:center;
           .profile-initial {
               position:relative;
               top:6.4px;
               left:0.5px;
           }
       }
   }
   
`;


const LogoHeader = ({text}) => {
    return <div>
        <LogoHeadBox>
            <div className="logobox">
                <img className="logo-icon" src="logo.svg"/>
                <div className="apptitle">
                    <div>TUTOR</div>
                    <div>TALK</div>
                </div>
            </div>
            <div className="profile-icon">
                <div className="circle">
                    <div className="profile-initial">{text}</div>
                </div>
            </div>
        </LogoHeadBox>
    </div>

}

LogoHeader.defaultProps = {
    text:"U"
}

export default LogoHeader;