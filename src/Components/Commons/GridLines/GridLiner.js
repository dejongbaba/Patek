import React from 'react';
import './gridline.css';
const GridLiner = () => {
    return (
        <div className={'position-absolute grid-line-body'}>
            <span className={'grid-line-item'}></span>
            <span className={'grid-line-item'}></span>
            <span className={'grid-line-item'}></span>
            <span className={'grid-line-item'}></span>
            <span className={'grid-line-item'}></span>
            <span className={'grid-line-item'}></span>
            <span className={'grid-line-item'}></span>
            <span className={'grid-line-item'}></span>
            <span className={'grid-line-item'}></span>
        </div>
    );
}

export default GridLiner;