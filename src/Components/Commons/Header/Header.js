import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PatekLogo from "../../../assets/img/patek-logo-white.svg";
import NavigationBar from "../Navbar/NavigationBar";
import './Header.css';
import LogoPlaceholder from "./LogoPlaceholder";
import GridLiner from "../GridLines/GridLiner";

const Header = ({
                    children, img, className, absRightImg, absLeftImg, logo, align, form,
                    extraImg, primaryLeftImg, logoType, logoDate, logoText, category, logoImg,
                    SecondaryLeftImg, type = 'full'
                }) => {
    return (
        <header
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
            data-aos-once="true"
            data-aos-duration={`1000`}
            className={`${type === 'full' ? 'h-lg-100vh' : 'mh-lg-70vh'} overflow-x-hidden overflow-y-hidden ${className ? className : ''}`}
            style={{
                backgroundImage: 'linear-gradient(0deg, rgba(2, 68, 9, 0.7), rgb(8, 59, 11)),' + `url(${img})`,
                backgroundBlendMode:'multiply',
                backgroundSize: 'cover'
            }}>
            <GridLiner/>
            <Container>
                <NavigationBar logo={PatekLogo}/>
                {type != 'full' ?
                    align === 'left' ?
                        <Row className={'my-5 my-lg-0 ml-lg-5'}>
                            <Col lg={{span: 6}} className={'text-center pt-lg-5 px-lg-0 '}>
                                {children}
                            </Col>
                            {form ? form : ''}
                        </Row>
                        :
                        <Row className={'my-5 my-lg-0'}>
                            <Col lg={{span: 6, offset: 3}} className={'text-center pt-lg-5 '}>
                                {children}
                            </Col>
                        </Row>
                    : children}
                {logo ? <LogoPlaceholder type={logoType} category={category} text={logoText} date={logoDate}/> : ''}
            </Container>
            {absLeftImg ?
                <img className={'position-absolute bottom-left-5 d-none d-md-block w-45'} src={absLeftImg}/> : ''}
            {absRightImg ? <img className={'position-absolute bottom-right d-none d-md-block  -right-30  w-75'}
                                src={absRightImg}/> : ''}
            {SecondaryLeftImg ?
                <img className={'position-absolute bottom-left-0 -bottom-10 d-none d-md-block -right-30  w-50'}
                     src={SecondaryLeftImg}/> : ''}
            {primaryLeftImg ?
                <img
                    className={'position-absolute bottom-left-0 filter-brightness-0-5 left-up d-none d-md-block -bottom-10 -right-30  w-50'}
                    src={primaryLeftImg}/> : ''}
            {extraImg ? <img src={extraImg}/> : ''}
        </header>
    );
};

export default Header;