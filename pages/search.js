import React from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import SearchBar from '../comps/SearchBar';
import ProfilePic from '../comps/ProfilePic';
import Summary from '../comps/Summary';
import Contact from '../comps/Contact';

export default function Home() {
  return (
    <div className="search">
      <LogoHeader className="LogoHeader" displayIcon={true}></LogoHeader>
      <Nav className="Nav"></Nav>
      <SearchBar className="SearchBar" marginN="40px 0px 100px 50px"></SearchBar>
      
        <div className="search_content">
          <div className="search_left">
            <div className="ProfilePic">
              <ProfilePic></ProfilePic>
            </div>
            <div className="Summary">
              <Summary></Summary>
            </div>
          </div>
          <div className="search_right">
            <Contact className="Contact"></Contact>
          </div>
        </div>

        <div className="search_content">
          <div className="search_left">
            <div className="ProfilePic">
              <ProfilePic></ProfilePic>
            </div>
            <div className="Summary">
              <Summary></Summary>
            </div>
          </div>
          <div className="search_right">
            <Contact className="Contact"></Contact>
          </div>
        </div>

        <div className="search_content">
          <div className="search_left">
            <div className="ProfilePic">
              <ProfilePic></ProfilePic>
            </div>
            <div className="Summary">
              <Summary></Summary>
            </div>
          </div>
          <div className="search_right">
            <Contact className="Contact"></Contact>
          </div>
        </div>
    </div>
  )
}