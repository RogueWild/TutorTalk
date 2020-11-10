import React from 'react';
import styled, { css } from 'styled-components';
import Lottie from 'react-lottie';
import animData from '../../../public/StudentSuccess.json';

const LottieCont = styled.div`

`;


const StudentSuccessLottie = ({}) => {

    const lottieOptions = {
        loop: true,
        autoplay: true, 
        animationData: animData,

      };

    return <LottieCont > 
                <Lottie 
            options={lottieOptions}
            width={700}
            height={700}
        />
    </LottieCont>
}


StudentSuccessLottie.defaultProps = {

}


export default StudentSuccessLottie;