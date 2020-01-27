import React from 'react';
import {useApi, useGetDirectors} from "../../Effects/Effects";

const withDirectors = (component) => (props) => {
    const RenderComponent = component;
    const [directors, loading] = useGetDirectors();
    return <RenderComponent
        isDirectorsloading={loading}
        directors={directors}
        {...props}
    />;
};

export default withDirectors;