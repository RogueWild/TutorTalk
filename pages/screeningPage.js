import Link from 'next/link';
import LogoHeader from '../comps/LogoHeader';
import HeaderAccount from '../comps/Header';
import RadioButton from '../comps/RadioButton';
import InputLabel from '../comps/InputLabel';
import Button from '../comps/Button';
import FileInput from '../comps/FileInput';

export default function screeningPage(){
    return (
        <div className="screening-page-cont">
            <div className="screening-page-logohead">
                <LogoHeader displayIcon={false}/>
            </div>
            <div className="screening-page-header-box">
                <div className="screening-page-header">
                    <HeaderAccount text="Tutor Sign Up " textTwo="Screening" hideDisplay={true} color="#FFF" colorTwo="#424242"/>
                </div>
            </div>
            <div className="screening-page-instruction-box">
                <div className="screening-page-instruction-header">
                    <HeaderAccount text="Please fill out all required fields below " fontWeight="400" fontSize="23px" hideDisplay={false} color="#424242"/>
                </div>
                <div className="screening-page-instruction-info">
                    <HeaderAccount text="The information you provide on the screening form will not be displayed on your public profile " fontWeight="200" fontSize="20px" hideDisplay={false} color="#424242"/>
                </div>
            
                <div className="screening-page-section-heading">
                    <HeaderAccount text="Level of Education *" fontSize="23px" color="#424242" fontWeight="600"/>
                </div>
                <div className="screening-page-radio-selection">
                    <RadioButton />
                </div>
                <div className="screening-page-input">
                    <InputLabel text="Enter Student Number *" placeholder="e.g. A0XXXXXXX"/>
                </div>
                <div className="screening-page-input">
                    <InputLabel text="Enter Your GPA *" placeholder="e.g. 92"/>
                </div>
                <div className="screening-page-input">
                    <div className="screening-page-section-heading">
                    <HeaderAccount text="Upload a file to prove you are a qualified tutor (certificate, transcript, etc) *" fontSize="23px" color="#424242" fontWeight="600"/>
                    </div>
                    <FileInput/>
                </div>
                <div className="screening-page-submit">
                    <Button text="Submit"/>
                </div>
            </div>
        </div>
    )
}