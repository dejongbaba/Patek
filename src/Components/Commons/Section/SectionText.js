import React from 'react';

const SectionText = ({icon, title, description, textAlign}) => {
    return (
        (textAlign === 'left' ?
            <div className='min-height-250'>
                <div className="d-flex align-items-lg-center">
                    <img src={icon} className='w-50 mb-lg-2 mr-lg-2' alt="section text icon"/>
                    <h3 className='mb-lg-3'>{title}</h3>
                </div>
                <p className='pl-lg-3'>{description}</p>
            </div> :
            <div className='text-center'>
                <img src={icon} className='w-25 mb-lg-5' alt="section text icon"/>
                <h3 className='mb-lg-3'>{title}</h3>
                <p>{description}</p>
            </div>)
    );
}

export default SectionText;