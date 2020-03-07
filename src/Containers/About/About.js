import React from 'react';
import Header from "../../Components/Commons/Header/Header";
import AboutBgImg from '../../assets/img/about-banner@2x.png'
import {Col, Row} from "react-bootstrap";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import Section from "../../Components/Commons/Section/Section";
import greenLeafBg from "../../assets/img/green-leaf-bg.svg";
import squareLeafIcon from "../../assets/img/square-leaf-img.svg";
import squareServicesIcon from "../../assets/img/square-services-img.svg";
import squareNetworkIcon from "../../assets/img/square-network-img.svg";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import Footer from "../../Components/Commons/Footer/Footer";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import threeCircleIcon from "../../assets/img/three-circle-icon.svg";
import dottedTopAch from "../../assets/img/arrow.png";
import articleImage from "../../assets/img/about-art-img@2x.png";
import multiDimensionalImage from "../../assets/img/multidimensional-img2x.png";
import SectionText from "../../Components/Commons/Section/SectionText";
import "./about.css";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";
import {contact} from "../../routes/routes";
import withData from "../../Hoc/withData";
import {getAllAbouts} from "../../Api/api";
import EmptyPlaceholder from "../../Components/Commons/EmptyPlaceHolder/EmptyPlaceholder";
import Loader from "../../Components/Commons/Loader/Loader";
import withArticlesAndPrinciples from "../../Hoc/homeHoc/withArticlesAndPrinciples";

