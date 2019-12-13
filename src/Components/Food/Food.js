import React from 'react';
import BannerSection from "../Commons/BannerSection/BannerSection";
import foodImage from "../../assets/img/food-image@2x.png";
import TabsLayout from "../Commons/TabsLayout/TabsLayout";
import ParagraphText from "../Commons/ParagraphText/ParagraphText";
import ArticleLayout from "../Commons/ArticleLayout/ArticleLayout";
import ArticleImage from "../Commons/ArticleImage/ArticleImage";
import ArticlePlaceholder from "../../assets/img/article-fruit-placeholder@2x.png";
// import image from "../../assets/img/man-working@2x.png";
// import image from "../../assets/img/intent-icon-customer.svg";
import image from "../../assets/img/intent-icon-customer@2x.png";
import ContactForm from "../Contact/ContactForm";
import {Col, Row} from "react-bootstrap";
import LocationListItem from "../Contact/LocationListItem";
import Header from "../Commons/Header/Header";
import AboutBgImg from "../../assets/img/about-bg-image.svg";
import Breadcrumb from "../Commons/Breadcrumb/Breadcrumb";
import {home, patecFood} from "../../routes/routes";
import TextLabel from "../Commons/TextLabel/TextLabel";
import HeaderText from "../Commons/HeaderText/HeaderText";
import LogoPlaceholder from "../Commons/Header/LogoPlaceholder";
import threeCircleIcon from "../../assets/img/three-circle-icon.svg";
import Section from "../Commons/Section/Section";
import leafBGImg from "../../assets/img/green-leaf-bg-right.svg";
import SlideCarousel from "../Commons/Carousel/SlideCarousel";
import SectionText from "../Commons/Section/SectionText";
import avocadoCircle from "../../assets/img/avocado-circle-icon.svg";
import SubscriptionSection from "../Commons/SubscriptionSection/SubscriptionSection";
import Footer from "../Commons/Footer/Footer";
import meetMeBg from "../../assets/img/Meet-me-bg@2x.png";
import aquaCultureIcon from "../../assets/img/acquaculture-icon.svg";
import SecondaryNav from "../Commons/Navbar/SecondaryNav";

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
        title: 'Golden Food and Beverage -',
        desc: 'Quality Packaging aims to be an industry leader in recycling \n' +
            'of waste materials, manufacturing of packaging solutions.\n' +
            'The company will provide solutions that will be utilized by\n' +
            'a wide range of industries such as retail, food & beverages,\n' +
            'pharmaceutical, agriculture, construction.',
        link: '',

    }];

const accordionItemStructure = (item) => <ParagraphText text={item.desc} className={'text-green-1 pt-lg-5 mb-lg-5'}/>;

