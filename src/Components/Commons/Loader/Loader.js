import React from 'react';
import './loader.css';

Loader.propTypes = {};

function Loader(props) {
    return (
        props.loading ?
            <div className='loader-bg'>
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div> : props.children
    );
}

export default Loader;