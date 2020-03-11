import React from 'react';
import BannerSection from "../../Components/Commons/BannerSection/BannerSection";
import foodImage from "../../assets/img/food-image@2x.png";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import ArticleLayout from "../../Components/Commons/ArticleLayout/ArticleLayout";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
// import image from "../../assets/img/man-working@2x.png";
// import image from "../../assets/img/intent-icon-customer.svg";
import {Col, Row} from "react-bootstrap";
import Header from "../../Components/Commons/Header/Header";
import foodBanner from "../../assets/img/patek-food-banner@2x.png";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import {contact, home, patecFood} from "../../routes/routes";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import threeCircleIcon from "../../assets/img/three-circle-icon.svg";
import Section from "../../Components/Commons/Section/Section";
import SectionText from "../../Components/Commons/Section/SectionText";
import avocadoCircle from "../../assets/img/avocado-circle-icon.svg";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import Footer from "../../Components/Commons/Footer/Footer";
import aquaCultureIcon from "../../assets/img/acquaculture-icon.svg";
import SecondaryNav from "../../Components/Commons/Navbar/SecondaryNav";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";
import BannerContainer from "../BannerContainer/BannerContainer";
import withData from "../../Hoc/withData";
import {getAllPatecFood, getAllpatecFoodOperations} from "../../Api/api";
import {useApi} from "../../Effects/Effects";
import Loader from "../../Components/Commons/Loader/Loader";
import {getImageFromArticle} from "../../Facades/Facade";

