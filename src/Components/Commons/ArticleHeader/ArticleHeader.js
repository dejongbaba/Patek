import React from 'react';
import GridLiner from "../GridLines/GridLiner";
import {Container} from "react-bootstrap";
import NavigationBar from "../Navbar/NavigationBar";
import PatekLogo from "../../../assets/img/patek-logo-white.svg";

const ArticleHeader = ({className, children}) => {
    return (
        <header
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
            data-aos-once="true"
            data-aos-duration={`1000`}
            className={`mh-lg-70vh position-relative bg-patek-light-green ${className ? className : ''}`}
            style={{
                backgroundImage: 'linear-gradient(100deg, rgba(55,84,78,0.1) 0%, rgba(11,17,16,0.1) 100%)',
                backgroundBlendMode: 'multiply',
                backgroundSize: 'cover'
            }}
        >
            <GridLiner/>
            <Container>
                <NavigationBar type={'inverse'} logo={PatekLogo}/>
                {children}
            </Container>
        </header>
    );
}

export default ArticleHeader;