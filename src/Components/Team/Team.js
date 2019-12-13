import React from 'react';
import Header from "../Commons/Header/Header";
import AboutBgImg from '../../assets/img/about-bg-image.svg'
import {Col, Row} from "react-bootstrap";
import TextLabel from "../Commons/TextLabel/TextLabel";
import HeaderText from "../Commons/HeaderText/HeaderText";
import Breadcrumb from "../Commons/Breadcrumb/Breadcrumb";
import Section from "../Commons/Section/Section";
import greenLeafBg from "../../assets/img/green-leaf-bg.svg";
import meetMeBg from "../../assets/img/Meet-me-bg@2x.png";
import aboutLeaf from "../../assets/img/about-leaf-bg.svg";
import ParagraphText from "../Commons/ParagraphText/ParagraphText";
import Footer from "../Commons/Footer/Footer";
import SubscriptionSection from "../Commons/SubscriptionSection/SubscriptionSection";
import Button from "../Commons/Button/Button";
import SectionGrid from "../Commons/SectionGrid/SectionGrid";
import SectionGridItem from "../Commons/SectionGridItem/SectionGridItem";
import threeCircleIcon from "../../assets/img/three-circle-icon.svg";
import agriCommodity from "../../assets/img/agri-commodity.svg";
import manWorking from "../../assets/img/man-working@2x.png";
import womanInOffice from "../../assets/img/woman-in-office@2x.png";
import "./team.css";
import {about, home, team} from "../../routes/routes";

const Team = () => {
    return (
        <>
            <Header img={AboutBgImg} type='half'>
                <Row>
                    <Col lg={{span: 6, offset: 3}} className={'text-center pt-lg-5 '}>
                        <Breadcrumb containerClass={'mb-lg-5'}
                                    links={
                                        [
                                            {name: 'home', path: home},
                                            {name: 'about', path: about},
                                            {name: 'team', path: team}
                                        ]
                                    }/>
                        <TextLabel positionClass={'justify-content-center'} text={'MEET THE TEAM'}/>
                        <HeaderText className={'text-white'} text={'The Team'}/>
                    </Col>
                </Row>
            </Header>
            <Section className={'py-lg-5 '}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6}}>
                        <img src={womanInOffice} className='mt-lg-5 pt-lg-5 img-fluid' alt="woman in office"/>
                    </Col>
                    <Col lg={{span: 6}}>
                        <img src={manWorking} className='img-fluid' alt="man working"/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-patek-light-green py-lg-5 '}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6, offset: 3}}>
                        <TextLabel positionClass={'my-lg-5 justify-content-center'} text={'WHO WE ARE'}/>
                        <HeaderText className={'text-center'} text={'Our Team-'}/>
                        <HeaderText className={'text-center my-lg-3 fs-2-5 patek-deep-green '}
                                    text={'\n' +
                                    'Highly Skilled Professionals\n' +
                                    'continually striving for Excellence'}/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30 py-lg-5 '}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 12}}>
                        <SectionGrid>
                            <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>
                            <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>
                            <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>
                            <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>
                            <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>
                            <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>
                        </SectionGrid>
                    </Col>
                </Row>
            </Section>

            <Section className={'bg-patek-light-green py-lg-5 '}>
                <Row className={'py-lg-5 text-center'}>
                    <Col lg={{span: 8, offset: 2}}>
                        <div className="pt-lg-2 mt-lg-5">
                            <HeaderText className='text-white mt-lg-5 pt-lg-5 position-relative z-index-1'
                                        text={'Interested in Working With Us?'}/>
                            <ParagraphText className={'text-white mb-lg-5 pb-lg-1 text-center position-relative z-index-1'}
                                           text={'Join us In making a difference'}/>
                            <Button text={'EXPLORE CAREERS'} className={'position-relative z-index-1'}/>
                        </div>
                    </Col>
                </Row>
                <img src={meetMeBg} className='position-absolute w-75 filter-brightness-0-3 center-center'
                     alt="meet me background"/>
            </Section>
            <SubscriptionSection/>
            <Footer/>
        </>
    );
};

export default Team;