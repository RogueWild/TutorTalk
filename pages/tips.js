import React from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import Tips from '../comps/Tips';

export default function TipsPage() {

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
    <div>
      <LogoHeader />
      <Nav />
      <div className="Tips">
        <Tips />
      </div>
    </div>
  )
}