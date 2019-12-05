import React from 'react';

const ArticlePlaceholder = ({img, className, category, topic, text}) => {
    return (
        <div style={{background: `url(${img})`, backgroundSize: 'cover'}}
             className={`position-relative ${className ? className : ''}`}>
            <div className="position-absolute ls-0-5 fs-0-7 text-uppercase text-white z-index-1 left-bottom-10-40 py-lg-2 px-lg-4 bg-black bottom-center">
                {category}
            </div>
            <div className="position-absolute text-white height-40 py-lg-4 px-lg-4 bottom-center bg-faded-black w-100">
                <h5 className='text-white'>{topic}</h5>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default ArticlePlaceholder;