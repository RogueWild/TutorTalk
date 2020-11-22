import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import ProfilePhoto from '../comps/ProfilePhoto';
import Summary from '../comps/Summary';
import Contact from '../comps/Contact';
import AboutBox from '../comps/About';

import * as network from '../network';

export default function profilePage() {

    // Henry's example
    const [about, setAbout] = useState("")
    const HandleProfile = async () => {
        var resp = await network.viewTutorProfile;
        // below line is henry's example
        setAbout(resp.data.about)
    }

    useEffect(() => {
        HandleProfile();
    }, [])

    return (
        <div>
            {/* onClick={HandleProfile} */}
            <LogoHeader displayIcon={true} />
            <Nav />
            <div className="content-box">
                <div className="left-side">
                    <ProfilePhoto profileimg={true} src="profilepic2.png"/>
                    <div className="contact"><Contact /></div>
                </div>
                <div className="right-side">
                    <Summary HeadTxt="Chris Young" SubTxt="Student, Architecture, BCIT" image={true} story={false}/>
                    <div className="about-box">
                        {/* text={about} */}
                        <AboutBox color={0} text2={"About"} text={"I’m an Architecture student at BCIT, and I’m struggling with some of my classes. Looking forwad to learning together with my fellow tutor-mates on here. "} size={0} />
                    </div>
                </div>
            </div>
        </div>
    )
}