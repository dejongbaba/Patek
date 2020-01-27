import React from 'react';

const withSustainability = (component) => (props) => {
    const RenderComponent = component;
    const sustainabilities = props.data;


    return <RenderComponent
        isDirectorsloading={loading}
        directors={directors}
        {...props}
    />;
};

export default withSustainability;