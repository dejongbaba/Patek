import React from 'react';
import Header from "../../Components/Commons/Header/Header";
import AboutBgImg from '../../assets/img/about-banner@2x.png'
import {Col, Row} from "react-bootstrap";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import Section from "../../Components/Commons/Section/Section";
import greenLeafBg from "../../assets/img/green-leaf-bg.svg";
import triLeafImg from "../../assets/img/trileaf-img@2x.png";
import aboutLeaf from "../../assets/img/about-leaf-bg.svg";
import squareLeafIcon from "../../assets/img/square-leaf-img.svg";
import squareServicesIcon from "../../assets/img/square-services-img.svg";
import squareNetworkIcon from "../../assets/img/square-network-img.svg";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import Footer from "../../Components/Commons/Footer/Footer";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import Button from "../../Components/Commons/Button/Button";
import SectionGrid from "../../Components/Commons/SectionGrid/SectionGrid";
import SectionGridItem from "../../Components/Commons/SectionGridItem/SectionGridItem";
import threeCircleIcon from "../../assets/img/three-circle-icon.svg";
import dottedBottomAch from "../../assets/img/dotted-bottom-arch.svg";
import dottedTopAch from "../../assets/img/dotted-top-arch.svg";
import agriCommodity from "../../assets/img/agri-commodity.svg";
import articleImage from "../../assets/img/about-art-img@2x.png";
import multiDimensionalImage from "../../assets/img/multidimensional-img@2x.png";
import SectionText from "../../Components/Commons/Section/SectionText";
import "./about.css";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";
import {patecFood, team} from "../../routes/routes";
import {getImageFromArticle, redirectTo} from "../../Facades/Facade";
import withData from "../../Hoc/withData";
import {getAllAbouts} from "../../Api/api";
import EmptyPlaceholder from "../../Components/Commons/EmptyPlaceHolder/EmptyPlaceholder";
import withDirectors from "../../Hoc/aboutHoc/withDirectors";
import Loader from "../../Components/Commons/Loader/Loader";

