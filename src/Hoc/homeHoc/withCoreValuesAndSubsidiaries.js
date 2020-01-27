import React from 'react';

const withCoreValuesAndSubsidiaries = (component) => (props) => {
    const RenderComponent = component;
    const {data, loading} = props;
    console.log('data from with data',data);
    const coreValues = data ? data.splice(4, 6) : [];
    const subscidiaries = data ? data.splice(1, 3) : [];
    return <RenderComponent
        coreValues={coreValues}
        subscidiaries={subscidiaries}
        loading={loading}
        {...props}
    />;
};

export default withCoreValuesAndSubsidiaries;