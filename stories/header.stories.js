import React from 'react';
import HeaderAccount from '../comps/Header';

export default {
    title: 'Header/Account',
    component: HeaderAccount,
};

export const BasicAccountHeader = () => <HeaderAccount text="Don't Have an Account?" />;
export const BasicSignupHeader = () => <HeaderAccount text="Sign up Today!" />;
export const BasicLoginHeader = () => <HeaderAccount text="Login to TUTOR TALK"/> ;
