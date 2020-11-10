import React from 'react';
import styled, { css } from 'styled-components';
import Lottie from 'react-lottie';
import animData from '../../../public/error.json';

const LottieCont = styled.div`

`;


const ErrorLottie = ({}) => {

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
            width={570}
            height={570}
        />
    </LottieCont>
}


ErrorLottie.defaultProps = {

}


export default ErrorLottie;