import React from 'react';
import BannerSection from "../../Components/Commons/BannerSection/BannerSection";
import foodImage from "../../assets/img/qp-header@2x.png";
import qpLogo from "../../assets/img/qp-logo-img@2x.png";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
// import image from "../../assets/img/man-working@2x.png";
// import image from "../../assets/img/intent-icon-customer.svg";
import {Col, Row} from "react-bootstrap";
import Header from "../../Components/Commons/Header/Header";
import qpBanner from "../../assets/img/qp-banner@2x.png";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import {contact, home, patecFood} from "../../routes/routes";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import threeCircleIcon from "../../assets/img/three-circle-icon.svg";
import Section from "../../Components/Commons/Section/Section";
import leafBGImg from "../../assets/img/green-leaf-bg-right.svg";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import Footer from "../../Components/Commons/Footer/Footer";
import SecondaryNav from "../../Components/Commons/Navbar/SecondaryNav";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";
import Button from "../../Components/Commons/Button/Button";
import BannerContainer from "../BannerContainer/BannerContainer";
import {useApi, useScrollToTop} from "../../Effects/Effects";
import {getAllQualityPackaging} from "../../Api/api";
import {getImageFromArticle} from "../../Facades/Facade";


const QualityPackaging = (props) => {

    useScrollToTop();

    const [qualityPackaging] = useApi(getAllQualityPackaging, null, 'quality-packaging');

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
                <BannerContainer>
                    {({bannerImage, loading}) => <BannerSection loading={loading} bgImagePosition={'right'}
                                                                image={bannerImage || foodImage}/>}
                </BannerContainer>

                {
                    qualityPackaging.length ?

                        <Col lg={{span: 8, offset: 2}} className={'text-lg-center'}>
                            <TextLabel className='patek-green'
                                       positionClass='justify-content-lg-center mb-3 mb-lg-0'
                                       icon={threeCircleIcon} text='QUALITY PACKAGING'/>
                            <HeaderText className={'mt-3 mb-5 my-lg-5 pb-lg-5 fs-2 fs-lg-2 patek-deep-green '}
                                        text={qualityPackaging[0].description}
                            />
                        </Col>
                        : null
                }
                {/*<Row className='my-lg-5'>*/}
                {/*    <Col lg={{span: 8, offset: 2}} className={'text-lg-center'}>*/}
                {/*        <TextLabel className='patek-green'*/}
                {/*                   positionClass={'justify-content-lg-center  mb-lg-0'}*/}
                {/*                   icon={threeCircleIcon} text='ABOUT US'/>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                <Row className='my-5'>

                    {
                        qualityPackaging.length ?
                            <>
                                <Col lg={{span: 6}} className={'pr-lg-5'}>
                                    <HeaderText className={' my-lg-3 fs-2-5 patek-deep-green '}
                                                text={qualityPackaging[1].title}/>
                                </Col>
                                <Col lg={{span: 6}}>
                                    <ParagraphText className={'mb-5'}
                                                   text={qualityPackaging[1].description}
                                    />

                                    {/*<ParagraphText className={'mb-5'}*/}
                                    {/*               text={'Through our ﬁlm blowing and bag making plant, the recycled \n' +*/}
                                    {/*               'materials are utilized to produce top-of the-line products at \n' +*/}
                                    {/*               'competitive pricing.'}*/}
                                    {/*/>*/}

                                    <Button text={'Download Brochure'}/>
                                </Col>
                            </>

                            : null
                    }

                </Row>
            </Section>

            <Section className={'bg-patek-light-green'} bgImg={leafBGImg}>
                <Row className='my-3'>

                    {
                        qualityPackaging.length ?
                            <>
                                <Col lg={{span: 5}} className={'mb-5 mb-lg-0'}>
                                    <ArticleImage type={'fluid'} imageClass={'w-100'}
                                                  image={getImageFromArticle(qualityPackaging[2])}/>
                                </Col>
                                <Col lg={{span: 6, offset: 1}}>
                                    {/*<TextLabel className='patek-green' positionClass={'mt-lg-5 pl-lg-3'} icon={threeCircleIcon}*/}
                                    {/*           text='STRATEGIC OBJECTIVES'/>*/}
                                    <HeaderText className={'my-3 mt-lg-5  pt-lg-3 fs-2-5 patek-deep-green '}
                                                text={qualityPackaging[2].title}/>
                                    <ParagraphText className={'mb-3'}
                                                   text={qualityPackaging[2].description}/>
                                    {/*<ParagraphText className={'mb-3'}*/}
                                    {/*               text={'We would also tap into the agricultural revoluon by \n' +*/}
                                    {/*               'providing agro ﬁlms for improved farming techniques \n' +*/}
                                    {/*               'and also agro sacks to packaging needs for increasing output'}*/}
                                    {/*/>*/}
                                </Col>
                            </>

                            : null
                    }

                </Row>
                <Row className={'my-5 my-lg-3 py-lg-5'}>

                    {
                        qualityPackaging.length ?
                            <>
                                <Col lg={{span: 6, order: 6}} className={'mb-5 mb-lg-0'}>
                                    <ArticleImage type={'fluid'} imageClass={'w-100'}
                                                  image={getImageFromArticle(qualityPackaging[3])}/>
                                </Col>
                                <Col lg={{span: 6, order: 1}}>
                                    {/*<TextLabel className='patek-green' icon={threeCircleIcon} text='INNOVATION'/>*/}
                                    <HeaderText className={'my-3 mt-lg-5 pt-lg-5 fs-2-5 patek-deep-green '}
                                                text={qualityPackaging[3].title}/>
                                    <ParagraphText className={'mb-3'}
                                                   text={qualityPackaging[3].description}/>
                                    {/*<CircleIcon/>*/}
                                    {/*<ParagraphText className={'my-3'}*/}
                                    {/*               text={'We strive to serve our customers beer by researching in latest \n' +*/}
                                    {/*               'producon techniques and equipment with the aim of adding \n' +*/}
                                    {/*               'value to our products and keeping us miles ahead of competition. I\n' +*/}
                                    {/*               'nnovaon Investments in advanced technology and innovaon are \n' +*/}
                                    {/*               'the main driving force for the success of QPL\'s strategy'}*/}
                                    {/*/>*/}
                                </Col>
                            </>

                            : null
                    }

                </Row>
            </Section>

            <CareerSection header={'" An Amazing Company at the frontiers of agro allied Development in West AFrica "'}
                           button={'CONTACT US'} func={() => props.history.push(contact)}
            />
            <SubscriptionSection/>
            <Footer/>
        </>
    );
};

export default QualityPackaging;