const Food = ({data, loading, ...props}) => {

    const [foodOperation, operationsLoading] = useApi(getAllpatecFoodOperations, null, 'patec-food-operations');

    return (
        <>
            <Loader loading={loading}>
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
                    <BannerContainer>
                        {({bannerImage, loading}) => <BannerSection loading={loading} bgImagePosition={'right'}
                                                                    image={bannerImage || foodImage}/>}
                    </BannerContainer>
                    <Row className='pt-lg-5'>
                        {
                            data.length ?
                                <Col lg={{span: 8, offset: 2}} className={'text-lg-center'}>

                                    <TextLabel className='patek-green'
                                               positionClass='justify-content-lg-center mb-3 mb-lg-0'
                                               icon={threeCircleIcon} text={data[0].title}/>
                                    <HeaderText className={'mt-3 mb-5 mb-lg-0 pb-lg-5 fs-2 fs-lg-2 patek-deep-green '}
                                                text={data[0].description}
                                    />
                                </Col>
                                : null
                        }


                        {
                            data.length ?
                                <>
                                    <Col lg={{span: 6}} className={'pr-lg-5'}>
                                        <ArticleImage
                                            image={getImageFromArticle(data[3])}
                                            bgImagePosition={'right'}
                                            type={'fluid'}
                                            imageClass={'w-100'}
                                        />
                                    </Col>
                                    <Col lg={{span: 6}}>
                                        <ArticleLayout type={'line'}
                                                       topic={data[3].title}
                                                       className={'pb-5 mb-5'}
                                                       text={data[3].description}
                                                       category={data[3].category}
                                        />
                                        <ArticleLayout type={'line'}
                                                       topic={'Fish Trading'}
                                                       text={'The Fish Trading arm deals in the importation \n' +
                                                       'of frozen fish like Hake, Mackerel, Korean Mackerel,\n' +
                                                       'Herring, Blue whiting etc. from Asia, Europe and \n' +
                                                       'other leading global fish markets.'}
                                                       category={'Fish Trading Arm'}
                                        />
                                    </Col>
                                </> : null
                        }

                    </Row>
                </Section>

                <Section className={'bg-gray-gradient-30 py-5 '}>
                    <Row>
                        <Col lg={{span: 4}}>
                            <SectionText iconClass={'w-35'}
                                         icon={aquaCultureIcon}
                                         title={'Aquaculture'}
                                         type={'imageTitle'}
                            />
                        </Col>
                    </Row>

                    <Row className={'mt-3 mt-lg-0'}>
                        {
                            data.length ?
                                <>
                                    <Col lg={{span: 6}}>
                                        <ArticleImage type={'fluid'} imageClass={'mb-3 mb-lg-0 w-100'}
                                                      image={getImageFromArticle(data[1])}/>
                                    </Col>
                                    <Col lg={{span: 6}}>
                                        <HeaderText className={'mt-lg-5 mb-lg-3 pt-lg-5 fs-2-5 patek-deep-green '}
                                                    text={data[1].title}/>
                                        <ParagraphText text={data[1].description}/>
                                    </Col>
                                </>

                                : null
                        }

                    </Row>
                    <Row className={'mt-3'}>

                        {
                            data.length ?
                                <>
                                    <Col lg={{span: 6, order: 6}}>
                                        <ArticleImage type={'fluid'} imageClass={'w-100'}
                                                      image={getImageFromArticle(data[2])}/>
                                    </Col>
                                    <Col lg={{span: 6, order: 1}}>
                                        <HeaderText className={'mt-lg-5 mb-lg-3 pt-lg-5 fs-2-5 patek-deep-green '}
                                                    text={data[2].title}/>
                                        <ParagraphText className={'mb-5 mb-lg-0'}
                                                       text={data[2].description}/>
                                    </Col>

                                </>

                                : null
                        }

                    </Row>
                    <Row>
                        <Col lg={{span: 6}}>
                            <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Our Operations'}/>
                            <ParagraphText text={'Operations Include'}/>
                        </Col>
                    </Row>

                    <Row className={'mt-5 mb-lg-4'}>
                        <Col lg={{span: 4}}>

                            {foodOperation.length ?
                                foodOperation.slice(0, 3).map((d) =>

                                    <SectionText
                                        type={'imageTitle'}
                                        iconClass={'mb-3 mb-lg-0'}
                                        icon={avocadoCircle}
                                        title={d.title}
                                    />
                                ) : null
                            }

                        </Col>
                        <Col lg={{span: 4}}>

                            {foodOperation.length ?
                                foodOperation.slice(3, 6).map((d) =>

                                    <SectionText
                                        type={'imageTitle'}
                                        iconClass={'mb-3 mb-lg-0'}
                                        icon={avocadoCircle}
                                        title={d.title}
                                    />
                                ) : null
                            }

                        </Col>
                        <Col lg={{span: 4}}>
                            {foodOperation.length ?
                                foodOperation.slice(6, foodOperation.length).map((d) =>

                                    <SectionText
                                        type={'imageTitle'}
                                        iconClass={'mb-3 mb-lg-0'}
                                        icon={avocadoCircle}
                                        title={d.title}
                                    />
                                ) : null
                            }

                        </Col>
                    </Row>
                </Section>

                <Section className={'bg-patek-light-green mh-vh-50 py-5 py-lg-0'}>
                    <Row className='pt-lg-5 pb-lg-3'>
                        <Col lg={{span: 4}}>
                            <TextLabel className='patek-green' positionClass={'mb-5 mb-lg-0'} icon={threeCircleIcon}
                                       text='WHAT WE DO'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{span: 4}}>
                            <SectionText iconClass={'w-35'} icon={aquaCultureIcon} title={'Fish Trading'}
                                         type={'imageTitle'}/>
                        </Col>
                    </Row>
                    <Row className={'mt-3'}>
                        {
                            data.length ?
                                <>
                                    <Col lg={{span: 6}}>
                                        <ArticleImage type={'fluid'} imageClass={'w-100'}
                                                      image={getImageFromArticle(data[5])}/>
                                    </Col>
                                    <Col lg={{span: 6}}>
                                        <HeaderText className={'mt-lg-5 mb-lg-3 pt-lg-5 fs-2-5 patek-deep-green '}
                                                    text={data[5].title}/>
                                        <ParagraphText className={'mb-5 mb-lg-0'}
                                                       text={data[5].description}/>
                                    </Col>
                                </>
                                : null
                        }

                    </Row>
                    <Row className={'mt-3'}>
                        {
                            data.length ?
                                <>
                                    <Col lg={{span: 6, order: 6}}>
                                        <ArticleImage type={'fluid'} imageClass={'w-100'}
                                                      image={getImageFromArticle(data[4])}/>
                                    </Col>
                                    <Col lg={{span: 6, order: 1}}>
                                        <HeaderText className={'mt-lg-5 mb-lg-3 pt-lg-5 fs-2-5 patek-deep-green '}
                                                    text={data[4].title}/>
                                        <ParagraphText className={'mb-5 mb-lg-0'}
                                                       text={data[4].description}/>
                                    </Col>
                                </>
                                : null
                        }
                    </Row>
                </Section>
                <CareerSection
                    header={'" An Amazing Company at the frontiers of agro allied Development in West AFrica "'}
                    button={'CONTACT US'} func={() => props.history.push(contact)}
                />
                <SubscriptionSection/>
                <Footer/>
            </Loader>
        </>
    );
};

export default withData(Food, getAllPatecFood, null, 'patek-food');