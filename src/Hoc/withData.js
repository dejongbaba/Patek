import React from 'react';
import {useApi} from "../Effects/Effects";

const withData = (component, url, selectData) => (props) => {
    const RenderComponent = component;
    const [response, loading] = useApi(url);

    return <RenderComponent
                loading={loading}
                data={selectData ? selectData(response) : response}
                {...props}
    />;
};

export default withData;