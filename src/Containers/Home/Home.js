import React from 'react';
import headerImgOne from "../../assets/img/header-bg-one@2x.png"
import threeCircleIcon from "../../assets/img/three-circle-icon.svg"
import patekOutline from "../../assets/img/patec-outline.svg"
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
import {useGetArticles} from "../../Effects/Effects";
import {Empty, Skeleton} from "antd";
import {getFirstFourArticles, getImageFromArticle, redirectTo} from "../../Facades/Facade";


const valueText = 'Patec Group, founded in 2010 and headquartered \n' +
    'in Lagos is Africa\'s leading agro-allied conglomerate\n' +
    'in the areas of production, processing, packaging and\n' +
    'distribution of food products and agro commodities\n' +
    'poised to contribute the food security in Africa. ';

const carouselItems = [
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

const CarouselItemStructure = (item) =>
    <Row className='py-lg-5 my-lg-5'>
        <Col lg={{span: 6}}>
            <img src={CarouselLeaf} className={'w-70'} alt="patek carousel image"/>
        </Col>
        <Col lg={5}>
            <HeaderText className={'my-lg-5 fs-2-5 mh-lg-90'} text={item.title}/>
            <ParagraphText text={item.desc} className={'light-black pr-lg-5 pb-lg-5 mb-lg-5'}/>
            <Button className={'btn-patek-green text-uppercase'} text={'more details'}/>
        </Col>
    </Row>;

const Home = () => {

    const [allArticles, loading] = useGetArticles();
    const firstFourArticles = getFirstFourArticles(allArticles);
    return (
        <div>
            <Header className='position-relative'
                    img={headerImgOne}
                    absLeftImg={patekOutline}
                    absRightImg={treeBranches}
                    primaryLeftImg={greenLeaf}
                    SecondaryLeftImg={fadedLeaf}
            >
                <Row>
                    <Col lg={{span: 6, offset: 6}}>
                        <div className="pt-lg-5 pb-5 pb-lg-0">
                            <div className="mt-lg-5">
                                <TextLabel className='patek-green'
                                           animation={'fade-in'}
                                           animationDelay={'500'}
                                           animationDuration={'1000'}
                                           positionClass={'my-5 mt-lg-0'}
                                           icon={threeCircleIcon} text='patec'/>
                            </div>
                            <HeaderText
                                animation={'fade-up'}
                                animationDelay={'1000'}
                                animationDuration={'1000'}
                                className={'text-white mt-lg-5 fs-lg-4 with-square mb-5 mb-lg-0'}
                                text={["We Stay ahead ", <br/>, " of the Curve"]}/>
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
                        <Button className={'btn-patek-green text-uppercase'} text={'read more'}/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-patek-light-green'}

            >
                <Row className='pt-lg-5 px-lg-5 py-5 pb-lg-0'>
                    <Col lg={{span: 4, offset: 4}}>
                        <TextLabel className='patek-green' positionClass={'mb-3 mb-lg-0'}
                                   icon={threeCircleIcon} text='DYNAMIC'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green text-lg-center'}
                                    text={'Vision, Mission & Core Values'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 4}}>
                        <SectionText
                            icon={require('../../assets/img/deep-colorado-leaf.svg')}
                            title={'VALUES'}
                            description={'To establish a world class business focused on quality and customer satisfaction.'}/>
                    </Col>
                    <Col lg={{span: 4}}>
                        <SectionText
                            icon={require('../../assets/img/light-colorado-leaf.svg')}
                            title={'Our Mission'}
                            description={'To be one of the most recognizable brands \n' +
                            'in the Nigerian agro-allied business space in \n' +
                            '5 years and employing over 3000 Nigerians.\n' +
                            '\n'}/>
                    </Col>
                    <Col lg={{span: 4}}>
                        <SectionText
                            icon={require('../../assets/img/deep-colorado-leaf.svg')}
                            title={'Core Values'}
                            description={'To establish a world class business focused \n' +
                            'on quality and customer satisfaction.'}/>
                    </Col>
                </Row>
            </Section>

            <Section className={'bg-patek-light-green'} rightBgImg={leafBGImg}>
                <Row className='pt-5 pb-3 pb-lg-0'>
                    <Col lg={{span: 4}}>
                        <TextLabel className='patek-green' positionClass={'mb-3 mb-lg-0'} icon={threeCircleIcon}
                                   text='VALUES'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Our Core Values'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 4}}>
                        <SectionText
                            textAlign={'left'}
                            icon={avocadoCircle}
                            title={'Curiousity'}
                            description={'We ask Questions and learn rapidly.'}
                        />
                        <SectionText
                            textAlign={'left'}
                            icon={avocadoCircle}
                            title={'Productivity'}
                            description={'We are adequately equipped and \n' +
                            'demonstrate consistency to\n' +
                            'achieve great results\n'}
                        />
                        <SectionText
                            textAlign={'left'}
                            icon={avocadoCircle}
                            title={'Productivity'}
                            description={'We become subject matter expert in the industry we operate'}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <SectionText
                            textAlign={'left'}
                            icon={avocadoCircle}
                            title={'Professionalism'}
                            description={'We put work before personal considerations and maintain calm and poise in stressful situations'}
                        />
                        <SectionText
                            textAlign={'left'}
                            icon={avocadoCircle}
                            title={'TraveliFood'}
                            description={'Our work models and operation policies are sustainable and replicable considering long term situations'}
                        />
                        <SectionText
                            textAlign={'left'}
                            icon={avocadoCircle}
                            title={'Customer-focus'}
                            description={'We embed customer thinking at every level'}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <SectionText
                            textAlign={'left'}
                            icon={avocadoCircle}
                            title={'Value-drive'}
                            description={'We are relentless with a constant drive  to improve'}
                        />
                        <SectionText
                            textAlign={'left'}
                            icon={avocadoCircle}
                            title={'Innovation'}
                            description={'We are open-minded in search of the best ideas'}
                        />
                    </Col>
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
                        <SlideCarousel items={carouselItems} itemStructure={CarouselItemStructure}/>
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


                    {loading ? <>
                            <Skeleton loading={loading}/>
                            <Skeleton loading={loading}/>
                            <Skeleton loading={loading}/>
                            <Skeleton loading={loading}/>
                        </> :

                        firstFourArticles.length > 0 ?
                            firstFourArticles.map((a, i) => {
                                return (
                                    <ArticleLayout img={getImageFromArticle(a)}
                                                   category={a.category.name}
                                                   topic={a.title}
                                                   text={<span className={'cursor-pointer'}
                                                               onClick={() => redirectTo('/view/' + a.id)}>Read more...</span>}
                                                   className={
                                                       i === 0 ?
                                                           'second-item grid-row-span-1-3 grid-column-span-2-4' :
                                                           i === 3 ? "fifth-item grid-column-span-2-4" : ''}
                                    />
                                )
                            }) :
                            <Empty description={'No article Available'}/>
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

export default Home;