const About = ({data, loading, directors, isDirectorsLoading}) => {
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

                <Section bgImg={greenLeafBg} className={'py-lg-2'}>
                    <Row className={'py-lg-5'}>
                        <Col lg={{span: 6, offset: 3}} className={'text-lg-center'}>
                            {data && data.length ? (
                                <>
                                    <TextLabel positionClass={'justify-content-lg-center mb-5'} text={data[3].title}/>
                                    <HeaderText className={'my-lg-3 fs-1-5 fs-lg-2 patek-deep-green '}
                                                text={data[3].subtitle}
                                    />
                                </>
                            ) : <EmptyPlaceholder/>}


                        </Col>
                    </Row>
                </Section>
                <Section className={'bg-gray-gradient-30 py-lg-2 '}>
                    <Row className={'py-lg-3'}>
                        <Col lg={{span: 6, order: 6}}>
                            <ArticleImage type={'fluid'} image={articleImage}/>
                        </Col>
                        <Col lg={{span: 5, order: 1}}>
                            {data && data.length ? (
                                <>
                                    <TextLabel positionClass={'my-lg-5'} text={data[1].title}/>
                                    <HeaderText className={'my-3 fs-2-5 patek-deep-green '}
                                                text={data[1].subtitle}/>
                                    <ParagraphText
                                        text={data[1].description}
                                    />
                                </>
                            ) : <EmptyPlaceholder/>}

                        </Col>

                    </Row>
                </Section>
                <Section className={'bg-patek-light-green py-lg-2'}>
                    <Row className={'py-lg-3'}>
                        <Col lg={{span: 6}}>
                            <ArticleImage type={'fluid'} image={multiDimensionalImage}/>
                        </Col>
                        <Col lg={{span: 6}}>
                            {data && data.length ? (
                                <>
                                    <TextLabel positionClass={'my-lg-5'} text={data[0].title}/>
                                    <HeaderText className={'my-3 fs-2-5 patek-deep-green '}
                                                text={data[0].subtitle}/>
                                    <ParagraphText
                                        text={data[0].description}
                                    />
                                </>
                            ) : <EmptyPlaceholder/>}

                        </Col>
                    </Row>
                </Section>
                <Section className={'bg-patek-light-green py-5 py-lg-2'}>
                    <img src={dottedTopAch}
                         className='position-absolute dotted-arch-position-1 d-none d-lg-block'
                         alt="first floated arch"/>
                    <img src={dottedBottomAch}
                         className='position-absolute dotted-arch-position-2 d-none d-lg-block'
                         alt="first floated arch"/>
                    <Row className={'py-lg-5'}>
                        <Col lg={{span: 6, offset: 3}}>
                            <TextLabel positionClass={'my-lg-5 justify-content-lg-center'} text={'VALUE CHAIN'}/>
                            <HeaderText className={'my-3 fs-2-5 patek-deep-green text-lg-center'}
                                        text={'Our Value Chain'}/>
                        </Col>
                    </Row>
                    <Row className='my-lg-5 py-lg-3'>
                        <Col lg={{span: 5, offset: 1}}>
                            <div className='mb-lg-5'>
                                <SectionText icon={squareLeafIcon}
                                             descType={'list'}
                                             textAlign={'left'}
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
                            <div className="px-lg-5 ml-lg-5 pt-lg-3">
                                <SectionText icon={squareServicesIcon} descType={'list'}
                                             textAlign={'left'}
                                             title={'Services'}
                                             description={
                                                 <ul className={'list-unstyled px-lg-0'}>
                                                     <li>Value -added products</li>
                                                     <li> Sales and distribution</li>
                                                 </ul>}
                                />
                            </div>
                        </Col>
                        <Col lg={{span: 5, offset: 1}}>
                            <div className="mt-lg-5 pt-lg-3">
                                <SectionText icon={squareNetworkIcon} descType={'list'}
                                             textAlign={'left'} title={'Supply Network'}
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
                    </Row>
                </Section>
                <Section className={'bg-gray-gradient-30 py-5 py-lg-3 '}>
                    <Row className={'py-lg-3'}>

                        {data && data.length ? (
                            <>
                                <Col lg={{span: 6}}>
                                    <TextLabel positionClass={'my-lg-5 justify-content-center'} text={data[2].title}/>
                                    <HeaderText className={'my-3 fs-2-5 patek-deep-green text-center'}
                                                text={data[2].subtitle}/>
                                    <img src={triLeafImg} className='img-fluid' alt="green leaf image"/>
                                </Col>
                                <Col lg={{span: 6}}>
                                    <img src={agriCommodity} className='img-fluid' alt="agri commodity"/>
                                    <ParagraphText className={'fs-1-2'} text={
                                        <> {data[2].description} <br/>
                                            <img src={threeCircleIcon} className={'my-3'} alt="three circles"/> <br/>
                                        </>}
                                    />
                                </Col>
                            </>
                        ) : <EmptyPlaceholder/>}


                    </Row>
                </Section>
                <Section className={'bg-patek-light-green py-5 py-lg-3'}>
                    <Row className={'py-lg-3'}>
                        <Col lg={{span: 12}}>
                            <TextLabel positionClass={'my-lg-5 justify-content-lg-center'} text={'DIRECTORS'}/>
                            <HeaderText className={'mt-3 mb-lg-5 fs-2-5 patek-deep-green text-lg-center'}
                                        text={'Our Board of Directors'}/>
                            <SectionGrid>

                                {directors && directors.length ?
                                    directors.map((dir, i) => <SectionGridItem key={i} logo={getImageFromArticle(dir)}
                                                                               text={dir.role} title={dir.name}/>)
                                    : <EmptyPlaceholder/>}

                            </SectionGrid>
                        </Col>
                    </Row>
                </Section>
                <Section className={'bg-patek-light-green py-5  py-lg-3'}>
                    <Row className={'py-lg-3'}>
                        <Col lg={{span: 6}}>
                            <TextLabel positionClass={'my-5'} text={'Products'}/>
                            <HeaderText
                                className={'my-3 mb-5 mb-lg-3 fs-2-5 position-relative z-index-1 patek-deep-green '}
                                text={['Patec\'s products &', <br/>, '\nServices']}
                            />
                            <Button className={'position-relative z-index-1'} onClick={() => redirectTo(patecFood)}
                                    text={'See Products'}/>
                        </Col>
                    </Row>
                    <img src={aboutLeaf} className='position-absolute w-75 d-none d-lg-block left-left'
                         alt="meet me background"/>
                </Section>
                <CareerSection header={'Meet the Team'} button={'Meet Us'} func={() => redirectTo(team)}/>
                <SubscriptionSection/>
                <Footer/>
            </Loader>
        </>
    );
};
const AboutWithData = withData(About, getAllAbouts);
const AboutWithDirectors = withDirectors(AboutWithData);

export default AboutWithDirectors;