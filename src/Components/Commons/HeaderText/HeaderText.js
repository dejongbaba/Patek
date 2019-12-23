import React from 'react';
import './HeaderText.css';

const HeaderText = ({text, className,animation,animationDelay,animationDuration}) => {
    return (
        <h1
            data-aos={`${animation?animation:'fade-up'}`}
            data-aos-easing={`ease`}
            data-aos-delay={`${animationDelay?animationDelay:'300'}`}
            data-aos-duration={`${animationDuration?animationDuration:'300'}`}
            data-aos-once={`true`}
            className={`quenales-bold patek-deep-green mt-lg-5 fs-lg-4 ${className ? className : ''}`}>{text}</h1>
    );
};

export default HeaderText;