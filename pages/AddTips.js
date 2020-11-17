import React from 'react';
import HeaderAccount from '../comps/Header';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import InputText from '../comps/Input';
import Button from '../comps/Button';

export default function AddTipsPage() {
  return (
    <div>
      <LogoHeader />
      <Nav />
      <div className="TipsContent">
        <HeaderAccount />
        <br></br>
        <InputText />
      </div >
      <div className="Button">
      <Button />
      </div>
    </div>
  )
}