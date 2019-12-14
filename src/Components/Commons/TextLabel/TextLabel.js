import React from 'react';
import threeCircleIcon from "../../../assets/img/three-circle-icon.svg";
import './textlabel.css';

const TextLabel = ({text, icon=threeCircleIcon, className='patek-green', positionClass='justify-content-start'}) => {
    return (
        <>
            <div className={`d-flex align-items-center ${positionClass}`}>
                <p className={`text-uppercase mb-0 hk-grotesk-bold text-label ls-0-3 ls-lg-1 mr-3 ${className ? className : ''}`}>
                    {text}
                </p>
                <img src={icon} style={{width:'40px'}} alt="patek icon"/>
            </div>
        </>
    );
};

export default TextLabel;