const About = ({data, loading, directors, principles, isDirectorsLoading, ...otherProps}) => {

    return (
        <>
            <Loader loading={loading}>
                <Header img={AboutBgImg} type='half'>
                    <Breadcrumb containerClass={'mb-5'}
                                links={[{name: 'home', path: '/'},
                                    {name: 'about', path: '/about'}]}
                    />
                    <TextLabel positionClass={'justify-content-center'}
                               text={'we are patec'}
                    />
                    <HeaderText className={'text-white'} text={'About Us'}/>
                </Header>

                <Section bgImg={greenLeafBg} className={'py-5 pt-lg-5 pb-lg-3'}>
                    <Row>
                        <Col lg={{span: 6, order: 6}}>
                            {data && data.length ? (
                                <ArticleImage imageClass={'w-100'} type={'fluid'} image={articleImage}/>
                            ) : <EmptyPlaceholder/>}
                        </Col>

                        <Col lg={{span: 5, offset: 1, order: 1}}>
                            {data && data.length ? (
                                <>
                                    <TextLabel positionClass={'mb-3'} text={data[3].title}/>

                                    <ParagraphText
                                        text={data[3].description}
                                    />
                                </>
                            ) : <EmptyPlaceholder/>}
                        </Col>


                    </Row>
                </Section>

                <Section className={'bg-patek-light-green py-3 py-lg-0'}>
                    <Row className='pt-5 px-lg-5 pb-0'>
                        <Col lg={{span: 4, offset: 4}}>
                            <TextLabel className='patek-green'
                                       positionClass={'justify-content-lg-center mb-3 mb-lg-0'}
                                       icon={threeCircleIcon} text='DYNAMIC'/>
                            <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green text-lg-center'}
                                        text={'Vision, Mission & Core Values'}/>
                        </Col>
                    </Row>
                    <Row className={'my-3 mt-lg-5 mb-lg-5'}>
                        {
                            principles && principles.length ?
                                principles.map((p, i) =>
                                    <Col key={i} lg={{span: 4}}>
                                        <SectionText
                                            icon={i === 0 ? require('../../assets/img/Group 297.svg') :
                                                i === 1 ? require('../../assets/img/Group 298.svg') :
                                                    i === 2 ? require('../../assets/img/Group 299.svg') : ''}
                                            title={p.name}
                                            description={p.description}
                                        />
                                    </Col>
                                )
                                : <EmptyPlaceholder/>
                        }
                    </Row>
                </Section>
                <Section className={'bg-gray-gradient-30 py-3 py-lg-0'}>
                    <Row>
                        <Col lg={{span: 5, offset: 1, order: 6}}>
                            <ArticleImage imageClass={'w-50'} type={'fluid'} image={articleImage}/>
                        </Col>
                        <Col lg={{span: 5, offset: 1, order: 1}}>
                            {data && data.length ? (
                                <>
                                    <TextLabel positionClass={'mt-3 mt-lg-5 mb-3'} text={data[1].title}/>
                                    {/*<HeaderText className={' fs-2-5 patek-deep-green '}*/}
                                    {/*            text={data[1].subtitle}/>*/}
                                    <ParagraphText
                                        text={data[1].description}
                                    />
                                </>
                            ) : <EmptyPlaceholder/>}

                        </Col>

                    </Row>
                </Section>
                <Section className={'bg-patek-light-green py-5 pt-lg-5 pb-lg-2'}>
                    <Row>
                        <Col lg={{span: 4, offset: 2}}>
                            <ArticleImage type={'fluid'} imageClass={'w-70'} image={multiDimensionalImage}/>
                        </Col>
                        <Col lg={{span: 5}}>
                            {data && data.length ? (
                                <>
                                    <TextLabel positionClass={'mt-3 mt-lg-5 mb-3'} text={data[0].title}/>
                                    {/*<HeaderText className={'fs-2-5 patek-deep-green '}*/}
                                    {/*            text={data[0].subtitle}/>*/}
                                    <ParagraphText
                                        text={data[0].description}
                                    />
                                </>
                            ) : <EmptyPlaceholder/>}

                        </Col>
                    </Row>
                </Section>
                <Section className={'bg-patek-light-green py-lg-0'}>
                    <img src={dottedTopAch}
                         className='position-absolute dotted-arch-position-1'
                         alt="first floated arch"/>
                    <img src={dottedTopAch}
                         className='position-absolute dotted-arch-position-2'
                         alt="first floated arch"/>
                    <Row className={'pb-lg-3'}>
                        <Col lg={{span: 6, offset: 3}}>
                            <TextLabel positionClass={'mt-lg-5 mb-3 justify-content-lg-center'}
                                       text={'VALUE CHAIN'}/>
                        </Col>
                    </Row>
                    <Row className='py-lg-5'>
                        <Col lg={{span: 4}}>
                            <div className='mb-lg-5'>
                                <SectionText icon={squareLeafIcon}
                                             descType={'list'}
                                             textAlign={'left'}
                                             bigIcon={true}
                                             iconClass={'w-22'}
                                             title={'Farming & Manufacturing'}
                                             description={
                                                 <ul className={'list-unstyled px-lg-0'}>
                                                     <li>Broodstock</li>
                                                     <li>Cattle farming</li>
                                                     <li>Vegetable farming</li>
                                                     <li>Aquaculture farming</li>
                                                 </ul>}
                                />
                            </div>
                        </Col>

                        <Col lg={{span: 4}}>
                            <div>
                                <SectionText icon={squareNetworkIcon} descType={'list'}
                                             textAlign={'left'} title={'Supply Network'}
                                             bigIcon={true}
                                             description={
                                                 <ul className={'list-unstyled px-lg-0'}>
                                                     <li>Primary processing</li>
                                                     <li>Merchandising</li>
                                                     <li>Logistics</li>
                                                     <li>Recycling</li>
                                                 </ul>
                                             }
                                />
                            </div>

                        </Col>
                        <Col lg={{span: 4}}>
                            <div>
                                <SectionText icon={squareServicesIcon} descType={'list'}
                                             textAlign={'left'}
                                             bigIcon={true}
                                             title={'Services'}
                                             description={
                                                 <ul className={'list-unstyled px-lg-0'}>
                                                     <li>Value -added products</li>
                                                     <li> Sales and distribution</li>
                                                 </ul>}
                                />
                            </div>
                        </Col>
                    </Row>
                </Section>
                <CareerSection header={'Meet the Team'} button={'Meet Us'} func={() => otherProps.history.push(contact)}/>
                <SubscriptionSection/>
                <Footer/>
            </Loader>
        </>
    );
};

export default withArticlesAndPrinciples(withData(About, getAllAbouts));