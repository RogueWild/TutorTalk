import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TipsBox = styled.div`
    display:flex;
    flex-direction:column;
    min-width:70%;
    background-color:#FFF3D3;
    border-radius:5px;
    padding:20px;
    margin-bottom:35px;

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

const TutorName = styled.div`
    font-size:14pt;
    font-weight:bold;
    cursor:pointer;
`;

const TutorInfo = styled.div`
    font-size:12pt;
    cursor:pointer;
`;

export const FramerCont = ({ tutorname, tutorinfo }) => {
    return <motion.div whileHover={{ x:10 }}>
        <TutorName>
            {tutorname}
        </TutorName>
        <TutorInfo>
            {tutorinfo}
        </TutorInfo>
    </motion.div>
}

const Tips = ({ tutorname, tutorsubject, tipcontent }) => {
    return <TipsBox>
        <div className="tipstitle">
            <FramerCont
                tutorname={tutorname} tutorinfo={tutorsubject}>
            </FramerCont>
        </div>
        <div className="tiptextbox">
            <div className="tiptext">{tipcontent}</div>
        </div>
    </TipsBox>

}

Tips.defaultProps = {
    tutorname: "Tutor's Name",
    tutorinfo: "Subject Name",
    tiptext: "Tips from the tutor go here",
}

export default Tips;