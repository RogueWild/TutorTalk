import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Brief from '../Brief';

const Container = styled.div`
    margin: 0px;
    min-width: 616px;
    min-height: 433px;
    display: inline-flex;
    flex-direction: column;
    justify-content: left;
    align-content: left;
`;

const Header = styled.h1`
    margin: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 61px;
    color: #424242;
`;

const SubHeader = styled.h2`
    margin: 8px 0px 35px 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 154.8%;
    color: #000000;
`;

const Summary = ({ name, subject, story }) => {
    return <Container>
        <Header >{name}</Header>
        <SubHeader>{subject}</SubHeader>

        {story === false ? null : <Brief image={true} width="498px" />}
        {story === false ? null : <Brief image={true} src="/mortarboard.png" text="Diploma of Computer Science
    Studying for Bachelor’s of Computer Science" width="455px" />}
        {story === false ? null : <Brief marL="42px" width="280px" text="Mondays – 13:30-17:30 Thursdays – 9:00-12:00 Zoom Link: www.zoomlink.com" />}
    </Container>

}

Summary.defaultProps = {
    name: "Sarah Lee",
    subject: "Peer Tutor, Computer Science, BCIT",
    width: "",
    marL: "",
    story: true
}

export default Summary;