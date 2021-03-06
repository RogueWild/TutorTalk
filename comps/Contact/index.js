import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Brief from '../Brief';

const Container = styled.div`
    width: 370px;
    height: 322px;
    display: inline-flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;
`;
const Contact = ({}) => {
    return <Container>
        <Brief image={true} src="/phone.png" width="498px" text="(604)284-9574"/>
        <Brief image={true} src="/message.png" text="emailname@gmail.com" width="455px" TxtColor="#FFBF00"/>
        <Brief image={true} src="/time.png" width="280px" text="Mondays – 13:30-17:30 Thursdays – 9:00-12:00 Zoom Link: www.zoomlink.com"/>
    </Container>
}

export default Contact;