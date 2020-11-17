import React from 'react';
import Button from '../comps/Button';
import HeaderAccount from '../comps/Header';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import Tips from '../comps/Tips';

export default function TipsPage() {
  return (
    <div>
      <LogoHeader />
      <Nav />
      <div className="TipsContent">
      <br></br>
        <HeaderAccount />
      <div className="Button2">
        <Button />
      </div>
      <div className="Tips">
        <br></br>
        <Tips />
        <br></br>
        <Tips />
        <br></br>
        <Tips />
        <br></br>
        <Tips />
      </div>
    </div>
  </div>
  )
}