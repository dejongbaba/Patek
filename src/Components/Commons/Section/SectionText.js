import React from 'react';

const SectionText = ({icon, title, description, iconClass, textAlign,bigIcon, descType, type}) => {

    if (textAlign === 'left') {
        return (
            <div className='min-height-200'>
                <div className="d-flex align-items-center mb-3">
                    <img src={icon} className={`${iconClass?iconClass:""} ${bigIcon ? "w-lg-25":'w-lg-15'}  w-25 mb-lg-2 mr-2`} alt="section text icon"/>
                    <div className='section-text'>
                        <h3 className='mb-0'>{title}</h3>
                        {descType === 'list' ? <div>{description}</div> : ''}
                    </div>

                </div>
                {descType !== 'list' ? <p className='pl-lg-5'>{description}</p> : ''}
            </div>
        )
    }

    if (type === 'imageTitle') {
        return (
            <div className="d-flex align-items-center mb-lg-3">
                <img src={icon} className={`mr-4 w-20 w-25-sm ${ iconClass ? iconClass : ''}`} alt="image for section"/>
                <h3 className='patek-deep-green quenales-bold mb-0'>{title}</h3>
            </div>
        )
    }

    return (
        <div className='text-lg-center'>
            <img src={icon} className='w-20 mb-3 mb-lg-5' alt="section text icon"/>
            <h3 className='mb-lg-3'>{title}</h3>
            <p className='mb-5'>{description}</p>
        </div>
    );
};

export default SectionText;