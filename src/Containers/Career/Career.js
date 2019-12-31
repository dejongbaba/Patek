import React from 'react';
import Header from "../../Components/Commons/Header/Header";
import careerBanner from '../../assets/img/career-banner@2x.png'
import {Col, Row} from "react-bootstrap";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import Section from "../../Components/Commons/Section/Section";
import greenLeafBg from "../../assets/img/green-leaf-bg.svg";
import meetMeBg from "../../assets/img/Meet-me-bg@2x.png";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import Footer from "../../Components/Commons/Footer/Footer";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import rolePlaceholderimg from "../../assets/img/role-placeholder-img@2x.png";
import glowingCircle from "../../assets/img/glowingCircle@2x.png";
import careerWoman from "../../assets/img/career-woman@2x.png";
import threeCircleIcon from "../../assets/img/three-circle-icon.svg"
import "./career.css";
import {career, home} from "../../routes/routes";
import leafBGImg from "../../assets/img/green-leaf-bg-right.svg";
import Accordion from "../../Components/Commons/Accordion/Accordion";
import CarouselLeaf from "../../assets/img/carousel-leaf-img@2x.png";
import Button from "../../Components/Commons/Button/Button";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";
import {useGetCareers, useGetJobs} from "../../Effects/Effects";
import {getColoradoFarmsJobs, getPatekFoodJobs, getQualityPackageJobs, getGoldenFoodJobs} from "../../Facades/Facade";


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
        title: 'Golden TraveliFood and Beverage -',
        desc: 'Quality Packaging aims to be an industry leader in recycling \n' +
            'of waste materials, manufacturing of packaging solutions.\n' +
            'The company will provide solutions that will be utilized by\n' +
            'a wide range of industries such as retail, food & beverages,\n' +
            'pharmaceutical, agriculture, construction.',
        link: '',

    }];

const accordionItemStructure = (j) => <ParagraphText text={j.Description} className={'text-green-1 pt-lg-5 mb-lg-5'}/>;

const Career = () => {


    const [jobs, setJobs] = useGetJobs();

    const pfJobs = getPatekFoodJobs(jobs);
    const qpJobs = getQualityPackageJobs(jobs);
    const cfJobs = getColoradoFarmsJobs(jobs);
    const gfJobs = getGoldenFoodJobs(jobs);

    console.log('all jobs',jobs,pfJobs,qpJobs,cfJobs,gfJobs);

    return (
        <>
            <Header img={careerBanner} type='half'>
                        <Breadcrumb containerClass={'mb-lg-5'}
                                    links={
                                        [
                                            {name: 'home', path: home},
                                            {name: 'career', path: career}
                                        ]
                                    }/>
                        <TextLabel positionClass={'justify-content-center'} text={'JOIN THE TEAM'}/>
                        <HeaderText className={'text-white with-square'} text={'Careers at Patec'}/>
            </Header>
            <Section className={'py-lg-5 '} bgImg={greenLeafBg}>
                <Row className={'py-5'}>
                    <Col lg={{span: 6}}>
                        <img src={rolePlaceholderimg}
                             className='mt-lg-5 mb-5 mb-lg-0 pt-lg-5 img-fluid'
                             alt="woman in office"
                        />
                    </Col>
                    <Col lg={{span: 6}}>
                        <TextLabel positionClass={'my-5 '}
                                   text={'WORKING AT PATEC'}
                        />
                        <HeaderText className={'mb-lg-5 fs-1-5 fs-lg-2-5'}
                                    text={'" At Patec group, we are \n' +
                                    'continually motivated to \n' +
                                    'provide Quality and sublime \n' +
                                    'customer Service"'}
                        />
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
                        <img src={threeCircleIcon} className='mb-3' alt="three icon cirlce"/>
                        <HeaderText className={'text-left fs-1-5 fs-lg-2-5'} text={
                            ['Why you should work\n', <br/>, 'with Us']}/>
                        <ParagraphText className={'mb-lg-5'}
                                       text={'We are up to date with current technology trends in \n' +
                                       'food production, processing and packaging. '}/>
                        <div className="d-flex flex-column ">
                            <div className="list-item mb-4 d-flex align-items-center">
                                <img src={glowingCircle} className={'px-3'} alt="career images"/>
                                <p className='mb-0'>Great Benefits</p>
                            </div>
                            <div className="list-item mb-4 d-flex align-items-center">
                                <img src={glowingCircle} className={'px-3'} alt="career images"/>
                                <p className='mb-0'>Great Benefits</p>
                            </div>
                            <div className="list-item mb-4 d-flex align-items-center">
                                <img src={glowingCircle} className={'px-3'} alt="career images"/>
                                <p className='mb-0'>Great Benefits</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Section>


            <Section className={'bg-gray-gradient-30'}>
                <Row className='pt-lg-5 text-center'>
                    <Col lg={{span: 4, offset:4}}>
                        <TextLabel className='patek-green'
                                   positionClass={'justify-content-center mb-4 mb-lg-0'}
                                   icon={threeCircleIcon}
                                   text='VACANCIES'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green  text-center'} text={'Open Vacancies'}/>
                        <HeaderText className={'border-top-green-1 d-inline-block ' +
                        'hk-grotesk-regular mt-lg-5 pt-5 fs-1-5 fs-lg-2-5 text-black text-center'} text={'Patec TraveliFood'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 10,offset:1}}>
                        <Accordion items={pfJobs} itemStructure={accordionItemStructure}/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30'}>
                <Row className='pt-lg-5 text-center'>
                    <Col lg={{span: 4, offset:4}}>
                        <HeaderText className={'border-top-green-1 d-inline-block hk-grotesk-regular' +
                        ' mt-lg-5 pt-5 fs-1-5 fs-lg-2-5 text-black text-center'} text={'Colorado Farms'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 10,offset:1}}>
                        <Accordion items={cfJobs} itemStructure={accordionItemStructure}/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30'}>
                <Row className='pt-lg-5 text-center'>
                    <Col lg={{span: 4, offset:4}}>
                        <HeaderText className={'border-top-green-1 d-inline-block hk-grotesk-regular' +
                        ' mt-lg-5 pt-5 fs-1-5 fs-lg-2-5 text-black text-center'} text={'Quality Packaging'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 10,offset:1}}>
                        <Accordion items={qpJobs} itemStructure={accordionItemStructure}/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30'}>
                <Row className='pt-lg-5 text-center'>
                    <Col lg={{span: 4, offset:4}}>
                        <HeaderText className={'border-top-green-1 fs-1-5 fs-lg-2-5 d-inline-block hk-grotesk-regular' +
                        ' mt-lg-5 pt-5 fs-1-5 text-black text-center'} text={'Golden Foods'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 10,offset:1}}>
                        <Accordion items={gfJobs} itemStructure={accordionItemStructure}/>
                    </Col>
                </Row>
            </Section>


            <CareerSection header={'" An Amazing Company at the frontiers of agro allied \n' +
            'Development in West AFrica "'} />
            <SubscriptionSection/>
            <Footer/>
        </>
    );
};

export default Career;