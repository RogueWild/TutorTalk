import React, { useState, useEffect } from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import ProfilePhoto from '../comps/ProfilePhoto';
import Summary from '../comps/Summary';
import AboutBox from '../comps/About';
import Brief from '../comps/Brief'

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
                    <Brief image={true} src="/phone.png" width="498px" text="(123)444-9097" />
                    <Brief image={true} src="/message.png" text={"stellacheng@email.com"} color="#FFBF00" width="455px" TxtColor="#FFBF00" />
                </div>
                <div className="right-side">
                    <Summary image={true} story={false} name={"Stella Cheng"} subject={"Accounting, BCIT"} />
                    <div className="about-box">
                        <AboutBox color={0} text2={"About"} text={"I'm an accounting student in BCIT. I'm struggling with online courses, especially with my accounting classes :("} size={0} />
                    </div>
                </div>
            </div>
        </div>
    ))

    return <div>
        {comp}
    </div>
}