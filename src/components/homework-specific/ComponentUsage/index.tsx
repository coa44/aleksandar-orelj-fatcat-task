import React from 'react';

import FormGeneratorUsage from './FormGeneratorUsage';
import ListComponentUsage from './ListComponentUsage';
import PageGeneratorUsage from './PageGeneratorUsage';

export interface ComponentUsageProps {
    component: string;
}

const ComponentUsage: React.FC<ComponentUsageProps> = (props) => {
    const { component } = props;

    switch (component) {
        case 'LIST_COMPONENT':
            return <ListComponentUsage />;
        case 'FORM_GENERATOR':
            return <FormGeneratorUsage />;
        case 'PAGE_GENERATOR':
            return <PageGeneratorUsage />;
        default:
            return null;
    }
};

export default ComponentUsage;
