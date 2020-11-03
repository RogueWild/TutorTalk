import React from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import SearchBar from '../comps/SearchBar';
import ProfilePic from '../comps/ProfilePic';
import Summary from '../comps/Summary';
import Contact from '../comps/Contact';

export default function Home() {
  return (
    <div className="main">
        <LogoHeader className="LogoHeader"></LogoHeader>
        <Nav className="Nav"></Nav>
        <SearchBar className="SearchBar"></SearchBar>
        <ProfilePic className="ProfilePic"></ProfilePic>
        <Summary className="Summary"></Summary>
        <Contact className="Contact"></Contact>
    </div>
  )
}