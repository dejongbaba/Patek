import React from 'react';
import Header from "../../Components/Commons/Header/Header";
import TeamBannerImg from '../../assets/img/team-banner@2x.png'
import {Col, Row} from "react-bootstrap";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import Section from "../../Components/Commons/Section/Section";
import greenLeafBg from "../../assets/img/green-leaf-bg.svg";
import meetMeBg from "../../assets/img/Meet-me-bg@2x.png";
import aboutLeaf from "../../assets/img/about-leaf-bg.svg";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import Footer from "../../Components/Commons/Footer/Footer";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import Button from "../../Components/Commons/Button/Button";
import SectionGrid from "../../Components/Commons/SectionGrid/SectionGrid";
import SectionGridItem from "../../Components/Commons/SectionGridItem/SectionGridItem";
import threeCircleIcon from "../../assets/img/three-circle-icon.svg";
import agriCommodity from "../../assets/img/agri-commodity.svg";
import manWorking from "../../assets/img/man-working@2x.png";
import womanInOffice from "../../assets/img/woman-in-office@2x.png";
import "./team.css";
import {about, career, home, team} from "../../routes/routes";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";
import {redirectTo} from "../../Facades/Facade";

const Team = () => {
    return (
        <>
            <Header img={TeamBannerImg} type='half'>
                        <Breadcrumb containerClass={'mb-5'}
                                    links={
                                        [
                                            {name: 'home', path: home},
                                            {name: 'about', path: about},
                                            {name: 'team', path: team}
                                        ]
                                    }/>
                        <TextLabel positionClass={'justify-content-center'} text={'MEET THE TEAM'}/>
                        <HeaderText className={'text-white'} text={'The Team'}/>
            </Header>
            <Section className={'bg-patek-light-green py-lg-5 '}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6}}>
                        <img src={womanInOffice} className='mt-lg-5 mb-5 mb-lg-0 pt-lg-5 img-fluid' alt="woman in office"/>
                    </Col>
                    <Col lg={{span: 6}}>
                        <img src={manWorking} className='img-fluid mb-5 mb-lg-0' alt="man working"/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-patek-light-green py-lg-5 '}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6, offset: 3}}>
                        <TextLabel positionClass={'my-lg-5 justify-content-center'} text={'WHO WE ARE'}/>
                        <ParagraphText className={'text-center fs-lg-2-5 text-gray-2'} text={'Our Team-'}/>
                        <HeaderText className={'text-center my-lg-3 fs-2 fs-lg-2-5  patek-deep-green '}
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

            <CareerSection header={'Interested in Working With Us?'}
                           text={'Join us In making a difference'}
                           button={'EXPLORE CAREERS'}
                           func={() => redirectTo(career)}
            />
            <SubscriptionSection/>
            <Footer/>
        </>
    );
};

export default Team;