import React, { useState, useEffect } from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import ProfilePhoto from '../comps/ProfilePhoto';
import Summary from '../comps/Summary';
import AboutBox from '../comps/About';

import * as network from '../network';

export default function StudentProfilePage() {
    const [profiles, setProfiles] = useState([])

    const HandleProfile = async () => {
        let res = await network.viewStudentProfile();
        console.log(res);
        setProfiles([res.studentProfile]);
    }
    useEffect(() => {
        HandleProfile();
    }, [])


    const comp = profiles.map(profile => (
        <div>
            <LogoHeader displayIcon={true} />
            <Nav />
            <div className="content-box">
                <div className="left-side">
                    <ProfilePhoto profileimg={true} src="profilepic2.png" />
                </div>
                <div className="right-side">
                    <Summary image={true} story={false} name={profile.name} subject={profile.program} />
                    <div className="about-box">
                        <AboutBox color={0} text2={"About"} text={profile.about} size={0} />
                    </div>
                </div>
            </div>
        </div>
    ))

    return <div>
        {comp}
    </div>
}