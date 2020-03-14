import React from 'react';
import headerImgOne from "../../assets/img/header-bg-one@2x.png"
import threeCircleIcon from "../../assets/img/three-circle-icon.svg"
import fadedLeaf from "../../assets/img/faded-leave.svg"
import greenLeaf from "../../assets/img/green-leaf.svg"
import CarouselLeaf from "../../assets/img/carousel-leaf-img@2x.png"
import treeBranches from "../../assets/img/tree-branches.svg"
import leafBGImg from "../../assets/img/green-leaf-bg-right.svg"
import greenLeafBg from "../../assets/img/green-leaf-bg.svg"
import avocadoCircle from "../../assets/img/avocado-circle-icon.svg"
import homePageArtImage from "../../assets/img/homepage-article-img2x.png"
import Header from "../../Components/Commons/Header/Header";
import {Col, Row} from "react-bootstrap";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import Section from "../../Components/Commons/Section/Section";
import Button from "../../Components/Commons/Button/Button";
import SectionText from "../../Components/Commons/Section/SectionText";
import SlideCarousel from "../../Components/Commons/Carousel/SlideCarousel";
import Footer from "../../Components/Commons/Footer/Footer";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
import {getImageFromArticle, redirectTo} from "../../Facades/Facade";
import withData from "../../Hoc/withData";
import {getAllHomeContent} from "../../Api/api";
import withArticlesAndPrinciples from "../../Hoc/homeHoc/withArticlesAndPrinciples";
import EmptyPlaceholder from "../../Components/Commons/EmptyPlaceHolder/EmptyPlaceholder";
import Loader from "../../Components/Commons/Loader/Loader";
import {about} from "../../routes/routes";
import {useScrollToTop} from "../../Effects/Effects";


const Home = ({data, articleLoading, firstFourArticles,...props}) => {

    const valueText = 'Patec Group, founded in 2010 and headquartered \n' +
        'in Lagos is Africa\'s leading agro-allied conglomerate\n' +
        'in the areas of production, processing, packaging and\n' +
        'distribution of food products and agro commodities\n' +
        'poised to contribute the food security in Africa. ';


    useScrollToTop();

    return (
        <Loader loading={articleLoading}>
            <div>
                <Header className='position-relative overflow-y-hidden overflow-x-hidden'
                        img={headerImgOne}
                        absRightImg={treeBranches}
                        primaryLeftImg={greenLeaf}
                        SecondaryLeftImg={fadedLeaf}
                >
                    <Row>
                        <Col md={{span: 6, offset: 6}} className={'my-lg-5'}>
                            <div className="pt-lg-5 mt-lg-5 pb-5 pb-lg-0">
                                <HeaderText
                                    animation={'fade-up'}
                                    animationDelay={'1000'}
                                    animationDuration={'1000'}
                                    className={'text-white header__text  mt-5 fs-lg-4-5 header__text--bold' +
                                    ' pt-lg-5 with-square mb-3 mb-lg-0'}
                                    text={<>We Stay ahead <br/> of the Curve</>}/>
                                <ParagraphText
                                    animation={'fade-up'}
                                    animationDelay={'1000'}
                                    animationDuration={'2000'}
                                    text={'Embracing Innovation and Technology'}
                                    className={'text-white mb-5 mb-lg-0'}/>
                            </div>
                        </Col>
                    </Row>
                </Header>
                <Section bgImg={greenLeafBg} data-aos-easing="ease-in-out"
                         data-aos-delay="500"
                         data-aos-once="true">
                    <Row className='py-lg-5 pb-lg-3 px-lg-5 my-5 my-lg-0'>
                        <Col lg={{span: 6}}>
                            <ArticleImage type={'fluid'} imageClass={'w-70'}
                                          image={homePageArtImage}/>
                        </Col>
                        <Col lg={{span: 6}}>
                            <TextLabel className='patek-green'
                                       positionClass={'mt-4 mt-lg-2 mb-3 mb-lg-2'}
                                       icon={threeCircleIcon} text='who we are'
                            />
                            {/*<HeaderText className={'my-lg-3 fs-2-5 '} text={'Patec - '}/>*/}
                            <ParagraphText text={valueText} className={'light-black pr-lg-5 mb-lg-3'}/>
                            <Button className={'btn-patek-green text-uppercase'}
                                    onClick={() => props.history.push(about)}
                                    text={'read more'}/>
                        </Col>
                    </Row>
                </Section>

                <Section className={'bg-patek-light-green'}>
                    <Row className='pt-4 pb-4 pb-lg-0'>
                        <Col lg={{span: 4}}>
                            <TextLabel className='patek-green'
                                       positionClass={'mb-1 mb-lg-0'}
                                       icon={threeCircleIcon}
                                       text='VALUES'/>
                            {/*<HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '}*/}
                            {/*            text={'Our Core Values'}/>*/}
                        </Col>
                    </Row>
                    <Row className={'mt-2 mt-lg-5'}>

                        {data && data.length ?
                            data.slice(1, 4).map(
                                (cv, i) => (
                                    <Col key={i} lg={{span: 4}}>
                                        <SectionText
                                            textAlign={'left'}
                                            icon={avocadoCircle}
                                            title={cv.title}
                                            description={cv.description}
                                        />
                                    </Col>
                                )
                            )
                            : <EmptyPlaceholder/>}
                    </Row>
                </Section>
                <Section className={'bg-gray-gradient-30 pb-3  pb-lg-0'}
                         bgImg={leafBGImg}>
                    <Row className='pt-4 pb-4'>
                        <Col lg={{span: 4}}>
                            <TextLabel className='patek-green'
                                       icon={threeCircleIcon} text='SUBSIDIARIES'/>
                            {/*<HeaderText className={'my-lg-0 fs-2-5 patek-deep-green '}*/}
                            {/*            text={'Our Subsidiaries'}/>*/}
                        </Col>
                    </Row>
                    <Row className={'mb-5 pb-5 mb-lg-0 pb-lg-0'}>
                        <Col lg={{span: 12}}>
                            {data && data.length ?
                                <SlideCarousel items={data.slice(4, data.length)}
                                               itemStructure={(item) =>
                                                   <Row className='pb-lg-5'>
                                                       <Col lg={{span: 6}}>
                                                           <img src={getImageFromArticle(item)}
                                                                className={'w-70'} alt="patek carousel image"/>
                                                       </Col>
                                                       <Col lg={5}>
                                                           <HeaderText className={'mt-lg-3 slide-header pt-lg-3 fs-2-5'}
                                                                       text={item.title} link={item.link}/>
                                                           <ParagraphText text={item.description}
                                                                          className={'light-black slide-p pr-lg-5 pb-lg-5 mb-lg-5'}/>
                                                       </Col>
                                                   </Row>
                                               }/> :
                                <EmptyPlaceholder/>}
                        </Col>
                    </Row>
                </Section>
                <Footer/>
            </div>
        </Loader>
    );
};
const HomeWithArticles = withArticlesAndPrinciples(Home);
const HomeWithData = withData(HomeWithArticles, getAllHomeContent,null,"home");
export default HomeWithData;