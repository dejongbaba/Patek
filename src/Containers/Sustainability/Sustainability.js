import React from 'react';
import Header from "../../Components/Commons/Header/Header";
import AboutBgImg from '../../assets/img/sustainability-banner@2x.png'
import {Col, Row} from "react-bootstrap";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import Section from "../../Components/Commons/Section/Section";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import Footer from "../../Components/Commons/Footer/Footer";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import manWorking from "../../assets/img/man-working@2x.png";
import womanInOffice from "../../assets/img/woman-in-office@2x.png";
import "./sustainability.css";
import {contact, home, sustainability} from "../../routes/routes";
import leafBGImg from "../../assets/img/green-leaf-bg-right.svg";
import SectionText from "../../Components/Commons/Section/SectionText";
import leafInCircle from "../../assets/img/white-leaf-in-circle.svg";
import beverageImage from "../../assets/img/golden-food-beverage-image@2x.png";
import susImg2 from "../../assets/img/sustainability-art-img-2@2x.png";
import susImg3 from "../../assets/img/sustainability-img-3@2x.png";
import ArticleLayout from "../../Components/Commons/ArticleLayout/ArticleLayout";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
import CircleIcon from "../../Components/Commons/ArticleImage/CircleIcon";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";
import {redirectTo} from "../../Facades/Facade";
import withData from "../../Hoc/withData";
import {getAllSustainabilities} from "../../Api/api";
import EmptyPlaceholder from "../../Components/Commons/EmptyPlaceHolder/EmptyPlaceholder";
import susImg1 from "../../assets/img/sustainability-art-img-1@2x.png";

