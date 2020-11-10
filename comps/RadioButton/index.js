import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const RadBtnContainer = styled.div`
    display:flex;
    flex-direction:column;
`;

const RadioBtnBox = styled.div`
    display:flex;
    padding:5px 0px;
`;

const RadioBtn = styled.input`
    min-width:18px;
    min-height:18px;
`;
const RadioLabel = styled.label`
    padding-left:10px;
    font-size:14pt;
`;

const RadioButton = ({text}) => {
    return <RadBtnContainer>
        <RadioBtnBox>
            <RadioBtn type="radio" name="radio" id="highschool" value="highschool"></RadioBtn>
            <RadioLabel for="highschool">{text}</RadioLabel>
        </RadioBtnBox>
        <RadioBtnBox>
            <RadioBtn type="radio" name="radio" id="highschool" value="highschool"></RadioBtn>
            <RadioLabel for="highschool">Higher Education Diploma/ Certificate</RadioLabel>
        </RadioBtnBox>
        <RadioBtnBox>
            <RadioBtn type="radio" name="radio" id="highschool" value="highschool"></RadioBtn>
            <RadioLabel for="highschool">Undergraduate Degree</RadioLabel>
        </RadioBtnBox>
        <RadioBtnBox>
            <RadioBtn type="radio" name="radio" id="highschool" value="highschool"></RadioBtn>
            <RadioLabel for="highschool">Graduate Degree (Master's / PHD)</RadioLabel>
        </RadioBtnBox>
    </RadBtnContainer>
}


RadioButton.defaultProps = {
    text: "High School Diploma",
}

export default RadioButton;