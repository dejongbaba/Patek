import React from 'react';
import './HeaderText.css';

const HeaderText = ({text, className, animation, animationDelay, animationDuration}) => {
    return (
        <h1
            data-aos={`${animation ? animation : 'fade-in'}`}
            data-aos-easing={`ease`}
            data-aos-delay={`${animationDelay ? animationDelay : '100'}`}
            data-aos-duration={`${animationDuration ? animationDuration : '500'}`}
            data-aos-once={`true`}
            className={`quenales-bold patek-deep-green mt-lg-5 fs-lg-4 ${className ? className : ''}`}>
            {Array.isArray(text) ? text.map((t,i)=><span key={i}>{t}</span>) : text}
        </h1>
    );
};

export default HeaderText;