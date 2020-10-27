import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const TipsBox = styled.div`
    display:flex;
    flex-direction:column;
    max-width:70%;
    background-color:#FFF3D3;
    border-radius:5px;
    padding:20px;
    .tipstutor{
        font-size:14pt;
        font-weight:bold;
        cursor:pointer;
    }
    .tiptextbox{
        background-color:#FFF;
        padding:18px;
        margin:15px 0 5px 0;
        border-radius:5px;
    }
    .dots{
        text-align:right;
        padding-right:15px;
        cursor:pointer;
    }
`;

const Tips = ({tutorname, tutorstat, tiptext}) => {
    return <TipsBox>
        <div className="tipstitle">
            <div className="tipstutor">{tutorname}</div>
            <div className="tutorstat">{tutorstat}</div>
        </div>
        <div className="tiptextbox">
            <div className="tiptext">{tiptext}</div>
        </div>
        <div className="dots"><b>. . .</b></div>
    </TipsBox>

}

Tips.defaultProps = {
    tutorname:"Tutor's Name",
    tutorstat:"Tutor Type - Course Name",
    tiptext:"Tips from the tutor go here"
}

export default Tips;