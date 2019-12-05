import React from 'react';

const SectionText = ({icon, title, description,iconClass, textAlign, descType}) => {
    return (
        (textAlign === 'left' ?
            <div className='min-height-250'>
                <div className="d-flex align-items-lg-center">
                    <img src={icon} className={`${iconClass} mb-lg-2 mr-lg-2`} alt="section text icon"/>
                    <div>
                        <h3 className='mb-lg-3'>{title}</h3>
                        {descType === 'list' ? <div>{description}</div> : ''}
                    </div>

                </div>
                {descType !== 'list' ? <p className='pl-lg-3'>{description}</p> : ''}
            </div> :
            <div className='text-center'>
                <img src={icon} className='w-25 mb-lg-5' alt="section text icon"/>
                <h3 className='mb-lg-3'>{title}</h3>
                <p>{description}</p>
            </div>)
    );
}

export default SectionText;