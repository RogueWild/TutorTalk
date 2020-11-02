import React from 'react';
import ButtonTemplate from '../comps/ButtonTemplate';
import Button from '../comps/Button';

export default {
    title: 'Buttons/Buttons', 
    component: ButtonTemplate, Button
};

//export const BasicButtonTemplate = () => <ButtonTemplate />;

export const BasicButton = () => <Button text="Button" />;
export const CancelButton = () => <Button text="Cancel" backgroundColor="#C4C4C4" hoverColor="#A9A9A9" />;
export const OutlineButton = () => <Button text="Log In" backgroundColor="none" hoverColor="#F9F9F9" border="2px lightblue solid" />;