const Sustainability = ({data}) => {
    return (
        <>
            <Header img={AboutBgImg} type='half' align={'center'}>

                <Breadcrumb containerClass={'mb-5'}
                            links={
                                [
                                    {name: 'home', path: home},
                                    {name: 'Sustainability', path: sustainability},
                                ]
                            }/>
                <TextLabel positionClass={'justify-content-center mb-3 mb-lg-0'} text={'SUSTAINABILTY'}/>
                <HeaderText className={'text-white with-square'} text={'Sustainability'}/>
            </Header>
            <Section bgImg={leafBGImg}>
                <Row className={'py-5'}>
                    <Col lg={{span: 6, offset: 3}}>
                        <HeaderText className={'text-center mb-5 my-lg-3 fs-1-5 fs-lg-2 patek-deep-green '}
                                    text={'We are Committed to building\n' +
                                    'a global sustainable future for all by infusing\n' +
                                    'sustainable practices in our work'}/>
                    </Col>
                </Row>
                <Row className={'pb-lg-5'}>
                    <Col lg={{span: 6}}>
                        <img src={womanInOffice} className='mt-lg-5 mb-5 mb-lg-0 pt-lg-5 img-fluid'
                             alt="woman in office"/>
                    </Col>
                    <Col lg={{span: 5}}>
                        <img src={manWorking} className='img-fluid mb-5 mb-lg-0' alt="man working"/>
                    </Col>
                </Row>
            </Section>


            <Section className={'bg-patek-light-green'}>
                {data && data.length ?
                    (
                        <>
                            <Row className='py-5'>
                                <Col lg={{span: 4}}>
                                    <SectionText
                                        iconClass={'w-15'}
                                        icon={leafInCircle}
                                        title={data[0].title}
                                        type={'imageTitle'}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={{span: 6}}>
                                    <ArticleImage imageClass={'w-100'} image={susImg1} type={'fluid'}/>
                                </Col>
                                <Col lg={{span: 5}}>
                                    <ArticleLayout
                                        type={'line'}
                                        category={'Our Commitment'}
                                        text={data[0].description}
                                    />
                                    <ArticleLayout
                                        type={'line'}
                                        category={'Our Progress'}
                                        text={data[0].description_two}
                                    />
                                </Col>
                            </Row>
                        </>
                    ) :
                    <EmptyPlaceholder/>
                }
            </Section>
            <Section className={'bg-gray-gradient-30 '}>
                {
                    data && data.length ?
                        (
                            <>
                                <Row className='pt-5'>
                                    <Col lg={{span: 4}}>
                                        <SectionText
                                            iconClass={'w-15'}
                                            icon={leafInCircle}
                                            title={data[1].title}
                                            type={'imageTitle'}
                                        />
                                    </Col>
                                </Row>
                                <Row className='pt-lg-5'>
                                    <Col lg={{span: 7, order: 7}}>
                                        <ArticleImage image={susImg2}
                                                      imageClass={'w-100'} type={'fluid'}/>
                                    </Col>
                                    <Col lg={{span: 5, order: 1}}>
                                        <ArticleLayout
                                            type={'line'}
                                            category={'Our Commitment'}
                                            text={data[1].description}
                                        />
                                        <ArticleLayout
                                            type={'line'}
                                            category={'Our Progress'}
                                            text={data[1].description_two}
                                        />
                                    </Col>
                                </Row>

                            </>
                        ) :
                        <EmptyPlaceholder/>
                }
            </Section>

            <Section className={'bg-patek-light-green sustainability--section'}>
                {
                    data && data.length ?
                        (
                            <Row className={'py-5'}>
                                <Col lg={{span: 6}}>
                                    <ArticleImage image={susImg3}
                                                  imageClass={'w-100'} type={'fluid'}/>
                                </Col>
                                <Col lg={{span: 4}}>
                                    <SectionText
                                        iconClass={'w-15'}
                                        icon={leafInCircle}
                                        title={data[2].title}
                                        type={'imageTitle'}
                                    />
                                    <ParagraphText
                                        text={data[2].description}
                                    />
                                    <CircleIcon/>
                                    <ParagraphText
                                        className={'mt-3'}
                                        text={data[2].description_two}
                                    />
                                </Col>
                            </Row>
                        ) :
                        <EmptyPlaceholder/>
                }

            </Section>

            <Section className={'bg-gray-gradient-30'}>
                {
                    data && data.length ?
                        (
                            <Row className='pt-5'>
                                <Col lg={{span: 6, order: 6}}>
                                    <ArticleImage image={beverageImage}
                                                  imageClass={'w-100'}
                                                  type={'fluid'}/>
                                </Col>

                                <Col lg={{span: 6, order: 1}}>
                                    <SectionText
                                        iconClass={'w-15'}
                                        icon={leafInCircle}
                                        title={data[3].title}
                                        type={'imageTitle'}
                                    />
                                    <ParagraphText
                                        text={data[3].description}
                                    />
                                </Col>

                            </Row>
                        ) :
                        <EmptyPlaceholder/>
                }
            </Section>

            <Section className={'bg-patek-light-green sustainability--section'}>
                {
                    data && data.length ?
                        (
                            <Row className={'py-5'}>
                                <Col lg={{span: 7}}>
                                    <ArticleImage image={susImg3} imageClass={'w-100'} type={'fluid'}/>
                                </Col>
                                <Col lg={{span: 5}}>
                                    <SectionText
                                        iconClass={'w-15'}
                                        icon={leafInCircle}
                                        title={data[4].title}
                                        type={'imageTitle'}
                                    />
                                    <ParagraphText
                                        text={data[4].description}
                                    />
                                </Col>
                            </Row>
                        ) :
                        <EmptyPlaceholder/>
                }
            </Section>

            <CareerSection
                header={'" An Amazing Company at the frontiers of agro allied \n' +
                'Development in West AFrica "'}
                button={'CONTACT US'}
                func={() => redirectTo(contact)}
            />
            <SubscriptionSection/>
            <Footer/>
        </>
    );
};

const SustainabilityWithData = withData(Sustainability, getAllSustainabilities,null,"sustainability");
export default SustainabilityWithData;