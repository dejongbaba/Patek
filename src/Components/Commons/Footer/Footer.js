import React from 'react';
import twitterIcon from "../../../assets/img/twitter.svg";
import facebookIcon from "../../../assets/img/facebook.svg";
import footerLogo from "../../../assets/img/patek-logo-white.svg";
import footerBg from "../../../assets/img/footer-bg.svg";
import {Col, Container, Row} from "react-bootstrap";
import './footer.css';

const Footer = ({className, text, logo}) => {
    return (
        <div className='position-relative mh-vh-50 footer'
             style={{background: `url(${footerBg})`, backgroundSize: 'cover'}}
        >
            <Container>
                <Row className={'pt-lg-5'}>
                    <Col>
                        <div className="footer-content d-flex pt-lg-5">
                            <div className="footer-logo flex-basis-30">
                                {logo ? <img src={logo} alt="footer logo"/> :
                                    <img src={footerLogo} alt="footer logo"/>}
                            </div>
                            <div className="flex-basis-60 d-flex">
                                <ul className='list-unstyled flex-basis-33'>
                                    <li><a href="" className='footer-links'>Home</a></li>
                                    <li><a href="" className='footer-links'>Careers</a></li>
                                </ul>
                                <ul className='list-unstyled flex-basis-33'>
                                    <li><a href="" className='footer-links'>About Patec</a></li>
                                    <li><a href="" className='footer-links'>News & Events</a></li>
                                </ul>
                                <ul className='list-unstyled flex-basis-33'>
                                    <li><a href="" className='footer-links'>Subsidiaries</a></li>
                                    <li><a href="" className='footer-links'>Contact Us</a></li>
                                </ul>

                            </div>
                            <div className="footer-social-media flex-basis-30">
                                <p className='text-white'>Connect with us</p>
                                <div className="d-flex">
                                    <a href="http://www.facebook.com" target='_blank'>
                                        <img src={twitterIcon} className='mr-lg-2' alt="twitter icon"/>
                                    </a>
                                    <a href="http://www.twitter.com" target='_blank'>
                                        <img src={facebookIcon} alt="facebook icon"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="position-absolute center-bottom text-white">
                &copy; 2019 Patec Group . All rights reserved.
            </div>
        </div>
    );
}

export default Footer;