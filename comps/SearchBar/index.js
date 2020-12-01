import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import InputText from '../Input'

const Container = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    margin: ${props => props.marginN ? props.marginN : ""};
`;

const SearchBox = styled.input`
    min-width: 500px;
    max-height: 45px;
    margin: 10px 20px 0px;
    border: 1px solid #424242;
    box-sizing: border-box;
    border-radius: 6px;
`;

const SearchBar = ({ onClick, marginN, placeholder }) => {
    const [subject, setSubject] = useState("");

    return (
        <Container marginN={marginN}>
            <InputText placeholder={placeholder} margin="0px 24px 20px 0px" width="672px" onChange={(e) => {
                setSubject(e.target.value);
            }} />
            <Button text="Search" maxWidth="184px" minHeight="50px" onClick={() => {
                onClick(subject);
            }} />
        </Container>
    )
}

SearchBar.defaultProps = {
    onClick: () => { },
    marginN: "",
    placeholder: "Search Tutors by Subject"
}

export default SearchBar;