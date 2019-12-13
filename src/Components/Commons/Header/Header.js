import React from 'react';
import {Container} from "react-bootstrap";
import PatekLogo from "../../../assets/img/patek-logo-white.svg";
import NavigationBar from "../Navbar/NavigationBar";
import './Header.css';

const Header = ({children, img, className, absRightImg, absLeftImg,
                    extraImg, primaryLeftImg, SecondaryLeftImg,type='full'}) => {
    return (
        <header
            className={`${type ==='full'?'vh-100':'mh-vh-70'} overflow-x-hidden overflow-y-hidden ${className ? className : ''}`}
                style={{
                    backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),' + `url(${img})`,
                    backgroundSize: 'cover'
                }}>
            <Container>
                <NavigationBar logo={PatekLogo}/>
                {children}
            </Container>
            {absLeftImg ? <img className={'position-absolute bottom-left-5 w-45'} src={absLeftImg}/> : ''}
            {absRightImg ? <img className={'position-absolute bottom-right  -right-30  w-75'} src={absRightImg}/> : ''}
            {SecondaryLeftImg ?
                <img className={'position-absolute bottom-left-0 -bottom-10 -right-30  w-50'} src={SecondaryLeftImg}/> : ''}
            {primaryLeftImg ?
                <img className={'position-absolute bottom-left-0 filter-brightness-0-5 left-up -bottom-10 -right-30  w-50'} src={primaryLeftImg}/> : ''}
            {extraImg ? <img src={extraImg}/> : ''}
        </header>
    );
};

export default Header;