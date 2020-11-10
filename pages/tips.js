import React from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import Tips from '../comps/Tips';

export default function TipsPage() {
  return (
    <div>
        <LogoHeader />
        <Nav />
        <div className="Tips">
            <Tips />
        </div>
    </div>
  )
}