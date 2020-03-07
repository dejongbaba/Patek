import React from 'react';
import BannerSection from "../../Components/Commons/BannerSection/BannerSection";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
import ArticlePlaceholder from "../../assets/img/colorado-article-image.png";
import foodImage from "../../assets/img/food-image@2x.png";
import {Col, Row} from "react-bootstrap";
import Header from "../../Components/Commons/Header/Header";
import AboutBgImg from "../../assets/img/subscidiaries-header@2x.png";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import {goldenFood, home} from "../../routes/routes";
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
import {getAllGoldenFood} from "../../Api/api";
import {getImageFromArticle} from "../../Facades/Facade";


const GoldenFood = () => {

    const [goldenFoods, loading] = useApi(getAllGoldenFood, null, 'golden-food');

    return (
        <>
            <Header img={AboutBgImg} type='half'
                    align={'left'} logo={true}>
                <Breadcrumb containerClass={'mb-3 mt-0 mt-lg-5 text-left'}
                            links={
                                [
                                    {name: 'home', path: home},
                                    {name: 'subsidiaries', path: goldenFood}
                                ]
                            }
                />
                <HeaderText className={'text-left pb-5 pb-lg-0 fs-1-5 with-square text-white'}
                            text={'Golden Foods'}/>
            </Header>

            <div className={'py-lg-5 bg-patek-light-green'}>
                <SecondaryNav className={'pt-5'}/>
            </div>


            <Section className={'bg-patek-light-green mh-vh-50'}>
                <BannerContainer>
                    {({bannerImage, loading}) => <BannerSection loading={loading} bgImagePosition={'right'} image={bannerImage || foodImage}/>}
                </BannerContainer>

                <Row className='pt-lg-5'>

                    {
                        goldenFoods.length ?
                            <Col lg={{span: 8, offset: 2}} className={'text-lg-center'}>
                                <TextLabel className='patek-green'
                                           positionClass='justify-content-lg-center mb-3 mb-lg-0'
                                           icon={threeCircleIcon}
                                           text={goldenFoods[0].title}
                                />
                                <HeaderText className={'my-3 mb-lg-1 pb-lg-5 fs-2 fs-lg-2 patek-deep-green '}
                                            text={goldenFoods[0].description}
                                />
                            </Col>

                            : null
                    }

                </Row>
                <Row>


                    {
                        goldenFoods.length ?

                            <>

                                <Col lg={{span: 6}} className={'pr-lg-5'}>
                                    <ArticleImage
                                        image={getImageFromArticle(goldenFoods[1])}
                                        imageClass={'mb-3 mb-lg-0 w-100'}
                                        type={'fluid'}
                                    />
                                </Col>
                                <Col lg={{span: 6}}>
                                    <HeaderText className={'mb-lg-3 mt-lg-5 pt-lg-5 fs-2-5 patek-deep-green '}
                                                text={goldenFoods[1].title}/>
                                    <ParagraphText
                                        className={'mb-5 mb-lg-0'}
                                        text={goldenFoods[1].description}/>

                                </Col>
                            </>

                            : null
                    }

                </Row>
            </Section>

            <Section className={'bg-gray-gradient-30'}>
                <Row className='pt-lg-5'>

                    {
                        goldenFoods.length ?

                            <>

                                <Col lg={{span: 6, order: 6}} className={'pr-lg-5'}>
                                    <ArticleImage
                                        image={getImageFromArticle(goldenFoods[2])}
                                        imageClass={'mb-3 mb-lg-0 w-100'}
                                        type={'fluid'}
                                    />
                                </Col>
                                <Col lg={{span: 6, order: 1}} className={'pr-lg-5'}>
                                    <HeaderText className={'mb-lg-3 mt-lg-5 pt-lg-5 fs-2-5 patek-deep-green '}
                                                text={goldenFoods[2].title}/>
                                    <ParagraphText
                                        className={'mb-5 mb-lg-0'}
                                        text={goldenFoods[2].description}/>
                                </Col>
                            </>

                            : null
                    }
                </Row>
            </Section>

            <Section className={'bg-patek-light-green mh-vh-50'}>
                <Row>
                    {
                        goldenFoods.length ?

                            <>

                                <Col lg={{span: 6}} className={'pr-lg-5'}>
                                    <ArticleImage
                                        image={getImageFromArticle(goldenFoods[3])}
                                        imageClass={'mb-3 mb-lg-0 w-100'}
                                        type={'fluid'}
                                    />
                                </Col>
                                <Col lg={{span: 6}} className={'pr-lg-5 pt-lg-5'}>
                                    <HeaderText className={'mb-lg-3 mt-lg-5 pt-lg-5 fs-2-5 patek-deep-green '}
                                                text={goldenFoods[3].title}/>
                                    <ParagraphText
                                        className={'mb-5 mb-lg-0'}
                                        text={goldenFoods[3].description}/>
                                </Col>
                            </>

                            : null
                    }

                </Row>
            </Section>

            <Section className={'bg-gray-gradient-30 mh-vh-50'}>
                <Row>
                    {
                        goldenFoods.length ?

                            <>
                                <Col lg={{span: 6, order: 6}} className={'pr-lg-5'}>
                                    <ArticleImage
                                        image={getImageFromArticle(goldenFoods[4])}
                                        imageClass={'mb-3 mb-lg-0 w-100'}
                                        type={'fluid'}
                                    />
                                </Col>
                                <Col lg={{span: 6, order: 1}} className={'pr-lg-5 pt-lg-5'}>
                                    <HeaderText className={'mb-lg-3 mt-lg-5 pt-lg-5 fs-2-5 patek-deep-green '}
                                                text={goldenFoods[4].title}/>
                                    <ParagraphText className={'mb-5 mb-lg-0'} text={goldenFoods[4].description}/>
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

export default GoldenFood;