import React from 'react';
import BannerSection from "../../Components/Commons/BannerSection/BannerSection";
import foodImage from "../../assets/img/food-image@2x.png";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import ArticleLayout from "../../Components/Commons/ArticleLayout/ArticleLayout";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
import ArticlePlaceholder from "../../assets/img/patek-food-img@2x.png";
// import image from "../../assets/img/man-working@2x.png";
// import image from "../../assets/img/intent-icon-customer.svg";
import {Col, Row} from "react-bootstrap";
import Header from "../../Components/Commons/Header/Header";
import foodBanner from "../../assets/img/patek-food-banner@2x.png";
import purviewImage from "../../assets/img/purview-image@2x.png";
import solutionImage from "../../assets/img/solution-image@2x.png";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import {home, patecFood} from "../../routes/routes";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import threeCircleIcon from "../../assets/img/three-circle-icon.svg";
import Section from "../../Components/Commons/Section/Section";
import leafBGImg from "../../assets/img/green-leaf-bg-right.svg";
import SectionText from "../../Components/Commons/Section/SectionText";
import avocadoCircle from "../../assets/img/avocado-circle-icon.svg";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import Footer from "../../Components/Commons/Footer/Footer";
import meetMeBg from "../../assets/img/Meet-me-bg@2x.png";
import aquaCultureIcon from "../../assets/img/acquaculture-icon.svg";
import SecondaryNav from "../../Components/Commons/Navbar/SecondaryNav";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";

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

const accordionItemStructure = (item) => <ParagraphText text={item.desc} className={'text-green-1 pt-lg-5 mb-lg-5'}/>;

