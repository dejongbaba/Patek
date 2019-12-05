import React from 'react';

const HeaderText = ({text, className='text-white mt-lg-5 fs-4-5'}) => {
    return (
        <h1 className={`quenales-bold  ${className ? className : ''}`}>{text}</h1>
    );
}

export default HeaderText;