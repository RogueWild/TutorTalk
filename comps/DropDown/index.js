import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../Button';

import { Router, useRouter } from 'next/router'

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

const DropDown = ({ }) => {

    const router = useRouter();

    const handleEditProfile = async () => {
        router.push('../StudentProfileEdit');
    }
    const handleEditAccount = async () => {
        router.push('../accountSettings');
    }
    const handleLogout = async () => {
        let data = await network.logout();
        router.push('../');
    }

    return <DropDownBox>
        <DropDownContent>
            <div className="buttons">
                <Button text="Edit Profile" fontSize={"17px"} onClick={handleEditProfile} />
            </div>
            <div className="buttons">
                <Button text="Edit Account" fontSize={"17px"} onClick={handleEditAccount} />
            </div>
            <Link href="../"><div className="buttons">
                <Button text="Log Out" backgroundColor="#424242" hoverColor="#C4C4C4" fontSize={"17px"} onClick={handleLogout} />
            </div></Link>
        </DropDownContent>
    </DropDownBox>
}

DropDown.defaultProps = {

}

export default DropDown;