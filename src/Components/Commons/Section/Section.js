import React from 'react';
import {Container} from "react-bootstrap";
import greenLeafBg from "../../../assets/img/green-leaf-bg.svg";

const Section = ({children, className,leftImg,bgImg,colRightImg,colLeftImg,rightBgImg}) => {
    return (
        <section className={`mh-vh-100 overflow-x-hidden position-relative py-lg-5 ${className ? className : ''}`}>
            <Container>
                {children}
            </Container>
            {leftImg? <img src={leftImg} className={'position-absolute'} alt="section left img"/>:''}
            {colRightImg? <img src={colRightImg} className={'position-absolute right-center w-30'} alt="section left img"/>:''}
            {colLeftImg? <img src={colLeftImg} className={'position-absolute left-center w-30'} alt="section left img"/>:''}
            {bgImg? <img src={bgImg} className={'position-absolute center-right w-35 '} alt="section bg img"/>:''}
            {rightBgImg? <img src={rightBgImg} className={'position-absolute center-left w-35 '} alt="section bg img"/>:''}
        </section>
    );
}

export default Section;