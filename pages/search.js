import React, { useState, useEffect } from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import SearchBar from '../comps/SearchBar';
// import ProfilePic from '../comps/ProfilePic';
import ProfilePhoto from '../comps/ProfilePhoto';
import Summary from '../comps/Summary';
import Contact from '../comps/Contact';
import * as network from '../network';
import Link from 'next/link';

export default function Search() {
  const [tutors, setTutors] = useState([]);

  const handleSearch = async (subject) => {
    let res = await network.searchTutors(subject);
    console.log(res);
    setTutors([...res.tutors]);
  }

  return (
    <div className="search">
      <LogoHeader className="LogoHeader" displayIcon={true}></LogoHeader>
      <Nav className="Nav"></Nav>
      <SearchBar className="SearchBar" marginN="40px 0px 100px 50px" onClick={handleSearch}></SearchBar>

      {/* display each search result of tutors */}
      {/* TO-DO: display msg when no tutors found!!!!!! */}
      {/* {tutors.map((tutor, i) => { */}
      <div className="search_content">
        <div className="search_left">
          <Link href="/profilePage">
            <div className="ProfilePic">
              {/* <ProfilePhoto profileimg={true} choosefile={false} /> */}
            </div>
          </Link>
          <div className="Summary">
            <Summary />
          </div>
        </div>
        <div className="search_right">
          <Contact className="Contact"></Contact>
        </div>
      </div>
      {/* })} */}
    </div>
  )
}