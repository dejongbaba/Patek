import React from 'react';

const SectionText = ({icon, title, description, iconClass, textAlign, descType, type}) => {

    if (textAlign === 'left') {
        return (
            <div className='min-height-250'>
                <div className="d-flex align-items-lg-center">
                    <img src={icon} className={`${iconClass} w-15 mb-lg-2 mr-lg-2`} alt="section text icon"/>
                    <div>
                        <h3 className='mb-lg-3'>{title}</h3>
                        {descType === 'list' ? <div>{description}</div> : ''}
                    </div>

                </div>
                {descType !== 'list' ? <p className='pl-lg-5'>{description}</p> : ''}
            </div>
        )
    }
    if (type === 'imageTitle') {
        return (
            <div className="d-flex align-items-center mb-5">
                <img src={icon} className={`mr-4 ${iconClass ? iconClass : ''}`} alt="image for section"/>
                <h3 className='patek-deep-green quenales-bold mb-0'>{title}</h3>
            </div>
        )
    }

    return (
        <div className='text-center'>
            <img src={icon} className='w-20 mb-lg-5' alt="section text icon"/>
            <h3 className='mb-lg-3'>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default SectionText;