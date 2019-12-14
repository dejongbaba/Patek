import React from 'react';
import gridImage from '../../../assets/img/grid-image.svg'

const SectionGridItem = ({logo = gridImage, title, text}) => {
    return (
        <div className='d-flex flex-column flex-basis-lg-30'>
            <img src={logo} className='img-fluid mb-3' alt=""/>
            <h6>{title}</h6>
            <p className='ls-0-5 patek-green'>{text}</p>
        </div>
    );
}

export default SectionGridItem;