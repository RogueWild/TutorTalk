import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../Button';

const DropDownBox = styled.div`
    background-color:#FFF;
    border: 0.25px solid #999;
    min-width:150px;
    max-width:150px;
    justify-content:center;
    align-items:center;
    padding:10px;
    border-radius:8px;
    box-shadow: 1.5px 1.5px 8px #9999;
`;

const DropDownContent = styled.div`
    .buttons {
        padding:5px;
    }
`;

const DropDown = ({}) => {
    
    return <DropDownBox>
        <DropDownContent>
            <div className="buttons">
                <Button text="Edit Profile"/>
            </div>
            <div className="buttons">
                <Button text="Log Out" backgroundColor="#424242" hoverColor="#C4C4C4"/>
            </div>
        </DropDownContent>
    </DropDownBox>
}

DropDown.defaultProps = {

}

export default DropDown;