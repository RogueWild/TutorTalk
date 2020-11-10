import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import HeaderAccount from '../Header';
import InputLabel from '../InputLabel';
import Button from '../Button';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: ${props => props.margin ? props.margin : ""};
`;


const Settings  = ({margin}) => {
    return <Container margin={margin}>
        <HeaderAccount text="Account Settings" fontSize="48px" margin="0px" />
        <InputLabel text="Email" margin="40px 0px 0px 0px"></InputLabel>
        <InputLabel text="Password" margin="0px 0px 0px 0px" placeholder="................"></InputLabel>
        <InputLabel text="First Name" margin="0px 0px 0px 0px" placeholder="Sarah"></InputLabel>
        <InputLabel text="Last Name" margin="0px 0px 0px 0px" placeholder="Lee"></InputLabel>
        <InputLabel text="Phone Number" margin="0px 0px 0px 0px" placeholder="604-284-0834"></InputLabel>
    </Container>
}

Settings.defaultProps = {
   margin: ""
}

export default Settings;