import React from 'react';
import {Container} from "react-bootstrap";
import './section.css';

const Section = ({children, className, leftImg, bgImg, colRightImg, colLeftImg, rightBgImg}) => {
    return (
        <section data-aos="fade-up"
                 data-aos-easing="ease-in-back"
                 data-aos-delay="500"
                 className={`mh-vh-100 overflow-x-hidden position-relative py-5 ${className ? className : ''}`}>
            <Container>
                {children}
            </Container>
            {leftImg ? <img src={leftImg} className={'position-absolute d-none d-md-block'} alt="section left img"/> : ''}
            {colRightImg ?
                <img src={colRightImg} className={'position-absolute d-none d-md-block right-center w-30'} alt="section left img"/> : ''}
            {colLeftImg ?
                <img src={colLeftImg} className={'position-absolute d-none d-md-block left-center w-30'} alt="section left img"/> : ''}
            {bgImg ? <img src={bgImg} className={'position-absolute d-none d-md-block center-right w-35 '} alt="section bg img"/> : ''}
            {rightBgImg ?
                <img src={rightBgImg} className={'position-absolute d-none d-md-block center-left w-32 '} alt="section bg img"/> : ''}
        </section>
    );
};

export default Section;