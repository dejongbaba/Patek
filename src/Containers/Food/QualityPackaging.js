import React from 'react';
import BannerSection from "../../Components/Commons/BannerSection/BannerSection";
import foodImage from "../../assets/img/qp-header@2x.png";
import qpLogo from "../../assets/img/qp-logo-img@2x.png";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import ArticleLayout from "../../Components/Commons/ArticleLayout/ArticleLayout";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
import ArticlePlaceholder from "../../assets/img/patek-food-img@2x.png";
// import image from "../../assets/img/man-working@2x.png";
// import image from "../../assets/img/intent-icon-customer.svg";
import {Col, Row} from "react-bootstrap";
import Header from "../../Components/Commons/Header/Header";
import qpBanner from "../../assets/img/qp-banner@2x.png";
import qpStrategyImg from "../../assets/img/qp-strategy-img@2x.png";
import qpInnovativeImg from "../../assets/img/qp-innovative-img@2x.png";
import solutionImage from "../../assets/img/solution-image@2x.png";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import {contact, home, patecFood, team} from "../../routes/routes";
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
import {redirectTo} from "../../Facades/Facade";
import SectionGrid from "../../Components/Commons/SectionGrid/SectionGrid";
import SectionGridItem from "../../Components/Commons/SectionGridItem/SectionGridItem";
import Button from "../../Components/Commons/Button/Button";
import CircleIcon from "../../Components/Commons/ArticleImage/CircleIcon";

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

