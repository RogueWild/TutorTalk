import Link from 'next/link';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import ProfilePhoto from '../comps/ProfilePhoto';
import ContactInput from '../comps/ContactInput';
import SummaryInput from '../comps/SummaryInput';
import AboutBox from '../comps/About';
import Button from '../comps/Button';
import * as network from '../network';
import React, { useState, useEffect } from 'react';

import * as network from '../network';

export default function profilePage() {
    const [picture, setPicture] = useState("");
    const [subject, setSubject] = useState("");
    const [job, setJob] = useState("");
    const [diploma, setDiploma] = useState("");
    const [availabilities, setAvailabilities] = useState("");
    const [about, setAbout] = useState("");

    const handleTutorProfile = async () => {
        let data = await network.createTutorProfile(picture, subject, job, diploma, availabilities, about);
        console.log(data);
    }
    useEffect(() => {
        handleTutorProfile();
    }, [])

    return (
        <div>
            <LogoHeader displayIcon={true} />
            <Nav />
            <div className="profile-edit-content-box">
                <div className="profile-edit-left-side">
                    <ProfilePhoto onChange={(e) => {
                        setPicture(e.target.value)
                    }} />
                    <div className="contact-input"><ContactInput onChange={(e) => {
                        setAvailabilities(e.target.value)
                    }} /></div>
                </div>
                <div className="profile-edit-right-side">
                    <SummaryInput onChange={(e) => {
                        setSubject(e.target.value),
                            setJob(e.target.value),
                            setDiploma(e.target.value)
                    }} />
                    <div className="profile-edit-about-input">
                        <AboutBox color={0} text2={"About"} text={"Dummy text"} size={0} onChange={(e) => {
                            setAbout(e.target.value)
                        }} />
                    </div>
                </div>
            </div>
            <Link href="/profilePage"><div className="profile-edit-save-button">
                <Button text={"Save Changes"} fontSize="16px" onClick={handleTutorProfile} />
            </div></Link>
        </div>
    )
}