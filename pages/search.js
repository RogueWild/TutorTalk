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
        </div>
        <div className="tutor">
          <Link href="/profilePage">
            <div className="ProfilePic">
              <ProfilePhoto profileimg={true} choosefile={false} />
            </div>
          </Link>
          <div className="info">
            <div className="Summary">
              <Summary
                work="Works at Web Development Company in Burnaby"
                education="Diploma of Computer Science Studying for Bachelor’s of Computer Science"
              />
            </div>
            <div className="search_right">
              <Contact
                className="Contact"
                timeAndZoom="Mondays – 13:30-17:30 Thursdays – 9:00-12:00 Zoom Link: www.zoomlink.com"
              />
            </div>
          </div>
        </div>
        <div className="tutor">
          <Link href="/profilePage">
            <div className="ProfilePic">
              <ProfilePhoto profileimg={true} choosefile={false} src="/teacher1.jpg" />
            </div>
          </Link>
          <div className="info">
            <div className="Summary">
              <Summary
                name="Alina Smith"
                subject="Peer Tutor, Graphic Designer, BCIT"
                work="Works at Dribbble as a Freelancer"
                education="Diploma of Digital Design and Arts"
              />
            </div>
            <div className="search_right">
              <Contact
                className="Contact"
                timeAndZoom="Mondays – 13:30-17:30 Thursdays – 9:00-12:00 Zoom Link: www.zoomlink.com"
              />
            </div>
          </div>
        </div>
        <div className="tutor">
          <Link href="/profilePage">
            <div className="ProfilePic">
              <ProfilePhoto profileimg={true} choosefile={false} src="/teacher2.jpg" />
            </div>
          </Link>
          <div className="info">
            <div className="Summary">
              <Summary
                name="Adam Davids"
                subject="Certified Tutor, Web Developer , BCIT"
                work="Works at BCIT as a Professor"
                education="Master of Science"
              />
            </div>
            <div className="search_right">
              <Contact
                text="text"
                className="Contact"
                timeAndZoom="Mondays – 13:30-17:30 Thursdays – 9:00-12:00 Zoom Link: www.zoomlink.com"
              />
            </div>
          </div>
        </div>
      </div>
      {/* })} */}
    </div>
  )
}