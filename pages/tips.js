import React, { useState, useEffect } from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import Tips from '../comps/Tips';
import Button from '../comps/Button';
import HeaderAccount from '../comps/Header';
import * as network from '../network';

import { useRouter } from 'next/router'

export default function TipsPage() {
  const router = useRouter();

  useEffect(() => {
    displayTips();
  }, [])

  const handleToAddTip = async () => {
    let data = await network.checkRole();
    console.log(data);
    if (data.role === "tutor") {
      router.push('/addTips');
    } else {
      alert("Sorry, only tutors can share tips.")
    }
  }

  const displayTips = async () => {
    let tips = await network.tips();
    console.log(tips);
  }

  return (
    <div className="tips_main">
      <LogoHeader displayIcon={true} />
      <Nav />
      <div className="tips_cont">
        <div className="tips_header">
          <HeaderAccount text="Friendly Advice from Tutors on How to Succeed" />
        </div>
        <div className="tips_add_button">
          <Button text="Add Tip" onClick={handleToAddTip} />
        </div>
        <div className="tips_content">
          <Tips />
        </div>
      </div>
    </div>
  )
}