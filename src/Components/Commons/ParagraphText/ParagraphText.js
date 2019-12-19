import React from 'react';

const ParagraphText = ({text, className,animation,animationDelay,animationDuration}) => {
    return (
        <p
            data-aos={`${animation?animation:'fade-in'}`}
            data-aos-easing={`ease`}
            data-aos-duration={`${animationDuration?animationDuration:'300'}`}
            data-aos-delay={`${animationDelay?animationDelay:'500'}`}
            data-aos-once={`true`}
            className={`${className ? className : ''}`}>{text}</p>
    );
};

export default ParagraphText;