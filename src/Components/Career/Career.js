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
import ParagraphText from "../Commons/ParagraphText/ParagraphText";
import Footer from "../Commons/Footer/Footer";
import SubscriptionSection from "../Commons/SubscriptionSection/SubscriptionSection";
import rolePlaceholderimg from "../../assets/img/role-placeholder-img@2x.png";
import glowingCircle from "../../assets/img/glowingCircle@2x.png";
import careerWoman from "../../assets/img/career-woman@2x.png";
import threeCircleIcon from "../../assets/img/three-circle-icon.svg"
import "./career.css";
import {career, home} from "../../routes/routes";
import leafBGImg from "../../assets/img/green-leaf-bg-right.svg";
import Accordion from "../Commons/Accordion/Accordion";
import CarouselLeaf from "../../assets/img/carousel-leaf-img@2x.png";
import Button from "../Commons/Button/Button";


const accordionItems = [
    {
        title: 'Quality Packaging -',
        desc: 'Quality Packaging aims to be an industry leader in recycling \n' +
            'of waste materials, manufacturing of packaging solutions.\n' +
            'The company will provide solutions that will be utilized by\n' +
            'a wide range of industries such as retail, food & beverages,\n' +
            'pharmaceutical, agriculture, construction.',
        link: '',
    }, {
        title: 'Colorado Farms -',
        desc: 'Quality Packaging aims to be an industry leader in recycling \n' +
            'of waste materials, manufacturing of packaging solutions.\n' +
            'The company will provide solutions that will be utilized by\n' +
            'a wide range of industries such as retail, food & beverages,\n' +
            'pharmaceutical, agriculture, construction.',
        link: '',

    }, {
        title: 'Golden Food and Beverage -',
        desc: 'Quality Packaging aims to be an industry leader in recycling \n' +
            'of waste materials, manufacturing of packaging solutions.\n' +
            'The company will provide solutions that will be utilized by\n' +
            'a wide range of industries such as retail, food & beverages,\n' +
            'pharmaceutical, agriculture, construction.',
        link: '',

    }];

const accordionItemStructure = (item) => <ParagraphText text={item.desc} className={'text-green-1 pt-lg-5 mb-lg-5'}/>;

const Career = () => {


    return (
        <>
            <Header img={AboutBgImg} type='half'>
                <Row>
                    <Col lg={{span: 6, offset: 3}} className={'text-center pt-lg-5 '}>
                        <Breadcrumb containerClass={'mb-lg-5'}
                                    links={
                                        [
                                            {name: 'home', path: home},
                                            {name: 'career', path: career}
                                        ]
                                    }/>
                        <TextLabel positionClass={'justify-content-center'} text={'JOIN THE TEAM'}/>
                        <HeaderText className={'text-white'} text={'Careers at Patec'}/>
                    </Col>
                </Row>
            </Header>

            <Section className={'py-lg-5 '} bgImg={greenLeafBg}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6}}>
                        <img src={rolePlaceholderimg} className='mt-lg-5 pt-lg-5 img-fluid' alt="woman in office"/>
                    </Col>
                    <Col lg={{span: 6}}>
                        <TextLabel positionClass={'my-lg-5 '} text={'WORKING AT PATEC'}/>
                        <HeaderText className={'mb-lg-5'}
                                    text={'" At Patec group, we are \n' +
                                    'continually motivated to \n' +
                                    'provide Quality and sublime \n' +
                                    'customer Service \n'}/>
                        <ParagraphText text={'Aminu Chigozie'}/>
                        <ParagraphText className={'patek-green'}
                                       text={[<strong>HEAD</strong>,
                                           <span>HUMAN RESOURCES</span>]}
                        />
                    </Col>
                </Row>
            </Section>


            <Section className={'bg-patek-light-green py-lg-5 '}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6}}>
                        <img src={careerWoman} className='img-fluid' alt="career woman "/>
                    </Col>
                    <Col lg={{span: 6}}>
                        <img src={threeCircleIcon} className='mb-lg-3' alt="three icon cirlce"/>
                        <HeaderText className={'text-left'} text={
                            ['Why you should work\n', <br/>, 'with Us']}/>
                        <ParagraphText className={'mb-lg-5'}
                                       text={'We are up to date with current technology trends in \n' +
                                       'food production, processing and packaging. '}/>
                        <div className="d-flex flex-column ">
                            <div className="list-item mb-lg-4 d-flex align-items-center">
                                <img src={glowingCircle} className={'px-lg-3'} alt="career images"/>
                                <p className='mb-0'>Great Benefits</p>
                            </div>
                            <div className="list-item mb-lg-4 d-flex align-items-center">
                                <img src={glowingCircle} className={'px-lg-3'} alt="career images"/>
                                <p className='mb-0'>Great Benefits</p>
                            </div>
                            <div className="list-item mb-lg-4 d-flex align-items-center">
                                <img src={glowingCircle} className={'px-lg-3'} alt="career images"/>
                                <p className='mb-0'>Great Benefits</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Section>


            <Section className={'bg-gray-gradient-30'}>
                <Row className='pt-lg-5 text-center'>
                    <Col lg={{span: 4, offset:4}}>
                        <TextLabel className='patek-green' positionClass={'justify-content-center'} icon={threeCircleIcon}
                                   text='VACANCIES'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green  text-center'} text={'Open Vacancies'}/>
                        <HeaderText className={'border-top-green-1 d-inline-block hk-grotesk-regular mt-lg-5 pt-lg-5 fs-1-5 text-black text-center'} text={'Patec Food'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 10,offset:1}}>
                        <Accordion items={accordionItems} itemStructure={accordionItemStructure}/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30'}>
                <Row className='pt-lg-5 text-center'>
                    <Col lg={{span: 4, offset:4}}>
                        <HeaderText className={'border-top-green-1 d-inline-block hk-grotesk-regular' +
                        ' mt-lg-5 pt-lg-5 fs-1-5 text-black text-center'} text={'Colorado Farms'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 10,offset:1}}>
                        <Accordion items={accordionItems} itemStructure={accordionItemStructure}/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30'}>
                <Row className='pt-lg-5 text-center'>
                    <Col lg={{span: 4, offset:4}}>
                        <HeaderText className={'border-top-green-1 d-inline-block hk-grotesk-regular' +
                        ' mt-lg-5 pt-lg-5 fs-1-5 text-black text-center'} text={'Quality Packaging'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 10,offset:1}}>
                        <Accordion items={accordionItems} itemStructure={accordionItemStructure}/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30'}>
                <Row className='pt-lg-5 text-center'>
                    <Col lg={{span: 4, offset:4}}>
                        <HeaderText className={'border-top-green-1 d-inline-block hk-grotesk-regular' +
                        ' mt-lg-5 pt-lg-5 fs-1-5 text-black text-center'} text={'Golden Foods'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 10,offset:1}}>
                        <Accordion items={accordionItems} itemStructure={accordionItemStructure}/>
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
        </>
    );
};

export default Career;