import React from 'react';
import './HeaderText.css';

const HeaderText = ({text, className}) => {
    return (
        <h1 className={`quenales-bold patek-deep-green mt-lg-5 fs-4-5 ${className ? className : ''}`}>{text}</h1>
    );
};

export default HeaderText;