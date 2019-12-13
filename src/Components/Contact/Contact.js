import React from 'react';
import AboutBgImg from "../../assets/img/about-bg-image.svg";
import {Col, Row} from "react-bootstrap";
import Breadcrumb from "../Commons/Breadcrumb/Breadcrumb";
import TextLabel from "../Commons/TextLabel/TextLabel";
import HeaderText from "../Commons/HeaderText/HeaderText";
import Header from "../Commons/Header/Header";
import SubscriptionSection from "../Commons/SubscriptionSection/SubscriptionSection";
import Footer from "../Commons/Footer/Footer";
import Section from "../Commons/Section/Section";
import meetMeBg from "../../assets/img/Meet-me-bg@2x.png";
import contactLocationIcon from "../../assets/img/contact-location-icon.svg";
import contactEmailIcon from "../../assets/img/contact-email-icon.svg";
import contactPhoneIcon from "../../assets/img/contact-phone-icon.svg";
import ContactInfo from "./ContactInfo";
import LocationListItem from "./LocationListItem";
import threeWhiteDots from "../../assets/img/three-white-dots.svg";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div>
            <Header img={AboutBgImg} type='half'>
                <Row className={'ml-lg-5'}>
                    <Col lg={{span: 6}} className={'text-center pt-lg-5 px-lg-0 '}>
                        <TextLabel className='text-white'  icon={threeWhiteDots} text='CONTACT US'/>
                        <HeaderText className={'text-left text-white'} text={'Reach us anytime\n' +
                        'anyday'}/>
                    </Col>
                        <ContactForm/>
                </Row>

            </Header>
            <Section className={'bg-patek-light-green py-lg-5 '}>
                <Row className={'py-lg-5 mt-15 '}>
                    <Col lg={{span: 4}}>
                        <ContactInfo title={'Locations - '} icon={contactLocationIcon}>
                            <LocationListItem text={'24 Montgomery road, off Murtala \n' +
                            'Muhammed Road, Yaba, Lagos.'}
                                              number={'1'}
                                              locationTitle={'DIRECTIONS'}
                            />
                            <LocationListItem text={'Ilorin Kwara, State'}
                                              number={'2'}
                                              locationTitle={'DIRECTIONS'}
                            />
                        </ContactInfo>
                    </Col>
                    <Col lg={{span: 4}}>
                        <ContactInfo title={'Email - '} icon={contactEmailIcon}>
                            <h5>Email our Support Staff</h5>
                            <p>info@patecgroup.com</p>
                            <p>support@patecgroup.com</p>
                        </ContactInfo>
                    </Col>
                    <Col lg={{span: 4}}>
                        <ContactInfo title={'Locations - '} icon={contactPhoneIcon}>
                            <h5>Lines are on 24/7</h5>
                            <p>info@patecgroup.com</p>
                            <p>support@patecgroup.com</p>
                        </ContactInfo>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-patek-light-green py-lg-5 '}>
                <Row className={'py-lg-5 text-center'}>
                    <Col lg={{span: 8, offset: 2}}>
                        <div className="pt-lg-2 mt-lg-5">
                            <HeaderText className='text-white mt-lg-5 pt-lg-5 position-relative z-index-1'
                                        text={'" An Amazing Company at the frontiers of agro allied \n' +
                                        'Development in West AFrica "'}/>

                        </div>
                    </Col>
                </Row>
                <img src={meetMeBg} className='position-absolute w-75 filter-brightness-0-3 center-center'
                     alt="meet me background"/>
            </Section>
            <SubscriptionSection/>
            <Footer/>
        </div>
    );
};

export default Contact;