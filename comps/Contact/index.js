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
const Contact = ({ timeAndZoom, email }) => {
    return <Container>
        <Brief image={true} src="/phone.png" width="498px" text="(777)123-4567" />
        <Brief image={true} src="/message.png" text={email} color="#FFBF00" width="455px" TxtColor="#FFBF00" />
        <Brief image={true} src="/time.png" width="280px" text={timeAndZoom} />
    </Container>
}

Contact.defaultProps = {
    email:"emailname@gmail.com"
}

export default Contact;