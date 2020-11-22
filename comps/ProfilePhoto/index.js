import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import FileInput from '../FileInput';

const ProfilePhotoCont = styled.div`
    ${props=> props.choosefile === false && css`
    background-color:#FFF;
    `};
    width:371px;
    min-height:433px;
    background-color:#424242;
    align-items:center;
    justify-content:center;
`;

const ProfilePhotoSelect = styled.input.attrs({
    type:'file',
})`
    background-color:#FCCA36;
    padding:15px 38px;
    border-radius:50px;
    font-size:14px;
    max-width:200px;
    cursor:pointer;
    position: relative;
    top:190px;
    left:50px;
`;

const ProfilePhotoImg = styled.img`
    ${props=> props.profileimg === false && css`
    display:none;
    `};
    max-width:371px;
    min-height:433px;
    position:relative;
    bottom:25px;
`;


const ProfilePhoto = ({profileimg, choosefile, src}) => {
    return <ProfilePhotoCont choosefile={choosefile}>
        <ProfilePhotoSelect>
        </ProfilePhotoSelect>
        <ProfilePhotoImg src={src} profileimg={profileimg}/>
    </ProfilePhotoCont>
}


ProfilePhoto.defaultProps = {
    profileimg:false,
    choosefile:true,
    src: "profilepic.jpg"
}

export default ProfilePhoto;