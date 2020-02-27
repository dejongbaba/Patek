import React from 'react';
import {useSocialLinks} from "../../Effects/Effects";

const withSocialLinks = (component) => (props) => {
    const RenderComponent = component;
    const [socialLinks, setSocialLinks] = useSocialLinks();
    return <RenderComponent
        socialLinks={socialLinks}
        {...props}
    />;
};

export default withSocialLinks;