const QualityPackaging = () => {
    return (
        <>
            <Header img={qpBanner} type='half' align={'left'} logo={true} logoImg={qpLogo}>
                <Breadcrumb containerClass={'mb-5 mt-0 mt-lg-5 text-left'}
                            links={
                                [
                                    {name: 'home', path: home},
                                    {name: 'subsidiaries', path: patecFood}
                                ]
                            }
                />
                <HeaderText className={'text-left text-white'} text={'Quality Packaging'}/>
            </Header>

            <div className={'py-lg-5 bg-patek-light-green'}>
                <SecondaryNav/>
            </div>


            <Section className={'bg-patek-light-green mh-vh-50'}>
                <BannerSection bgImagePosition={'right'} image={foodImage}/>
                <Row className='my-lg-5'>
                    <Col lg={{span: 8, offset: 2}} className={'text-lg-center'}>
                        <TextLabel className='patek-green'
                                   positionClass='justify-content-lg-center mb-5 mb-lg-0'
                                   icon={threeCircleIcon} text='QUALITY PACKAGING'/>
                        <HeaderText className={'my-5 pb-lg-5 fs-2 fs-lg-2 patek-deep-green '}
                                    text={'Quality Packaging is a leader in plastic recycling and manufacturing \n' +
                                    'of packaging solutions for industrial and retail purposes. Our 10,000 sqm \n' +
                                    'facility is strategically located in Kwara state, to bridge the supply\n' +
                                    'gap of packaging solutions within the region'}
                        />
                    </Col>

                    <Col lg={{span: 8, offset: 2}} className={'text-lg-center'}>
                        <TextLabel className='patek-green'
                                   positionClass={'justify-content-lg-center mb-3 mb-lg-0'}
                                   icon={threeCircleIcon} text='ABOUT US'/>
                    </Col>

                </Row>
                <Row className='my-5'>
                    <Col lg={{span: 6}} className={'pr-lg-5'}>
                        <HeaderText className={'my-3 fs-2-5 patek-deep-green '}
                                    text={'"We set the pace in the \n' +
                                    'industry on the opportunies \n' +
                                    'in recycling"'}/>
                    </Col>
                    <Col lg={{span: 6}}>
                        <ParagraphText className={'mb-5'} text={'Focusing on environmental sustainability, our leading plastic \n' +
                        'recycling plant with a capacity of approximately 1,500 tons \n' +
                        'per annum has been able to set the pace in the industry  \n' +
                        'on the opportunities in recycling, spurring up waste-to-wealth \n' +
                        'recycling programs and collection stations across the state.'}
                        />

                        <ParagraphText className={'mb-5'} text={'Through our ﬁlm blowing and bag making plant, the recycled \n' +
                        'materials are utilized to produce top-of the-line products at \n' +
                        'competitive pricing.'}
                        />

                        <Button text={'Download Brochure'} />
                    </Col>

                </Row>
            </Section>

            <Section className={'bg-patek-light-green'} bgImg={leafBGImg}>
                <Row className='my-3'>
                    <Col lg={{span: 5}} className={'mb-5 mb-lg-0'}>
                        <ArticleImage type={'fluid'} image={qpStrategyImg}/>
                    </Col>
                    <Col lg={{span: 6,offset:1}}>
                        <TextLabel className='patek-green' positionClass={'mt-lg-5 pl-lg-3'} icon={threeCircleIcon} text='STRATEGIC OBJECTIVES'/>
                        <HeaderText className={'my-3 fs-2-5 patek-deep-green '} text={'Strategic Objectives'}/>
                        <ParagraphText className={'mb-3'} text={'To be one of the top 5 packaging manufacturers in Nigeria \n' +
                        'that would promote a growing recycling culture in the \n' +
                        'North-central region of Nigeria.'}/>
                        <ParagraphText className={'mb-3'} text={'We would also tap into the agricultural revoluon by \n' +
                        'providing agro ﬁlms for improved farming techniques \n' +
                        'and also agro sacks to packaging needs for increasing output'}
                        />
                    </Col>
                </Row>
                <Row className={'my-3 py-lg-5'}>
                    <Col lg={{span: 6,order:6}} className={'mb-5 mb-lg-0'}>
                        <ArticleImage type={'fluid'} image={qpInnovativeImg}/>
                    </Col>
                    <Col lg={{span: 6,order:1}}>
                        <TextLabel className='patek-green' icon={threeCircleIcon} text='INNOVATION'/>
                        <HeaderText className={'my-3 fs-2-5 patek-deep-green '} text={'We are Innovative'}/>
                        <ParagraphText className={'mb-3'} text={'Quality Packaging places major emphasis on integrating \n' +
                        'advanced technology in product development, production \n' +
                        'and management. Our recycling plant is the largest in \n' +
                        'Kwara state, with a capacity of 6MT daily we have been able \n' +
                        'to incorporate skill and modern technology in recycling to \n' +
                        'enable us meet packaging needs that oﬀer outstanding \n' +
                        'funconality while remaining price friendly. '}/>
                        <CircleIcon/>
                        <ParagraphText className={'my-3'} text={'We strive to serve our customers beer by researching in latest \n' +
                        'producon techniques and equipment with the aim of adding \n' +
                        'value to our products and keeping us miles ahead of competition. I\n' +
                        'nnovaon Investments in advanced technology and innovaon are \n' +
                        'the main driving force for the success of QPL\'s strategy'}
                        />
                    </Col>
                </Row>
            </Section>

            {/*<Section className={'bg-gray-gradient-30 py-lg-5 '}>*/}
            {/*    <Row className={'py-lg-5'}>*/}
            {/*        <Col lg={{span: 6, offset: 3}}>*/}
            {/*            <TextLabel positionClass={'my-lg-5 justify-content-center'}*/}
            {/*                       text={'MANAGEMENT TEAM'}/>*/}
            {/*            <HeaderText className={'text-center my-lg-3 fs-2 fs-lg-2-5  patek-deep-green '}*/}
            {/*                        text={'Management Team'}/>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*    <Row className={'py-lg-5'}>*/}
            {/*        <Col lg={{span: 12}}>*/}
            {/*            <SectionGrid>*/}
            {/*                <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>*/}
            {/*                <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>*/}
            {/*                <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>*/}
            {/*                <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>*/}
            {/*                <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>*/}
            {/*                <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>*/}
            {/*            </SectionGrid>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Section>*/}
            <CareerSection header={'" An Amazing Company at the frontiers of agro allied Development in West AFrica "'}
                           button={'CONTACT US'} func={() => redirectTo(contact)}
            />
            <SubscriptionSection/>
            <Footer/>
        </>
    );
};

export default QualityPackaging;