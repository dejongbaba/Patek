import React from 'react';
import Header from "../../Components/Commons/Header/Header";
import TeamBannerImg from '../../assets/img/team-banner@2x.png'
import {Col, Row} from "react-bootstrap";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import Section from "../../Components/Commons/Section/Section";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import Footer from "../../Components/Commons/Footer/Footer";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import SectionGrid from "../../Components/Commons/SectionGrid/SectionGrid";
import SectionGridItem from "../../Components/Commons/SectionGridItem/SectionGridItem";
import manWorking from "../../assets/img/man-working@2x.png";
import womanInOffice from "../../assets/img/woman-in-office@2x.png";
import "./team.css";
import {about, career, home, team} from "../../routes/routes";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";
import {redirectTo} from "../../Facades/Facade";
import withData from "../../Hoc/withData";
import {getAllTeam} from "../../Api/api";

const Team = ({data}) => {
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
            <Section className={'bg-patek-light-green'}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6}}>
                        <img src={womanInOffice} className='mt-lg-5 mb-5 mb-lg-0 pt-lg-5 img-fluid'
                             alt="woman in office"/>
                    </Col>
                    <Col lg={{span: 6}}>
                        <img src={manWorking} className='img-fluid mb-5 mb-lg-0' alt="man working"/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-patek-light-green'}>
                <Row className={'pt-lg-2 pb-lg-3'}>
                    <Col lg={{span: 6, offset: 3}}>
                        <TextLabel positionClass={'mt-lg-3 mb-lg-2 justify-content-center'} text={'Our Team'}/>
                        <HeaderText className={'text-center fs-2 fs-lg-2-5  patek-deep-green '}
                                    text={'\n' +
                                    'Highly Skilled Professionals\n' +
                                    'continually striving for Excellence'}/>
                    </Col>
                </Row>
            </Section>

            {data && data.length ?
                <Section className={'bg-gray-gradient-30'}>
                    <Row className={'pb-lg-5 pt-lg-3'}>
                        <Col lg={{span: 12}}>
                            <SectionGrid>
                                {data && data.length ? data.map((d, i) =>
                                    <SectionGridItem key={i} text={d.role} title={d.name}/>) : ""}
                            </SectionGrid>
                        </Col>
                    </Row>
                </Section> : ''
            }
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

export default withData(Team, getAllTeam,null,"team");