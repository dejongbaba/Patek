import React from 'react';

const Button = ({onClick, className, text}) => {
    return (
        <button className={`btn btn-patek-green text-uppercase ${className}`} onClick={() => onClick()}>
            {text}
        </button>
    );
}

export default Button;