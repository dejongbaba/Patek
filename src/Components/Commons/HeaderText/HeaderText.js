import React from 'react';
import './HeaderText.css';

const HeaderText = ({text, className,animation,animationDelay,animationDuration}) => {
    return (
        <h1
            data-aos={`${animation?animation:'ease-in-out'}`}
            data-aos-easing={`ease-in-out`}
            data-aos-delay={`${animationDelay?animationDelay:'500'}`}
            data-aos-duration={`${animationDuration?animationDuration:'1000'}`}

            data-aos-once={`true`}
            className={`quenales-bold patek-deep-green mt-lg-5 fs-lg-4 ${className ? className : ''}`}>{text}</h1>
    );
};

export default HeaderText;