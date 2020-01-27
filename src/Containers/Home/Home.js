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
import whiteCircle from "../../assets/img/white-circle-icons.svg"
import homePageArtImage from "../../assets/img/homepage-article-img@2x.png"
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
import ArticleLayout from "../../Components/Commons/ArticleLayout/ArticleLayout";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
import {Skeleton} from "antd";
import {getImageFromArticle, redirectTo} from "../../Facades/Facade";
import withData from "../../Hoc/withData";
import {getAllHomeContent} from "../../Api/api";
import withArticlesAndPrinciples from "../../Hoc/homeHoc/withArticlesAndPrinciples";
import withCoreValuesAndSubsidiaries from "../../Hoc/homeHoc/withCoreValuesAndSubsidiaries";
import EmptyPlaceholder from "../../Components/Commons/EmptyPlaceHolder/EmptyPlaceholder";


const Home = ({data, articleLoading, principles, firstFourArticles}) => {

    const valueText = 'Patec Group, founded in 2010 and headquartered \n' +
        'in Lagos is Africa\'s leading agro-allied conglomerate\n' +
        'in the areas of production, processing, packaging and\n' +
        'distribution of food products and agro commodities\n' +
        'poised to contribute the food security in Africa. ';

    // const carouselItems = [
    //     {
    //         title: 'Quality Packaging -',
    //         desc: 'Quality Packaging aims to be an industry leader in recycling \n' +
    //             'of waste materials, manufacturing of packaging solutions.\n' +
    //             'The company will provide solutions that will be utilized by\n' +
    //             'a wide range of industries such as retail, food & beverages,\n' +
    //             'pharmaceutical, agriculture, construction.',
    //         link: qualityPackaging,
    //     }, {
    //         title: 'Colorado Farms -',
    //         desc: 'Quality Packaging aims to be an industry leader in recycling \n' +
    //             'of waste materials, manufacturing of packaging solutions.\n' +
    //             'The company will provide solutions that will be utilized by\n' +
    //             'a wide range of industries such as retail, food & beverages,\n' +
    //             'pharmaceutical, agriculture, construction.',
    //         link: coloradoFarm,
    //
    //     }, {
    //         title: 'Golden Food ',
    //         desc: 'Quality Packaging aims to be an industry leader in recycling \n' +
    //             'of waste materials, manufacturing of packaging solutions.\n' +
    //             'The company will provide solutions that will be utilized by\n' +
    //             'a wide range of industries such as retail, food & beverages,\n' +
    //             'pharmaceutical, agriculture, construction.',
    //         link: goldenFood,
    //
    //     }];

    const CarouselItemStructure = (item) =>
        <Row className='py-lg-5 my-lg-5'>
            <Col lg={{span: 6}}>
                <img src={CarouselLeaf} className={'w-70'} alt="patek carousel image"/>
            </Col>
            <Col lg={5}>
                <HeaderText className={'my-lg-5 fs-2-5 mh-lg-90'} text={item.title}/>
                <ParagraphText text={item.description} className={'light-black pr-lg-5 pb-lg-5 mb-lg-5'}/>
                {/*<Button onClick={() => redirectTo(item.link)} className={'btn-patek-green text-uppercase'}*/}
                {/*        text={'more details'}/>*/}
            </Col>
        </Row>;


    return (
        <div>
            <Header className='position-relative overflow-y-hidden overflow-x-hidden'
                    img={headerImgOne}
                // absLeftImg={patekOutline}
                    absRightImg={treeBranches}
                    primaryLeftImg={greenLeaf}
                    SecondaryLeftImg={fadedLeaf}
            >
                <Row>
                    <Col lg={{span: 6, offset: 6}}>
                        <div className="pt-lg-5 mt-lg-5 pb-5 pb-lg-0">
                            <div className="mt-lg-5">
                                {/*<TextLabel className='patek-green'*/}
                                {/*           animation={'fade-in'}*/}
                                {/*           animationDelay={'500'}*/}
                                {/*           animationDuration={'1000'}*/}
                                {/*           positionClass={'my-5 mt-lg-0'}*/}
                                {/*           icon={threeCircleIcon} text='patec'/>*/}
                            </div>
                            <HeaderText
                                animation={'fade-up'}
                                animationDelay={'1000'}
                                animationDuration={'1000'}
                                className={'text-white mt-5 fs-lg-4 pt-lg-5 with-square mb-5 mb-lg-0'}
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
                <Row className='py-lg-5 px-lg-5 my-5 my-lg-0'>
                    <Col lg={{span: 6}}>
                        <ArticleImage type={'fluid'} image={homePageArtImage}/>
                    </Col>
                    <Col lg={{span: 6}}>
                        <TextLabel className='patek-green' icon={threeCircleIcon} text='who we are'/>
                        <HeaderText className={'my-lg-3 fs-2-5 '} text={'Patec - '}/>
                        <ParagraphText text={valueText} className={'light-black pr-lg-5 mb-lg-5'}/>
                        <Button className={'btn-patek-green text-uppercase'} onClick={() => redirectTo('/about')}
                                text={'read more'}/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-patek-light-green'}>
                <Row className='pt-lg-5 px-lg-5 py-5 pb-lg-0'>
                    <Col lg={{span: 4, offset: 4}}>
                        <TextLabel className='patek-green' positionClass={'justify-content-center mb-3 mb-lg-0'}
                                   icon={threeCircleIcon} text='DYNAMIC'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green text-lg-center'}
                                    text={'Vision, Mission & Core Values'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
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
                    {/*<Col lg={{span: 4}}>*/}
                    {/*    <SectionText*/}
                    {/*        icon={require('../../assets/img/Group 297.svg')}*/}
                    {/*        title={'VALUES'}*/}
                    {/*        description={'To establish a world class business focused on quality and customer satisfaction.'}/>*/}
                    {/*</Col>*/}
                    {/*<Col lg={{span: 4}}>*/}
                    {/*    <SectionText*/}
                    {/*        icon={require('../../assets/img/Group 298.svg')}*/}
                    {/*        title={'Our Mission'}*/}
                    {/*        description={'To be one of the most recognizable brands \n' +*/}
                    {/*        'in the Nigerian agro-allied business space in \n' +*/}
                    {/*        '5 years and employing over 3000 Nigerians.\n' +*/}
                    {/*        '\n'}/>*/}
                    {/*</Col>*/}
                    {/*<Col lg={{span: 4}}>*/}
                    {/*    <SectionText*/}
                    {/*        icon={require('../../assets/img/Group 299.svg')}*/}
                    {/*        title={'Core Values'}*/}
                    {/*        description={'To establish a world class business focused \n' +*/}
                    {/*        'on quality and customer satisfaction.'}/>*/}
                    {/*</Col>*/}
                </Row>
            </Section>

            <Section className={'bg-patek-light-green'}
                // rightBgImg={leafBGImg}
            >
                <Row className='pt-5 pb-3 pb-lg-0'>
                    <Col lg={{span: 4}}>
                        <TextLabel className='patek-green' positionClass={'mb-3 mb-lg-0'} icon={threeCircleIcon}
                                   text='VALUES'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Our Core Values'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>

                    {data && data.length ?
                        data.slice(1,4).map(
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
                    {/*<Col lg={{span: 4}}>*/}
                    {/*    <SectionText*/}
                    {/*        textAlign={'left'}*/}
                    {/*        icon={avocadoCircle}*/}
                    {/*        title={'Expertise'}*/}
                    {/*        description={'We become subject matter expert in the industry we operate'}*/}
                    {/*    />*/}
                    {/*</Col>*/}
                    {/*<Col lg={{span: 4}}>*/}
                    {/*    <SectionText*/}
                    {/*        textAlign={'left'}*/}
                    {/*        icon={avocadoCircle}*/}
                    {/*        title={'Innovation'}*/}
                    {/*        description={'We are adequately equipped and \n' +*/}
                    {/*        'demonstrate consistency to\n' +*/}
                    {/*        'achieve great results\n'}*/}
                    {/*    />*/}
                    {/*</Col>*/}
                    {/*<Col lg={{span: 4}}>*/}
                    {/*    <SectionText*/}
                    {/*        textAlign={'left'}*/}
                    {/*        icon={avocadoCircle}*/}
                    {/*        title={'Sustainability'}*/}
                    {/*        description={'Our work models and operation policies are sustainable and replicable considering long term situations'}*/}
                    {/*    />*/}
                    {/*</Col>*/}
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30 pb-5 mh-lg-100vh pb-lg-0'} bgImg={leafBGImg}>
                <Row className='py-5 pb-lg-0'>
                    <Col lg={{span: 4}}>
                        <TextLabel className='patek-green' icon={threeCircleIcon} text='SUBSIDIARIES'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Our Subsidiaries'}/>
                    </Col>
                </Row>
                <Row className={'mt-lg-5 mb-5 pb-5 mb-lg-0 pb-lg-0'}>
                    <Col lg={{span: 12}}>
                        {data && data.length ?
                            <SlideCarousel items={data.slice(4,data.length)} itemStructure={CarouselItemStructure}/> :
                            <EmptyPlaceholder/>}
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-patek-light-green mh-vh-70'}>
                <Row className='pt-5 pb-5 pb-lg-0 text-lg-center'>
                    <Col lg={{span: 8, offset: 2}}>
                        <TextLabel className='patek-green' positionClass='justify-content-lg-center'
                                   icon={threeCircleIcon} text='DYNAMIC'/>
                        <HeaderText className={'my-lg-3 fs-2 patek-deep-green'}
                                    text={'" An Amazing Company at the frontiers of agro allied Development in West AFrica "'}
                        />

                    </Col>
                </Row>
            </Section>
            <Section className={'px-lg-5 py-5 bg-black mh-vh-130'}>
                <div
                    className="d-grid my-lg-5 w-100 calc-height-100-10 grid-template-3-3 grid-row-gap-1 grid-column-gap-1">
                    <div className="first-item">
                        <TextLabel positionClass={'my-lg-4'} className={'text-white'} text={'updates'}
                                   icon={whiteCircle}/>
                        <HeaderText text={'In the News'} className='text-white fs-2-5'/>
                    </div>


                    {articleLoading ? <>
                            <Skeleton active loading={articleLoading}/>
                            <Skeleton active loading={articleLoading}/>
                            <Skeleton active loading={articleLoading}/>
                            <Skeleton active loading={articleLoading}/>
                        </> :

                        firstFourArticles.length ?
                            firstFourArticles.map((a, i) => {
                                return (
                                    <ArticleLayout key={i}
                                                   img={getImageFromArticle(a)}
                                                   category={a.category.name}
                                                   topic={a.title}
                                                   text={<span className={'cursor-pointer'}
                                                               onClick={() => redirectTo('/view/' + a.id)}
                                                   >Read more...</span>}
                                                   className={
                                                       i === 0 ?
                                                           'second-item grid-row-span-1-3 grid-column-span-2-4' :
                                                           i === 3 ? "fifth-item grid-column-span-2-4" : ''}
                                    />
                                )
                            }) :
                            <EmptyPlaceholder/>
                    }
                    {/*<ArticleLayout img={truckImage}*/}
                    {/*               category={'News'}*/}
                    {/*               text={'More wet weather could continue to delay the U.S. harvest activity,this week'}*/}
                    {/*               topic={'Corn Harvest Only 30% Complete, USDA Says'}*/}
                    {/*               className={'second-item grid-row-span-1-3 grid-column-span-2-4'}/>*/}

                    {/*<ArticleLayout img={monkImage}*/}
                    {/*               category={'Article'}*/}
                    {/*               topic={'The Agro - Allied way'}*/}
                    {/*               text={'Read more...'}*/}
                    {/*/>*/}

                    {/*<ArticleLayout img={monkImage}*/}
                    {/*               category={'Article'}*/}
                    {/*               topic={'The Agro - Allied way'}*/}
                    {/*               text={'Read more...'}*/}
                    {/*/>*/}

                    {/*<ArticleLayout img={monkImageCut}*/}
                    {/*               category={'News'}*/}
                    {/*               className={"fifth-item grid-column-span-2-4"}*/}
                    {/*               topic={'Corn Harvest Only 30% Complete, USDA Says'}*/}
                    {/*               text={'More wet weather could continue to delay the U.S. harvest activity, this week'}*/}
                    {/*/>*/}
                </div>
            </Section>
            <SubscriptionSection/>
            <Footer/>
        </div>
    );
};

const HomeWithArticles = withArticlesAndPrinciples(Home);
const HomeWithData = withData(HomeWithArticles, getAllHomeContent);
export default HomeWithData;