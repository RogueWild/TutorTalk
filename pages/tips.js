import React, { useState, useEffect } from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import Tips from '../comps/Tips';
import Button from '../comps/Button';
import HeaderAccount from '../comps/Header';
import Link from 'next/link';
import * as network from '../network';

export default function TipsPage() {

  const handleAddTip = async () => {
    // look here!! pls name the inputs for useState as these values in the argument
    // the error will be gone til you add them
    let data = await network.createTip(subject, content);
    console.log(data);
  }

  // useEffect(() => {
  //   handleAddTip();
  // }, [])

  return (
    <div className="tips_main">
      <LogoHeader displayIcon={true} />
      <Nav />
      <div className="tips_cont">
        <div className="tips_header">
          <HeaderAccount text="Friendly Advice from Tutors on How to Succeed"/>
        </div>
        <Link href="/addTips"><div className="tips_add_button">
          <Button text="Add Tip"/>
        </div></Link>
        <div className="tips_content">
          <Tips/>
        </div>
        <div className="tips_content">
          <Tips/>
        </div>
        <div className="tips_content">
          <Tips/>
        </div>
      </div>
    </div>
  )
}