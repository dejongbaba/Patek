import React from 'react';
import threeCircleIcon from "../../../assets/img/three-circle-icon.svg";

const TextLabel = ({text, icon=threeCircleIcon, className='patek-green', positionClass='justify-content-start'}) => {
    return (
        <>
            <div className={`d-lg-flex align-items-center ${positionClass}`}>
                <p className={`text-uppercase mb-0 hk-grotesk-bold text-label ls-1 mr-lg-3 ${className ? className : ''}`}>
                    {text}
                </p>
                <img src={icon} style={{width:'40px'}} alt="patek icon"/>
            </div>
        </>
    );
};

export default TextLabel;