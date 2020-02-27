import React from 'react';
import twitterIcon from "../../../assets/img/twitter.svg";
import facebookIcon from "../../../assets/img/facebook.svg";
import footerLogo from "../../../assets/img/patek-logo-white@2x.png";
import footerBg from "../../../assets/img/footer-bg.svg";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import './footer.css';
import withData from "../../../Hoc/withData";
import {getAllMenusContent} from "../../../Api/api";
import withSocialLinks from "../../../Hoc/homeHoc/withSocialLinks";


const Footer = ({className, text, logo, data, socialLinks}) => {
    const date = new Date();
    const visibleMenu = data && data.filter((menu) => menu.show);
    return (
        <div className='position-relative bg-cover bg-no-repeat footer'
             style={{
                 backgroundImage: `url(${footerBg})`,
             }}
        >
            <Container>
                <Row className={'py-5'}>
                    <Col>
                        <div className="footer-content d-flex mb-lg-5 flex-column flex-lg-row pt-lg-5">
                            <div className="footer-logo flex-basis-30 mb-5 mb-lg-0">
                                {logo ? <img src={logo} alt="footer logo"/> :
                                    <img src={footerLogo} className={'w-30'} alt="footer logo"/>}
                            </div>
                            <div className="flex-basis-60 d-flex flex-column flex-lg-row">
                                <ul className='list-unstyled flex-basis-33'>
                                    {visibleMenu ?
                                        visibleMenu.slice(0, 2).map((menu, i) => <li key={i}>
                                            <Link to={menu.link} className='footer-links'>{menu.title}</Link>
                                        </li>) : ''}
                                </ul>
                                <ul className='list-unstyled flex-basis-33'>
                                    {visibleMenu ?
                                        visibleMenu.slice(2, 4).map((menu, i) => <li key={i}>
                                            <Link to={menu.link} className='footer-links'>{menu.title}</Link>
                                        </li>) : ''}
                                </ul>
                                <ul className='list-unstyled flex-basis-33'>
                                    {visibleMenu ?
                                        visibleMenu.slice(4, 6).map((menu, i) => <li key={i}>
                                            <Link to={menu.link} className='footer-links'>{menu.title}</Link>
                                        </li>) : ''}

                                </ul>

                            </div>
                            <div className="footer-social-media flex-basis-30 mb-5 mb-lg-0 pb-3 pb-lg-5">
                                <p className='text-white'>Connect with us</p>
                                <div className="d-flex">
                                    {socialLinks && socialLinks.length ?
                                        socialLinks.map((s, i) => {

                                            if (s.name == 'twitter') {
                                                return (
                                                    <a key={i} href={s.link} target='_blank'>
                                                        <img src={twitterIcon} className='mr-2' alt="twitter icon"/>
                                                    </a>
                                                )
                                            }

                                            return (
                                                <a key={i} href={s.link} target='_blank'>
                                                    <img src={facebookIcon} alt="facebook icon"/>
                                                </a>
                                            )
                                        }) : ''}


                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="position-absolute w-100 b-10 text-center text-white py-3 px-2 py-lg-0 ">
                &copy; {date.getFullYear()} Patec Group . All rights reserved.
            </div>
        </div>
    );
};

export default withSocialLinks(withData(Footer, getAllMenusContent));