const Food = () => {
    return (
        <>
            <Header img={foodBanner} type='half'
                    align={'left'} logo={true}>
                <Breadcrumb containerClass={'mb-5 mt-0 mt-lg-5 text-left'}
                            links={
                                [
                                    {name: 'home', path: home},
                                    {name: 'subsidiaries', path: patecFood}
                                ]
                            }
                />
                <HeaderText className={'text-left text-white'} text={'Patec TraveliFood'}/>
            </Header>

            <div className={'py-lg-5 bg-patek-light-green'}>
                <SecondaryNav/>
            </div>


            <Section className={'bg-patek-light-green mh-vh-50'}>
                <BannerSection bgImagePosition={'right'} image={foodImage}/>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 8, offset: 2}} className={'text-lg-center'}>
                        <TextLabel className='patek-green'
                                   positionClass='justify-content-lg-center mb-5 mb-lg-0'
                                   icon={threeCircleIcon} text='PATEC FOODS'/>
                        <HeaderText className={'my-5 pb-lg-5 fs-2 fs-lg-2 patek-deep-green '}
                                    text={'Patec foods limited is a food manufacturing and trading \n' +
                                    'company established to supply processed food products \n' +
                                    'and agricultural commodities to serve both the domestic\n' +
                                    'and export markets'}
                        />
                    </Col>
                    <Col lg={{span: 6}} className={'pr-lg-5'}>
                        <TextLabel className='patek-green'
                                   positionClass={'mb-5 mb-lg-0'}
                                   icon={threeCircleIcon} text='PATEC FOODS'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '}
                                    text={'Patec foods at a Glance'}/>
                        <ParagraphText
                            text={'We are a part of Patec Group and a sister company\n' + 'of quality packaging, a recycling and packaging \n' +
                            'solution company'}
                            className={'mb-5'}
                        />

                        <ArticleImage
                            image={ArticlePlaceholder}
                            bgImagePosition={'right'}
                            type={'fluid'}
                        />
                    </Col>
                    <Col lg={{span: 6}}>
                        <ArticleLayout type={'line'}
                                       topic={'Aquaculture'}
                                       className={'pb-5 mb-5'}
                                       text={'Our Shao Aquaculture farm is the single largest \n' +
                                       'aquaculture farm in the region, with a vertically\n' +
                                       'integrated system that utilizes eco-friendly, \n' +
                                       'modern Recirculatory Aquaculture System (RAS) \n' +
                                       'and Aquaponic technologies to grow a variety of \n' +
                                       'premium fish for household and food service \n' +
                                       'industry'}
                                       category={'Shao Aquaculture TraveliFood'}
                                       // link={'/food'}
                        />
                        <ArticleLayout type={'line'}
                                       topic={'Fish Trading'}
                                       text={'The Fish Trading arm deals in the importation \n' +
                                       'of frozen fish like Hake, Mackerel, Korean Mackerel,\n' +
                                       'Herring, Blue whiting etc. from Asia, Europe and \n' +
                                       'other leading global fish markets.'}
                                       category={'Fish Trading Arm'}
                                       // link={'/food'}
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
                        <SectionText iconClass={'w-35'} icon={aquaCultureIcon} title={'Aquaculture'}
                                     type={'imageTitle'}/>
                    </Col>
                </Row>

                <Row className={'mt-5'}>
                    <Col lg={{span: 6}}>
                        <ArticleImage type={'fluid'} image={purviewImage}/>
                    </Col>
                    <Col lg={{span: 6}}>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Purview'}/>
                        <ParagraphText text={'The rapid decline of food supply and wild-caught fish \n' +
                        'has given rise to the need for Aquaculture. With an \n' +
                        'estimated 3 billion people getting 20% of their protein \n' +
                        'from fish, the production and supply of fish is a key \n' +
                        'plan of the global food security agenda.\n'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 6,order:6}}>
                        <ArticleImage type={'fluid'} image={solutionImage}/>
                    </Col>
                    <Col lg={{span: 6,order:1}}>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Our Solution'}/>
                        <ParagraphText text={'Aquaculture was established by Patec Foods to serve \n' +
                        'as a medium for sustaining the supply of this vital food \n' +
                        'source and close the gap of the annual demand of fish \n' +
                        'estimated at 2.7million MT in Nigeria through our \n' +
                        'vertically integrated fish farm built on 10 hectares of \n' +
                        'land in Ilorin, Kwara State and has a capacity for production \n' +
                        'of fish on an industrial scale (12,700 MT of fish per annum) to \n' +
                        'meet mass demand.'}/>
                    </Col>

                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 6}}>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Our Operations'}/>
                        <ParagraphText text={'Operations Include'}/>
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
                        <TextLabel className='patek-green' positionClass={'mb-5 mb-lg-0'} icon={threeCircleIcon} text='WHAT WE DO'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'What We do'}/>
                    </Col>
                </Row>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 4}}>
                        <SectionText iconClass={'w-35'} icon={aquaCultureIcon} title={'Fish Trading'}
                                     type={'imageTitle'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 6}}>
                        <ArticleImage type={'fluid'} image={purviewImage}/>
                    </Col>
                    <Col lg={{span: 6}}>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Purview'}/>
                        <ParagraphText text={'The rapid decline of food supply and wild-caught fish \n' +
                        'has given rise to the need for Aquaculture. With an \n' +
                        'estimated 3 billion people getting 20% of their protein \n' +
                        'from fish, the production and supply of fish is a key \n' +
                        'plan of the global food security agenda.\n'}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 6,order:6}}>
                        <ArticleImage type={'fluid'} image={solutionImage}/>
                    </Col>
                    <Col lg={{span: 6,order:1}}>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Our Solution'}/>
                        <ParagraphText text={'Aquaculture was established by Patec Foods to serve \n' +
                        'as a medium for sustaining the supply of this vital food \n' +
                        'source and close the gap of the annual demand of fish \n' +
                        'estimated at 2.7million MT in Nigeria through our \n' +
                        'vertically integrated fish farm built on 10 hectares of \n' +
                        'land in Ilorin, Kwara State and has a capacity for production \n' +
                        'of fish on an industrial scale (12,700 MT of fish per annum) to \n' +
                        'meet mass demand.'}/>
                    </Col>

                </Row>
            </Section>
            <CareerSection header={'" An Amazing Company at the frontiers of agro allied Development in West AFrica "'}
                           button={'CONTACT US'}
            />
            <SubscriptionSection/>
            <Footer/>
        </>
    );
};

export default Food;