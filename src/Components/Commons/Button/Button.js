import React from 'react';
import {Icon} from "antd";

const Button = ({onClick, className, text, loading, type = 'button'}) => {
    return (
        <button type={type === 'button' ? 'button' : 'submit'}
                className={`btn btn-patek-green text-uppercase ${className}`} onClick={(e) => onClick && onClick(e)}>
            {loading ? <Icon type={'loading'} style={{fontSize: 24}} spin/> : text}
        </button>
    );
}

export default Button;