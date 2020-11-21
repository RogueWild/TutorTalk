import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import InputLabel from '../comps/InputLabel';
import Button from '../comps/Button';
import HeaderAccount from '../comps/Header';
import * as network from '../network';
import Link from 'next/link';

export default function Home() {
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    const handleAddTip = async () => {
        // look here!! pls name the inputs for useState as these values in the argument
        // the error will be gone til you add them
        let data = await network.createTip(subject, content);
        console.log(data);
      }
    
      useEffect(() => {
        handleAddTip();
      }, [])

    return (
        <div className="addtips_cont">
            <LogoHeader displayIcon={true}></LogoHeader>
            <Nav />
            <div className="addtips_section">
                <div className="addtips_header">
                <HeaderAccount text = "Friendly Advice from Tutors on How to Succeed"/>
                </div>
                <InputLabel text ="Subject" placeholder ="Enter Subject Name"fontmargin="0px 0px 30px 0px"
                onChange ={(e)=> {
                    setSubject(e.target.value)
                }}/>
                <InputLabel text ="Tip" placeholder ="Enter Tip"fontmargin="0px 0px 30px 0px" 
                  onChange ={(e)=> {
                    setContent(e.target.value)
                }}/>
                <Link href="/tips"><div className="addtips_save">
                <Button text="Add Tip" fontSize="16px" minWidth="286px" onClick={handleAddTip}/>
                </div></Link>
            </div>
        </div>
    )
}
