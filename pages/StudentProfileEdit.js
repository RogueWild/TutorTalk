import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import ProfilePhoto from '../comps/ProfilePhoto';
import ContactInputStudent from '../comps/ContactInputStudent';
import SummaryInput from '../comps/SummaryInput';
import AboutBox from '../comps/About';
import Button from '../comps/Button';
import * as network from '../network';
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router'
import Axios from 'axios';

export default function profilePage() {
    const [picture, setPicture] = useState("");
    const [program, setProgram] = useState("");
    const [about, setAbout] = useState("");

    const router = useRouter();

    const handleStudentProfile = async () => {
        let data = await network.createStudentProfile(picture, program, about);
        console.log(data);
        console.log(picture, program, about)
        router.push('/StudentProfile');
    }

    return (
        <div>
            <LogoHeader displayIcon={true} />
            <Nav />
            {/* <form encType="multipart/form-data">
                <input name="picture" type="file" onChange={(e) => setPicture(e.target.value)} />
                <button type="submit" onClick={(e) => {
                    e.preventDefault()
                    const photoData = new FormData();
                    photoData.append("picture", picture.files);
                    Axios.post('https://tutor-talk.herokuapp.com/profile/student/create', photoData, {
                        headers: {
                            "content-type": "multipart/form-data"
                        }
                    })
                }} />
            </form> */}
            <div className="profile-edit-content-box">
                <div className="profile-edit-left-side">
                    <ProfilePhoto
                        onChange={(e) => {
                            setPicture(e.target.value)
                        }}
                    />
                    <div className="contact-input">
                        <ContactInputStudent />
                    </div>
                </div>

                <div className="profile-edit-right-side">
                    <SummaryInput
                        onChange={(e) => {
                            setProgram(e.target.value)
                        }} story={false}
                    />
                    <div className="profile-edit-about-input">
                        <AboutBox color={0} text2={"About"} size={0}
                            onChange={(e) => {
                                setAbout(e.target.value)
                            }} input={true}
                        />
                    </div>
                </div>
            </div>
            <div className="profile-edit-save-button">
                <Button text={"Save Changes"} fontSize="16px" onClick={handleStudentProfile} />
            </div>
        </div>
    )
}