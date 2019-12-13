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
import "./sustainability.css";
import {about, home, sustainability, team} from "../../routes/routes";
import leafBGImg from "../../assets/img/green-leaf-bg-right.svg";
import SectionText from "../Commons/Section/SectionText";
import leafInCircle from "../../assets/img/white-leaf-in-circle.svg";
import susImg2 from "../../assets/img/sustainability-art-img-2@2x.png";
import susImg1 from "../../assets/img/sustainability-art-img-1@2x.png";
import susImg3 from "../../assets/img/sustainability-img-3@2x.png";
import ArticleLayout from "../Commons/ArticleLayout/ArticleLayout";
import ArticleImage from "../Commons/ArticleImage/ArticleImage";
import CircleIcon from "../Commons/ArticleImage/CircleIcon";

const Sustainability = () => {
    return (
        <>
            <Header img={AboutBgImg} type='half'>
                <Row>
                    <Col lg={{span: 6, offset: 3}} className={'text-center pt-lg-5 '}>
                        <Breadcrumb containerClass={'mb-lg-5'}
                                    links={
                                        [
                                            {name: 'home', path: home},
                                            {name: 'Sustainability', path: sustainability},
                                        ]
                                    }/>
                        <TextLabel positionClass={'justify-content-center'} text={'SUSTAINABILTY'}/>
                        <HeaderText className={'text-white'} text={'Sustainability'}/>
                    </Col>
                </Row>
            </Header>
            <Section className={'py-lg-5 '} colRightImg={leafBGImg}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6, offset: 3}}>
                        <HeaderText className={'text-center my-lg-3 fs-2-5 patek-deep-green '}
                                    text={'We are Committed to building\n' +
                                    'a global sustainable future for all by infusing\n' +
                                    'sustainable practices in our work'}/>
                    </Col>
                </Row>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 4}}>
                        <img src={womanInOffice} className='mt-lg-5 pt-lg-5 img-fluid' alt="woman in office"/>
                    </Col>
                    <Col lg={{span: 4}}>
                        <img src={manWorking} className='img-fluid' alt="man working"/>
                    </Col>
                    <Col lg={{span: 4}}>
                        <img src={manWorking} className='img-fluid' alt="man working"/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-patek-light-green py-lg-5 '} >
                <Row className='pt-lg-5'>
                    <Col lg={{span: 4}}>
                        <SectionText
                            iconClass={'w-25'}
                            icon={leafInCircle}
                            title={'Aquaculture'}
                            type={'imageTitle'}
                        />
                    </Col>
                </Row>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 7}}>
                        <ArticleImage image={susImg1} type={'fluid'} />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'line'}
                            category={'Our Commitment'}
                            text={'As a leading supplier of feed and nutrition for the \n' +
                            'international aquaculture industry, we are committed \n' +
                            'to the use of responsible and sustainable practices \n' +
                            'that support increasing global consumption of fish \n' +
                            'and seafood, protect the environment and help \n' +
                            'farmers succeed.\n'}
                        />
                        <ArticleLayout
                            type={'line'}
                            category={'Our Progress'}
                            text={'Our focus on research, nutrition and innovation \n' +
                            'enables farmers to grow the supply of healthy fish\n' +
                            'and seafood, improve food production efficiency \n' +
                            'and reduce the environmental impact of aquaculture. \n' +
                            'We provide sustainable solutions for farmers of \n' +
                            'pangasius fish, heteroclarious fish, barramundi fish, \n' +
                            'hake, Korean mackerel, blue-whiting, herring, horse \n' +
                            'mackerel and other species of fish and seafood'}
                        />
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30 py-lg-5 '}>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 4}}>
                        <SectionText
                            iconClass={'w-25'}
                            icon={leafInCircle}
                            title={'Cattle Farm'}
                            type={'imageTitle'}
                        />
                    </Col>
                </Row>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'line'}
                            category={'Our Commitment'}
                            text={'As a leading supplier of feed and nutrition for the \n' +
                            'international aquaculture industry, we are committed \n' +
                            'to the use of responsible and sustainable practices \n' +
                            'that support increasing global consumption of fish \n' +
                            'and seafood, protect the environment and help \n' +
                            'farmers succeed.\n'}
                        />
                        <ArticleLayout
                            type={'line'}
                            category={'Our Progress'}
                            text={'Our focus on research, nutrition and innovation \n' +
                            'enables farmers to grow the supply of healthy fish\n' +
                            'and seafood, improve food production efficiency \n' +
                            'and reduce the environmental impact of aquaculture. \n' +
                            'We provide sustainable solutions for farmers of \n' +
                            'pangasius fish, heteroclarious fish, barramundi fish, \n' +
                            'hake, Korean mackerel, blue-whiting, herring, horse \n' +
                            'mackerel and other species of fish and seafood'}
                        />
                    </Col>
                    <Col lg={{span: 7}}>
                        <ArticleImage image={susImg2} type={'fluid'} />
                    </Col>

                </Row>
            </Section>

            <Section className={'bg-patek-light-green py-lg-5 '}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 7}}>
                        <ArticleImage image={susImg3} type={'fluid'} />
                    </Col>
                    <Col lg={{span: 4}}>
                        <SectionText
                            iconClass={'w-25'}
                            icon={leafInCircle}
                            title={'Quality Packaging'}
                            type={'imageTitle'}
                        />
                        <ParagraphText
                            text={'From a purely business perspective, discarding plastic makes \n' +
                            'zero sense. Plastic packaging waste represents an $80-$120 \n' +
                            'billion loss to the global economy every year according \n' +
                            'to the World Economic Forum. A more circular approach \n' +
                            'is needed, where we not only use less packaging, but \n' +
                            'design the packaging we do use so it can be reused, \n' +
                            'recycled or composted.'}
                        />
                        <CircleIcon/>
                        <ParagraphText
                            text={'We minimise waste by reducing, reusing and recycling our \n' +
                            'own waste and encouraging consumers to do the same. \n' +
                            'We want to move towards a more circular economy, \n' +
                            'enabling more packaging to either remain in loops or \n' +
                            'have the best possible opportunity to be recycled'}
                        />
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

export default Sustainability;