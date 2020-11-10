import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import Settings from '../comps/Settings';
import Button from '../comps/Button';

export default function Home() {
    return (
        <div className="main">
            <LogoHeader className="LogoHeader"></LogoHeader>
            <Nav className="Nav"></Nav>
            <div className="Content">
                <Settings className="Settings" margin="0px 0px 30px 0px"></Settings>
                <Button text="Save Changes" minWidth="286px"></Button>
            </div>
        </div>
    )
}
