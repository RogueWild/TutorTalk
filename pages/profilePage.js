import Link from 'next/link';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import ProfilePic from '../comps/ProfilePic';
import Summary from '../comps/Summary';
import Contact from '../comps/Contact';
import AboutBox from '../comps/About';

export default function profilePage(){
    return (
        <div>
        <LogoHeader />
        <Nav />
        <div className="content-box">
            <div className="left-side">
                <ProfilePic />
                <div className="contact"><Contact /></div>
            </div>
            <div className="right-side">
                <Summary />
                <div className="about-box">
                    <AboutBox color={0} text2={"About"} text={"I’m a Computer Science student at BCIT, and I’m passionate about helping others learn while I learn! I have a good understanding of interdisciplinary computer programming. Ask me anything and I’ll try to help you out. Email me or give me a call and leave a voice mail. I like to teach through Zoom; once you reach out and we seem like a good student/ tutor fit, I will set up a meeting for us on Zoom."} size={0} />
                </div>
            </div>
        </div>
        </div>
    )
}