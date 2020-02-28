import React, {useState} from 'react';
import Header from "../../Components/Commons/Header/Header";
import careerBanner from '../../assets/img/career-banner@2x.png'
import {Col, Row} from "react-bootstrap";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import Section from "../../Components/Commons/Section/Section";
import greenLeafBg from "../../assets/img/green-leaf-bg.svg";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import Footer from "../../Components/Commons/Footer/Footer";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import rolePlaceholderimg from "../../assets/img/role-placeholder-img@2x.png";
import careerWoman from "../../assets/img/career-woman2x.png";
import threeCircleIcon from "../../assets/img/three-circle-icon.svg"
import "./career.css";
import {career, home} from "../../routes/routes";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";
import {useGetJobs} from "../../Effects/Effects";
import {getColoradoFarmsJobs, getGoldenFoodJobs, getPatekFoodJobs, getQualityPackageJobs} from "../../Facades/Facade";
import PatecModal from "../../Components/Commons/Modal/PatecModal";
import CareerForm from "./CareerForm";


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

const accordionItemStructure = (j) => <ParagraphText type={'pre'} text={j.Description}
                                                     className={'text-green-1 pt-lg-5 mb-lg-5'}/>;

const Career = () => {


    const [jobs, setJobs] = useGetJobs();
    const pfJobs = getPatekFoodJobs(jobs);
    const qpJobs = getQualityPackageJobs(jobs);
    const cfJobs = getColoradoFarmsJobs(jobs);
    const gfJobs = getGoldenFoodJobs(jobs);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const hrRole = <>
        <strong>HEAD</strong>
        <br/>
        <span>HUMAN RESOURCES</span>
    </>;
    return (
        <>
            <PatecModal className={'career--modal'}
                        header={false}
                        modalHeading={'Apply'}
                        show={show}
                        closeModal={handleClose}>
                <CareerForm/>
            </PatecModal>
            <Header img={careerBanner} type='half'>
                <Breadcrumb containerClass={'mb-5'}
                            links={
                                [
                                    {name: 'home', path: home},
                                    {name: 'career', path: career}
                                ]
                            }/>
                <TextLabel positionClass={'justify-content-center'} text={'JOIN THE TEAM'}/>
                <HeaderText className={'text-white with-square'} text={'Careers at Patec'}/>
            </Header>
            <Section className={'bg-patek-light-green career--section py-5'}>
                <Row className={'py-lg-3 pb-lg-5'}>
                    <Col lg={{span: 6}}>
                        <img src={careerWoman} className='img-fluid w-70 mb-3 mb-lg-0' alt="career woman "/>
                    </Col>
                    <Col lg={{span: 5}}>
                        <img src={threeCircleIcon} alt="three icon cirlce"/>
                        <HeaderText
                            className={'text-left career--article-header mt-lg-2 fs-1-5 fs-lg-2-5'}
                            text={'PATEC GROUP LIFE'}/>
                        <ParagraphText className={'mb-5 mb-lg-0'} text={'When you join Patec Group you will have the opportunity' +
                                       ' to improve your professional skills; develop industry knowledge;' +
                                       ' gain career growth and contribute to different industries across ' +
                                       'the Agriculture and Food processing sector. We offer training ' +
                                       'and development services as well as team bonding exercises to' +
                                       ' improve productivity and collaboration. You’ll join a team of' +
                                       ' dynamic young experts from a variety of backgrounds, whose attitude, ' +
                                       'knowledge and imagination sets them apart.' +
                                       'At Patec group performance and hard work are paramount. '}/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 5,offset:1, order: 6}}>
                        <img src={careerWoman} className='img-fluid mb-3 mb-lg-0' alt="career woman "/>
                    </Col>
                    <Col lg={{span: 6, order: 1}}>
                        <img src={threeCircleIcon} alt="three icon cirlce"/>
                        <HeaderText
                            className={'text-left career--article-header fs-1-5 fs-lg-2-5'}
                            text={'WHAT WE LOOK FOR'}
                        />
                        <ParagraphText className={'mb-5 mb-lg-0'} text={'We hire exceptional people that seek after innovation ' +
                        'and are passionate about the development and sustainability of' +
                        ' Nigeria’s food production; processing and packaging industry.' +
                        ' We welcome experienced professionals with bachelors’ degrees' +
                        ' and excellent academic records.\n' +
                        'We are developing an amazing workforce of Business analysts: Financial analysts;' +
                        ' Project managers; Plant managers; \nConstruction workers and people who thrive ' +
                        'in entrepreneurial environments that are enthusiastic about providing home-grown ' +
                        'solutions for the needs of Nigerians. '}
                        />
                    </Col>
                </Row>
            </Section>


            <Section className={'py-5'} bgImg={greenLeafBg}>
                <Row>
                    <Col lg={{span: 5}}>
                        <img src={rolePlaceholderimg}
                             className='mt-lg-0 mb-5 mb-lg-0 pt-lg-3 img-fluid'
                             alt="woman in office"
                        />
                    </Col>
                    <Col lg={{span: 5}}>
                        <TextLabel positionClass={'my-3'}
                                   text={'WORKING AT PATEC'}
                        />
                        <HeaderText className={'mb-lg-3 fs-1-5 fs-lg-2-5'}
                                    text={'" At Patec group, we are \n' +
                                    'continually motivated to \n' +
                                    'provide Quality and sublime \n' +
                                    'customer Service"'}
                        />
                        <ParagraphText text={'Aminu Chigozie'}/>
                        <ParagraphText className={'patek-green'}
                                       text={hrRole}
                        />
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30'}>
                <Row className='pt-5 text-center'>
                    <Col lg={{span: 4, offset: 4}}>
                        <TextLabel className='patek-green'
                                   positionClass={'justify-content-center mb-4 mb-lg-0'}
                                   icon={threeCircleIcon}
                                   text='VACANCIES'/>
                        <HeaderText
                            className={'my-lg-3 fs-2-5 patek-deep-green  text-center'}
                            text={'Open Vacancies'}
                        />
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 10, offset: 1}}>
                        <div className="job--card">
                            <h1 className={'job--card-title'}>Associate Director</h1>
                            <p className={'job--card-description'}>
                                Our expanding company is seeking to hire an Operations
                                Manager to join our leadership team. You will be in charge of providing inspired
                                leadership for the operation for one of our organization's lines of business,
                                which involves making important policy and strategic decisions,
                                as well as the development and implementation of operational
                                policies and procedures.
                            </p>
                            <span onClick={handleShow} className='job--link'>Apply Now</span>

                        </div>
                    </Col>
                </Row>
            </Section>
            <CareerSection header={'"An Amazing Company at the frontiers of agro allied \n' +
            'Development in West AFrica "'}/>
            <SubscriptionSection/>
            <Footer/>
        </>
    );
};

export default Career;