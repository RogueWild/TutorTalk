import React from 'react';
import HeaderAccount from '../comps/Header';

export default {
    title: 'Header/Account',
    component: HeaderAccount,
};

export const BasicAccountHeader = () => <HeaderAccount color={0} text={"Don't Have an Account?"} size={0}/>;
export const BasicSignupHeader = () => <HeaderAccount color={0} text={"Sign up Today!"} size={1}/>;
export const BasicLoginHeader = () => <HeaderAccount color={0} text={"Login to TUTOR TALK"} size={2}/>;