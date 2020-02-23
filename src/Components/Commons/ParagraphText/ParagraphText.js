import React from 'react';
import "./paragraphText.css";
const ParagraphText = ({text, className, animation, animationDelay, animationDuration, type}) => {
    if (type === 'pre') {
        return (
            <pre>
                {text}
            </pre>
        )
    }
    return (
        <p
            data-aos={`${animation ? animation : 'fade-in'}`}
            data-aos-easing={`ease`}
            data-aos-duration={`${animationDuration ? animationDuration : '300'}`}
            data-aos-delay={`${animationDelay ? animationDelay : '0'}`}
            data-aos-once={`true`}
            className={`paragraph-text ${className ? className : ''}`}>{text}</p>
    );
};

export default ParagraphText;