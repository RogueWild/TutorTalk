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
    const [about, setAbout] = useState("");
    const HandleProfile = async () => {
        var resp = await network.viewTutorProfile;
        // below line is henry's example
        setAbout(resp.data.about);
    }

    // useEffect(() => {
    //     HandleProfile();
    // }, [])

    return (
        <div>
            {/* onClick={HandleProfile} */}
            <LogoHeader displayIcon={true} />
            <Nav />
            <div className="content-box">
                <div className="left-side">
                    <ProfilePhoto profileimg={true} />
                    <div className="contact"><Contact
                        timeAndZoom="Mondays – 13:30-17:30 Thursdays – 9:00-12:00 Zoom Link: www.zoomlink.com"
                    /></div>
                </div>
                <div className="right-side">
                    <Summary
                        work="Works at Web Development Company in Burnaby"
                        education="Diploma of Computer Science Studying for Bachelor’s of Computer Science"
                    />
                    <div className="about-box">
                        {/* text={about} */}
                        <AboutBox color={0} text2={"About"} text={"some dummy data"} size={0} />
                    </div>
                </div>
            </div>
        </div>
    )
}