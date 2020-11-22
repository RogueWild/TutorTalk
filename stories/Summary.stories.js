import React from 'react';
import Summary from '../comps/Summary';

export default {
    title: 'Div/Summary',
    component: Summary
};

export const BasicSummary = () => <Summary image={true} />;
export const SummaryWithoutStory = () => <Summary image={true} story={false}/>;