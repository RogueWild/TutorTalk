import React from 'react';
import AboutBox from '../comps/About';

export default {
    title: 'About/Box',
    component: AboutBox,
};

export const BasicAboutBox = () => <AboutBox color={0} text={"I’m a Computer Science student at BCIT, and I’m passionate about helping others learn while I learn! I have a good understanding of interdisciplinary computer programming. Ask me anything and I’ll try to help you out. Email me or give me a call and leave a voice mail. I like to teach through Zoom; once you reach out and we seem like a good student/ tutor fit, I will set up a meeting for us on Zoom."} size={0}/>;
export const BasicTipsBox = () => <AboutBox color={0} text={"Make sure you take notes during class and complete your homework as soon as possible once it has been assigned. That way the lesson is still fresh in your mind."} size={0}/>;
