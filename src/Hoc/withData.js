import React from 'react';
import {useApi} from "../Effects/Effects";

const withData = (component, url, selectData, key) => (props) => {
    const RenderComponent = component;
    const [response, loading] = useApi(url, null, key);

    return <RenderComponent
                loading={loading}
                data={selectData ? selectData(response) : response}
                {...props}
    />;
};

export default withData;