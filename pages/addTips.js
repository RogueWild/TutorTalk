import React, { useState, useEffect } from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import InputLabel from '../comps/InputLabel';
import Button from '../comps/Button';
import HeaderAccount from '../comps/Header';
import * as network from '../network';
import { useRouter } from 'next/router'

export default function Home() {
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    const router = useRouter();

    const handleAddTip = async () => {
        let data = await network.createTip(subject, content);
        console.log(data);
        router.push('/tips');
    }

    return (
        <div className="addtips_cont">
            <LogoHeader displayIcon={true}></LogoHeader>
            <Nav />
            <div className="addtips_section">
                <div className="addtips_header">
                    <HeaderAccount text="Friendly Advice from Tutors on How to Succeed" />
                </div>
                <InputLabel text="Subject" placeholder="Enter Subject Name" fontmargin="0px 0px 30px 0px"
                    onChange={(e) => {
                        setSubject(e.target.value)
                    }}
                />
                <InputLabel text="Tip" placeholder="Enter Tip" fontmargin="0px 0px 30px 0px"
                    onChange={(e) => {
                        setContent(e.target.value)
                    }} />
                <div className="addtips_save">
                    <Button text="Add Tip" fontSize="16px" minWidth="286px" onClick={handleAddTip} />
                </div>
            </div>
        </div>
    )
}