const Food = () => {
    return (
        <>
            <Header img={AboutBgImg} type='half'>
                <Row className={'ml-lg-5'}>
                    <Col lg={{span: 6}} className={'text-center pt-lg-5 px-lg-0 '}>
                        <Breadcrumb containerClass={'mb-lg-5 text-left'}
                                    links={
                                        [
                                            {name: 'home', path: home},
                                            {name: 'subsidiaries', path: patecFood}
                                        ]
                                    }
                        />
                        <HeaderText className={'text-left text-white'} text={'Patec Food'}/>
                    </Col>
                </Row>
                <LogoPlaceholder/>
            </Header>

            <div className={'py-lg-5 bg-patek-light-green'}>
                <SecondaryNav/>
            </div>


            <Section className={'bg-patek-light-green mh-vh-50'}>
                <BannerSection bgImagePosition={'right'} image={foodImage}/>

                <Row className='pt-lg-5'>
                    <Col lg={{span: 8, offset: 2}} className={'text-center'}>
                        <TextLabel className='patek-green' positionClass='justify-content-lg-center'
                                   icon={threeCircleIcon} text='PATEC FOODS'/>
                        <HeaderText className={'my-lg-5 pb-lg-5 fs-2-5 patek-deep-green '}
                                    text={'Patec foods limited is a food manufacturing and trading \n' +
                                    'company established to supply processed food products \n' +
                                    'and agricultural commodities to serve both the domestic\n' +
                                    'and export markets'}/>
                    </Col>
                    <Col lg={{span: 6}} className={'pr-lg-5'}>
                        <TextLabel className='patek-green'
                                   icon={threeCircleIcon} text='PATEC FOODS'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '}
                                    text={'Patec foods at a Glance'}/>
                        <ParagraphText
                            text={'We are a part of Patec Group and a sister company\n' + 'of quality packaging, a recycling and packaging \n' +
                        'solution company'}/>

                        <ArticleImage
                            image={ArticlePlaceholder}
                            bgImagePosition={'right'}
                            type={'line'}
                        />
                    </Col>
                    <Col lg={{span: 6}}>
                        <ArticleLayout type={'line'}
                                       topic={'Aquaculture'}
                                       text={'Our Shao Aquaculture farm is the single largest \n' +
                        'aquaculture farm in the region, with a vertically\n' +
                        'integrated system that utilizes eco-friendly, \n' +
                        'modern Recirculatory Aquaculture System (RAS) \n' +
                        'and Aquaponic technologies to grow a variety of \n' +
                        'premium fish for household and food service \n' +
                        'industry'}
                                       category={'Shao Aquaculture Farm'}
                                       link={'/food'}
                        />
                        <ArticleLayout type={'line'}
                                       topic={'Fish Trading'}
                                       text={'The Fish Trading arm deals in the importation \n' +
                                       'of frozen fish like Hake, Mackerel, Korean Mackerel,\n' +
                                       'Herring, Blue whiting etc. from Asia, Europe and \n' +
                                       'other leading global fish markets.'}
                                       category={'Fish Trading Arm'}
                                       link={'/food'}
                        />
                    </Col>
                </Row>
            </Section>

            <Section className={'bg-gray-gradient-30'} bgImg={leafBGImg}>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 4}}>
                        <TextLabel className='patek-green' icon={threeCircleIcon} text='WHAT WE DO'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'What We do'}/>
                    </Col>
                </Row>

                <Row className='pt-lg-5'>
                    <Col lg={{span: 4}}>
                        <SectionText iconClass={'w-25'} icon={aquaCultureIcon} title={'Aquaculture'} type={'imageTitle'}/>
                    </Col>
                </Row>

                <Row className={'mt-5'}>
                    <Col lg={{span: 6}}>

                    </Col>
                    <Col lg={{span: 6}}>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Purview'}/>
                        <ParagraphText text={'The rapid decline of food supply and wild-caught fish \n' +
                        'has given rise to the need for Aquaculture. With an \n' +
                        'estimated 3 billion people getting 20% of their protein \n' +
                        'from fish, the production and supply of fish is a key \n' +
                        'plan of the global food security agenda.\n'} />
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 6}}>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Our Solution'}/>
                        <ParagraphText text={'Aquaculture was established by Patec Foods to serve \n' +
                        'as a medium for sustaining the supply of this vital food \n' +
                        'source and close the gap of the annual demand of fish \n' +
                        'estimated at 2.7million MT in Nigeria through our \n' +
                        'vertically integrated fish farm built on 10 hectares of \n' +
                        'land in Ilorin, Kwara State and has a capacity for production \n' +
                        'of fish on an industrial scale (12,700 MT of fish per annum) to \n' +
                        'meet mass demand.'} />
                    </Col>
                    <Col lg={{span: 6}}>

                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 6}}>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Our Operations'}/>
                        <ParagraphText text={'Operations Include'} />
                    </Col>
                    <Col lg={{span: 6}}>

                    </Col>
                </Row>

                <Row className={'mt-5'}>


                    <Col lg={{span: 4}}>
                        <SectionText
                            type={'imageTitle'}
                            icon={avocadoCircle}
                            title={'Curiousity'}
                        />
                        <SectionText
                            type={'imageTitle'}
                            icon={avocadoCircle}
                            title={'Productivity'}
                        />
                        <SectionText
                            type={'imageTitle'}
                            icon={avocadoCircle}
                            title={'Productivity'}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <SectionText
                            type={'imageTitle'}
                            icon={avocadoCircle}
                            title={'Professionalism'}
                        />
                        <SectionText
                            type={'imageTitle'}
                            icon={avocadoCircle}
                            title={'Food'}
                        />
                        <SectionText
                            type={'imageTitle'}
                            icon={avocadoCircle}
                            title={'Customer-focus'}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <SectionText
                            type={'imageTitle'}
                            icon={avocadoCircle}
                            title={'Value-drive'}
                        />
                        <SectionText
                            type={'imageTitle'}
                            icon={avocadoCircle}
                            title={'Innovation'}
                        />
                    </Col>
                </Row>
            </Section>

            <Section className={'bg-patek-light-green mh-vh-50'}>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 4}}>
                        <TextLabel className='patek-green' icon={threeCircleIcon} text='WHAT WE DO'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'What We do'}/>
                    </Col>
                </Row>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 4}}>
                        <SectionText iconClass={'w-25'} icon={aquaCultureIcon} title={'Fish Trading'} type={'imageTitle'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 6}}>

                    </Col>
                    <Col lg={{span: 6}}>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Purview'}/>
                        <ParagraphText text={'The rapid decline of food supply and wild-caught fish \n' +
                        'has given rise to the need for Aquaculture. With an \n' +
                        'estimated 3 billion people getting 20% of their protein \n' +
                        'from fish, the production and supply of fish is a key \n' +
                        'plan of the global food security agenda.\n'} />
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 6}}>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Our Solution'}/>
                        <ParagraphText text={'Aquaculture was established by Patec Foods to serve \n' +
                        'as a medium for sustaining the supply of this vital food \n' +
                        'source and close the gap of the annual demand of fish \n' +
                        'estimated at 2.7million MT in Nigeria through our \n' +
                        'vertically integrated fish farm built on 10 hectares of \n' +
                        'land in Ilorin, Kwara State and has a capacity for production \n' +
                        'of fish on an industrial scale (12,700 MT of fish per annum) to \n' +
                        'meet mass demand.'} />
                    </Col>
                    <Col lg={{span: 6}}>

                    </Col>
                </Row>
            </Section>
            <Section className={'bg-patek-light-green py-lg-5 '}>
                <Row className={'py-lg-5 text-center'}>
                    <Col lg={{span: 8, offset: 2}}>
                        <div className="pt-lg-2 mt-lg-5">
                            <HeaderText className='text-white mt-lg-5 pt-lg-5 position-relative z-index-1'
                                        text={'" An Amazing Company at the frontiers of agro allied \n' +
                                        'Development in West AFrica "'}/>

                        </div>
                    </Col>
                </Row>
                <img src={meetMeBg} className='position-absolute w-75 filter-brightness-0-3 center-center'
                     alt="meet me background"/>
            </Section>
            <SubscriptionSection/>
            <Footer/>
        </>
    );
};

export default Food;