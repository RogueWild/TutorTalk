import React from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import Tips from '../comps/Tips';

export default function TipsPage() {
  return (
    <div>
        <LogoHeader />
        <Nav />
        <br></br>
        <div className="Tips">
            <Tips />
            <br></br>
            <Tips />
            <br></br>
            <Tips />
            <br></br>
            <Tips />
        </div>
    </div>
  )
}