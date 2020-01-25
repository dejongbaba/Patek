import React from 'react';
import threeCircleIcon from "../../../assets/img/three-circle-icon.svg";
import './textlabel.css';

const TextLabel = ({text, icon=threeCircleIcon, className='patek-green',
                       positionClass='justify-content-start',
                       animation,animationDelay,animationDuration}) => {
    return (
        <>
            <div
                data-aos={`${animation?animation:'fade-in'}`}
                data-aos-easing={`ease`}
                data-aos-duration={`${animationDuration?animationDuration:'500'}`}
                data-aos-delay={`${animationDelay?animationDelay:'100'}`}
                data-aos-once={`true`}
                className={`d-flex align-items-center ${positionClass}`}>
                <p className={`text-uppercase mb-0 hk-grotesk-bold text-label ls-0-1 ls-0-3 ls-lg-0-5 mr-3 ${className ? className : ''}`}>
                    {text}
                </p>
                {icon ? <img src={icon} style={{width:'40px'}} alt="patek icon"/>: ''}
            </div>
        </>
    );
};

export default TextLabel;