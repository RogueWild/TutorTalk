import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Button from '../Button';
import InputText from '../Input'

const Container = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    margin: ${props=>props.marginN ? props.marginN : ""}
`;

const SearchBox = styled.input`
    min-width: 500px;
    max-height: 45px;
    margin: 10px 20px 0px;
    border: 1px solid #424242;
    box-sizing: border-box;
    border-radius: 6px;
`;

const SearchBar = ({marginN, placeholder}) => {
    return <Container marginN={marginN}>
    <InputText placeholder={placeholder} margin="0px 24px 20px 0px" width="672px"/>
        <Button text="Search" maxWidth="184px" minHeight="59px"/>
    </Container>
}

SearchBar.defaultProps = {
    marginN: "",
    placeholder: "Search Tutors"
}

export default SearchBar;