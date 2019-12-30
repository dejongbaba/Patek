import React from 'react';

const Button = ({onClick, className, text}) => {
    return (
        <button className={`btn btn-patek-green text-uppercase ${className}`} onClick={(e) => onClick(e)}>
            {text}
        </button>
    );
}

export default Button;