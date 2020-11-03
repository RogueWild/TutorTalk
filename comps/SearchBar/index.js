import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Button from '../Button';

const Container = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
`;

const SearchBox = styled.input`
    min-width: 400px;
    max-height: 40px;
    margin: 10px 20px 0px;
    border: 1px solid #424242;
    box-sizing: border-box;
    border-radius: 6px;
`;

const SearchBar = ({}) => {
    return <Container>
        <SearchBox></SearchBox>
        <Button text="Search" maxWidth="184px" minHeight="59px"/>
    </Container>
}

export default SearchBar;