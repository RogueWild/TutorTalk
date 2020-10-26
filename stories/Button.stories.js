import React from 'react';
import ButtonTemplate from '../comps/ButtonTemplate';

import Button from '../comps/Button';

export default {
    title: 'Buttons/Buttons', 
    component: ButtonTemplate, Button
};

//export const BasicButtonTemplate = () => <ButtonTemplate />;

export const BasicButton = () => <Button text="Button" />;
export const CancelButton = () => <Button text="Cancel" backgroundColor="#C4C4C4" />;
export const OutlineButton = () => <Button text="Cancel" backgroundColor="none" border="2px lightblue solid" />;