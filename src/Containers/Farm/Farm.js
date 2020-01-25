import React from 'react';
import BannerSection from "../../Components/Commons/BannerSection/BannerSection";
import foodImage from "../../assets/img/food-image@2x.png";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
import ArticlePlaceholder from "../../assets/img/colorado-article-image.png";
import {Col, Row} from "react-bootstrap";
import Header from "../../Components/Commons/Header/Header";
import AboutBgImg from "../../assets/img/about-bg-image.svg";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import {coloradoFarm, home} from "../../routes/routes";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import threeCircleIcon from "../../assets/img/three-circle-icon.svg";
import Section from "../../Components/Commons/Section/Section";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import Footer from "../../Components/Commons/Footer/Footer";
import SecondaryNav from "../../Components/Commons/Navbar/SecondaryNav";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";


const Farm = () => {
    return (
        <>
            <Header img={AboutBgImg} type='half'
                    align={'left'} logo={true}>
                <Breadcrumb containerClass={'mb-5 mt-0 mt-lg-5 text-left'}
                            links={
                                [
                                    {name: 'home', path: home},
                                    {name: 'subsidiaries', path: coloradoFarm}
                                ]
                            }
                />
                <HeaderText className={'text-left fs-1-5 with-square text-white'}
                            text={'Colorado Farms'}/>
            </Header>

            <div className={'py-lg-5 bg-patek-light-green'}>
                <SecondaryNav className={'pt-5'} />
            </div>


            <Section className={'bg-patek-light-green mh-vh-50'}>
                <BannerSection bgImagePosition={'right'} image={foodImage}/>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 8, offset: 2}} className={'text-lg-center'}>
                        <TextLabel className='patek-green'
                                   positionClass='justify-content-lg-center mb-5 mb-lg-0'
                                   icon={threeCircleIcon} text='COLORADO FARMS'/>
                        <HeaderText className={'my-5 pb-lg-5 fs-2 fs-lg-2 patek-deep-green '}
                                    text={'Colorado farms is a livestock production and \n' +
                                    'processing business aimed at improving the quality of \n' +
                                    'beef sold in Nigeria'}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 6}} className={'pr-lg-5'}>
                        <ArticleImage
                            image={ArticlePlaceholder}
                            type={'fluid'}
                        />
                    </Col>
                    <Col lg={{span: 6}}>
                        <ParagraphText
                            className={'patek-deep-green mt-5 mt-lg-0 mb-5'}
                            text={'- Some of our Packaging Solutions'}
                        />
                        <TextLabel className='patek-green'
                                   positionClass={'mb-5 mb-lg-0'}
                                   icon={threeCircleIcon} text='WHO WE ARE'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '}
                                    text={'Retail (food & Beverages)'}/>
                        <ParagraphText
                            text={'Patec Group is a dynamic organization that focuses \n' +
                            'on providing home grown solutions to some of Nigeria’s \n' +
                            'needs within the food production, processing and \n' +
                            'packaging industries.'}/>

                    </Col>
                </Row>
            </Section>

            <Section className={'bg-gray-gradient-30'}>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 6, order: 6}} className={'pr-lg-5'}>
                        <ArticleImage
                            image={ArticlePlaceholder}
                            type={'fluid'}
                        />
                    </Col>
                    <Col lg={{span: 6, order: 1}} className={'pr-lg-5'}>
                        <TextLabel className='patek-green'
                                   positionClass={'mb-5 mt-5 mt-lg-0 mb-lg-0'}
                                   icon={threeCircleIcon} text='WHO WE ARE'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '}
                                    text={'Pharmaceutical'}/>
                        <ParagraphText
                            text={'Patec Group is a dynamic organization that focuses \n' +
                            'on providing home grown solutions to some of Nigeria’s \n' +
                            'needs within the food production, processing and \n' +
                            'packaging industries.'}/>
                    </Col>
                </Row>
            </Section>

            <Section className={'bg-patek-light-green mh-vh-50'}>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 6}} className={'pr-lg-5'}>
                        <ArticleImage
                            image={ArticlePlaceholder}
                            type={'fluid'}
                        />
                    </Col>
                    <Col lg={{span: 6}} className={'pr-lg-5'}>
                        <TextLabel className='patek-green'
                                   positionClass={'mb-5 mt-5 mt-lg-0 mb-lg-0'}
                                   icon={threeCircleIcon} text='WHO WE ARE'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '}
                                    text={'Agriculture'}/>
                        <ParagraphText
                            text={'Patec Group is a dynamic organization that focuses \n' +
                            'on providing home grown solutions to some of Nigeria’s \n' +
                            'needs within the food production, processing and \n' +
                            'packaging industries.'}/>
                    </Col>
                </Row>
            </Section>
            <CareerSection header={'" An Amazing Company at the frontiers of agro allied \n' +
            'Development in West AFrica "'}
            />
            <SubscriptionSection/>
            <Footer/>
        </>
    );
};

export default Farm;