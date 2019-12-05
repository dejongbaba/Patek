import React from 'react';

const ParagraphText = ({text, className}) => {
    return (
        <p className={`${className ? className : ''}`}>{text}</p>
    );
};

export default ParagraphText;