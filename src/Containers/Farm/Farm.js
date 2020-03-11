import React from 'react';
import BannerSection from "../../Components/Commons/BannerSection/BannerSection";
import foodImage from "../../assets/img/food-image@2x.png";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
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
import BannerContainer from "../BannerContainer/BannerContainer";
import {useApi} from "../../Effects/Effects";
import {getAllColoradoFarms} from "../../Api/api";
import {getImageFromArticle} from "../../Facades/Facade";


const Farm = () => {

    const [coloradoFarms, loading] = useApi(getAllColoradoFarms, null, 'colorado-farm');

    console.log('colorado Farms', coloradoFarms);
    return (
        <>
            <Header img={AboutBgImg} type='half'
                    align={'left'} logo={true}>
                <Breadcrumb containerClass={'mb-3 mt-0 mt-lg-5 text-left'}
                            links={
                                [
                                    {name: 'home', path: home},
                                    {name: 'subsidiaries', path: coloradoFarm}
                                ]
                            }
                />
                <HeaderText className={'pb-5 pb-lg-0 text-left fs-1-5 with-square text-white'}
                            text={'Colorado Farms'}/>
            </Header>

            <div className={'py-lg-5 bg-patek-light-green'}>
                <SecondaryNav className={'pt-5'}/>
            </div>


            <Section className={'bg-patek-light-green mh-vh-50'}>
                <BannerContainer>
                    {({bannerImage, loading}) => <BannerSection loading={loading} bgImagePosition={'right'}
                                                                image={bannerImage || foodImage}
                    />}
                </BannerContainer>
                {
                    coloradoFarms.length ?
                        <Col lg={{span: 8, offset: 2}} className={'text-lg-center'}>

                            <TextLabel className='patek-green'
                                       positionClass='justify-content-lg-center mb-3 mb-lg-0'
                                       icon={threeCircleIcon} text={coloradoFarms[0].title}/>
                            <HeaderText className={'my-5 fs-2 fs-lg-2 patek-deep-green '}
                                        text={coloradoFarms[0].description}
                            />
                        </Col>
                        : null
                }
                <Row className='pt-lg-5'>

                </Row>
                <Row>

                    {
                        coloradoFarms.length ?
                            <>
                                <Col lg={{span: 6}} className={'pr-lg-5'}>
                                    <ArticleImage
                                        image={getImageFromArticle(coloradoFarms[1])}
                                        type={'fluid'}
                                        imageClass={'w-100'}
                                    />
                                </Col>
                                <Col lg={{span: 6}}>
                                    {/*<ParagraphText*/}
                                    {/*    className={'patek-deep-green mt-5 pt-lg-5 mt-lg-0 mb-3'}*/}
                                    {/*    text={'- Some of our Packaging Solutions'}*/}
                                    {/*/>*/}
                                    {/*<TextLabel className='patek-green'*/}
                                    {/*           positionClass={'mb-3 mb-lg-0'}*/}
                                    {/*           icon={threeCircleIcon} text='WHO WE ARE'/>*/}
                                    <HeaderText className={'my-3 mt-lg-5 mb-lg-2 pt-lg-5 fs-2-5 patek-deep-green '}
                                                text={coloradoFarms[1].title}/>
                                    <ParagraphText text={coloradoFarms[1].description}/>
                                </Col>
                            </>
                            : null
                    }

                </Row>
            </Section>

            <Section className={'bg-gray-gradient-30'}>
                <Row className='pt-lg-5 mb-5 mb-lg-0'>

                    {
                        coloradoFarms.length ?
                            <>
                                <Col lg={{span: 6, order: 6}} className={'pr-lg-5'}>
                                    <ArticleImage
                                        image={getImageFromArticle(coloradoFarms[2])}
                                        imageClass={'w-100'}
                                        type={'fluid'}
                                    />
                                </Col>
                                <Col lg={{span: 6, order: 1}} className={'pr-lg-5'}>
                                    <TextLabel className='patek-green'
                                               positionClass={'mb-3 mt-5 pt-lg-5 mb-lg-0'}
                                               icon={threeCircleIcon} text='WHO WE ARE'/>
                                    <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '}
                                                text={coloradoFarms[2].title}/>
                                    <ParagraphText
                                        text={coloradoFarms[2].description}/>
                                </Col>
                            </>
                            : null
                    }

                </Row>
            </Section>

            <Section className={'bg-patek-light-green mh-vh-50'}>
                <Row className='pt-lg-5 mb-5 mb-lg-0'>

                    {
                        coloradoFarms.length ?
                            <>
                                <Col lg={{span: 6}} className={'pr-lg-5'}>
                                    <ArticleImage
                                        image={getImageFromArticle(coloradoFarms[3])}
                                        type={'fluid'}
                                        imageClass={'w-100'}

                                    />
                                </Col>
                                <Col lg={{span: 6}} className={'pr-lg-5'}>
                                    <TextLabel className='patek-green'
                                               positionClass={'mb-3 mt-5 pt-lg-5 mb-lg-0'}
                                               icon={threeCircleIcon} text='WHO WE ARE'/>
                                    <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '}
                                                text={coloradoFarms[3].title}/>
                                    <ParagraphText
                                        text={coloradoFarms[3].description}/>
                                </Col>
                            </>
                            : null
                    }

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