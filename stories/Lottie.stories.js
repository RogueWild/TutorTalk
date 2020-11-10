import React from 'react';
import TutorSuccessLottie from '../comps/Lotties/TutorSuccessLottie';
import ErrorLottie from '../comps/Lotties/ErrorLottie';
import StudentSuccessLottie from '../comps/Lotties/StudentSuccessLottie';

export default {
    title: 'Lotties/TutorSuccessLottie',
    component: TutorSuccessLottie, ErrorLottie, StudentSuccessLottie
};

export const BasicTutorSuccessLottie = () => <TutorSuccessLottie />;
export const BasicErrorLottie = () => <ErrorLottie />;
export const BasicStudentSuccessLottie = () => <StudentSuccessLottie />;