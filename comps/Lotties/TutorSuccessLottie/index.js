import React from 'react';
import styled, { css } from 'styled-components';
import Lottie from 'react-lottie';
import animData from '../../../public/TutorSuccess.json';

const LottieCont = styled.div`

`;


const TutorSuccessLottie = ({}) => {

    const lottieOptions = {
        loop: true,
        autoplay: true, 
        animationData: animData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return <LottieCont > 
                <Lottie 
            options={lottieOptions}
            width={300}
            height={300}
        />
    </LottieCont>
}


TutorSuccessLottie.defaultProps = {

}


export default TutorSuccessLottie;