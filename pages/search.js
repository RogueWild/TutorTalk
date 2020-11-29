import React, { useState, useEffect } from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import SearchBar from '../comps/SearchBar';
import ProfilePic from '../comps/ProfilePic';
import ProfilePhoto from '../comps/ProfilePhoto';
import Summary from '../comps/Summary';
import Contact from '../comps/Contact';
import * as network from '../network';
import Link from 'next/link';

export default function Search() {
  // const [subject, setSubject] = useState("");

  // const handleSearch = async () => {
  //   // look here!! pls name the inputs for useState as these values in the argument
  //   // the error will be gone til you add them
  //   let data = await network.searchTutors(subject);
  //   console.log(data);
  // }
  // useEffect(() => {
  //   handleSearch();
  // }, [])

  return (
    <div className="search">
      <LogoHeader className="LogoHeader" displayIcon={true}></LogoHeader>
      <Nav className="Nav"></Nav>
      <SearchBar className="SearchBar" marginN="40px 0px 100px 50px"></SearchBar>

      <div className="search_content">
        <div className="search_left">
          <Link href="/profilePage">
          <div className="ProfilePic">
            <ProfilePhoto profileimg={true} choosefile={false}/>
          </div></Link>
          <div className="Summary">
            <Summary />
          </div>
        </div>
        <div className="search_right">
          <Contact className="Contact"></Contact>
        </div>
      </div>

      <div className="search_content">
        <div className="search_left">
          <Link href="/profilePage">
          <div className="ProfilePic">
          <ProfilePhoto profileimg={true} choosefile={false}/>
          </div></ Link>
          <div className="Summary">
            <Summary />
          </div>
        </div>
        <div className="search_right">
          <Contact className="Contact"></Contact>
        </div>
      </div>

      <div className="search_content">
        <div className="search_left">
          <Link href="/profilePage">
          <div className="ProfilePic">
          <ProfilePhoto profileimg={true} choosefile={false}/>
          </div></Link>
          <div className="Summary">
            <Summary />
          </div>
        </div>
        <div className="search_right">
          <Contact className="Contact"></Contact>
        </div>
      </div>
    </div>
  )
}