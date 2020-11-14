import Link from 'next/link';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import ProfilePhoto from '../comps/ProfilePhoto';
import ContactInput from '../comps/ContactInput';
import SummaryInput from '../comps/SummaryInput';
import AboutBox from '../comps/About';
import Button from '../comps/Button';

export default function profilePage(){
    return (
        <div>
        <LogoHeader displayIcon={true}/>
        <Nav />
        <div className="profile-edit-content-box">
            <div className="profile-edit-left-side">
                <ProfilePhoto />
                <div className="contact-input"><ContactInput /></div>
            </div>
            <div className="profile-edit-right-side">
                <SummaryInput />
                <div className="profile-edit-about-input">
                    <AboutBox color={0} text2={"About"} text={"I’m a Computer Science student at BCIT, and I’m passionate about helping others learn while I learn! I have a good understanding of interdisciplinary computer programming. Ask me anything and I’ll try to help you out. Email me or give me a call and leave a voice mail. I like to teach through Zoom; once you reach out and we seem like a good student/ tutor fit, I will set up a meeting for us on Zoom."} size={0} />
                </div>
            </div>
        </div>
        <div className="profile-edit-save-button">
            <Button text={"Save Changes"}/>
        </div>
        </div>
    )
}