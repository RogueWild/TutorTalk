import React from 'react';
import InputText from '../comps/Input';

export default {
    title: 'Input/Text',
    component: InputText,
};

export const BasicInputBox = () => <InputText color={0} text={"email"} size={0}/>;
export const BasicPasswordBox = () => <InputText color={0} text={"password"} size={0}/>;