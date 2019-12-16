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
import CareerSection from "../Commons/CareerSection/CareerSection";

const Contact = () => {
    return (
        <div>
            <Header img={AboutBgImg} type='half' align={'left'} form={<ContactForm/>}>
                        <TextLabel className='text-white'  icon={threeWhiteDots} text='CONTACT US'/>
                        <HeaderText
                            className={'text-left text-white'}
                            text={'Reach us anytime anyday'}
                        />
            </Header>
            <Section className={'bg-patek-light-green py-lg-5 '}>
                <Row className={'py-lg-5 mt-lg-15'}>
                    <Col lg={{span: 4}}>
                        <ContactInfo title={'Locations - '}
                                     icon={contactLocationIcon}>
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
                        <ContactInfo title={'Email - '}
                                     icon={contactEmailIcon}
                        >
                            <h5>Email our Support Staff</h5>
                            <p>info@patecgroup.com</p>
                            <p>support@patecgroup.com</p>
                        </ContactInfo>
                    </Col>
                    <Col lg={{span: 4}}>
                        <ContactInfo title={'Locations - '}
                                     icon={contactPhoneIcon}
                        >
                            <h5>Lines are on 24/7</h5>
                            <p>info@patecgroup.com</p>
                            <p>support@patecgroup.com</p>
                        </ContactInfo>
                    </Col>
                </Row>
            </Section>
            <CareerSection
                header={'" An Amazing Company at the frontiers of agro allied \n' +
            'Development in West AFrica "'}
            />
            <SubscriptionSection/>
            <Footer/>
        </div>
    );
};

export default Contact;