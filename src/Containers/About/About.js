import React from 'react';
import Header from "../../Components/Commons/Header/Header";
import AboutBgImg from '../../assets/img/about-bg-image.svg'
import {Col, Row} from "react-bootstrap";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import Section from "../../Components/Commons/Section/Section";
import greenLeafBg from "../../assets/img/green-leaf-bg.svg";
import triLeafImg from "../../assets/img/trileaf-img@2x.png";
import meetMeBg from "../../assets/img/Meet-me-bg@2x.png";
import aboutLeaf from "../../assets/img/about-leaf-bg.svg";
import squareLeafIcon from "../../assets/img/square-leaf-img.svg";
import squareServicesIcon from "../../assets/img/square-services-img.svg";
import squareNetworkIcon from "../../assets/img/square-network-img.svg";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import Footer from "../../Components/Commons/Footer/Footer";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import Button from "../../Components/Commons/Button/Button";
import SectionGrid from "../../Components/Commons/SectionGrid/SectionGrid";
import SectionGridItem from "../../Components/Commons/SectionGridItem/SectionGridItem";
import threeCircleIcon from "../../assets/img/three-circle-icon.svg";
import dottedBottomAch from "../../assets/img/dotted-bottom-arch.svg";
import dottedTopAch from "../../assets/img/dotted-top-arch.svg";
import agriCommodity from "../../assets/img/agri-commodity.svg";
import articleImage from "../../assets/img/about-art-img@2x.png";
import multiDimensionalImage from "../../assets/img/multidimensional-img@2x.png";
import SectionText from "../../Components/Commons/Section/SectionText";
import "./about.css";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";

const About = () => {
    return (
        <>
            <Header img={AboutBgImg} type='half'>
                        <Breadcrumb containerClass={'mb-5'}
                                    links={[{name: 'home', path: '/'},
                                        {name: 'about', path: '/about'}]}
                        />
                        <TextLabel positionClass={'justify-content-center'}
                                   text={'we are patec'}
                        />
                        <HeaderText className={'text-white'} text={'About Us'}/>
            </Header>

            <Section bgImg={greenLeafBg} className={'py-lg-5 '}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6, offset: 3}} className={'text-lg-center'}>
                        <TextLabel positionClass={'justify-content-lg-center mb-5'} text={'WHO WE ARE'}/>
                        <HeaderText className={'my-lg-3 fs-1-5 fs-lg-2 patek-deep-green '}
                                    text={'We are a dynamic organization \n' +
                                    'focusing on building local manufacturing \n' +
                                    'capacity to generate employment and \n' +
                                    'provide sustainable productivity in the \n' +
                                    'economy.\n'}
                        />
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30 py-lg-5 '}
                     // colRightImg={greenLeafBg}
            >
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6 ,order:6}} >
                        <ArticleImage type={'fluid'} image={articleImage} />
                    </Col>
                    <Col lg={{span: 5,order:1}}>
                        <TextLabel positionClass={'my-lg-5'} text={'OUR BUSINESS'}/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '}
                                    text={'Our Business Activities'}/>
                        <ParagraphText text={'Patec Group business activities include aqua farming,fish trading, ' +
                        'fish processing, livestock farming,manufacturing of packaging bags ' +
                        'for food products,food distribution and production of woven sack bags ' +
                        'for agricultural commodities. '}/>
                    </Col>

                </Row>
            </Section>
            <Section className={'bg-patek-light-green py-lg-5 '}
                     // colLeftImg={greenLeafBg}
            >
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6}}>
                        <ArticleImage type={'fluid'} image={multiDimensionalImage} />
                    </Col>
                    <Col lg={{span: 6}}>
                        <TextLabel positionClass={'my-lg-5'} text={'MULTI-DIMENSIONAL'}/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '}
                                    text={'A Multi-Dimensional Company'}/>
                        <ParagraphText text={'Our world class integrated processing units and cold ' +
                        'storages along with state-of-the art machinery have ' +
                        'helped us evolve into a multidimensional and multiproduct ' +
                        'conglomerate. We ensure all our processes are duly ' +
                        'accredited by leading international organizations. ' +
                        'The Group has a workforce of about 300 people'}/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-patek-light-green py-lg-5'}>
                <img src={dottedTopAch}
                     className='position-absolute dotted-arch-position-1 d-none d-lg-block'
                     alt="first floated arch"/>
                <img src={dottedBottomAch}
                     className='position-absolute dotted-arch-position-2 d-none d-lg-block'
                     alt="first floated arch"/>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6, offset: 3}}>
                        <TextLabel positionClass={'my-lg-5 justify-content-lg-center'} text={'VALUE CHAIN'}/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green text-lg-center'} text={'Our Value Chain'}/>
                    </Col>
                </Row>
                <Row className='my-lg-5 py-lg-5'>
                    <Col lg={{span: 6}}>
                        <div className='mb-lg-5'>
                            <SectionText icon={squareLeafIcon}
                                         descType={'list'}
                                         textAlign={'left'}
                                         title={'Farming & Manufacturing'}
                                         description={
                                             <ul className={'list-unstyled px-lg-0'}>
                                                 <li>Broodstock</li>
                                                 <li>Cattle farming</li>
                                                 <li>Vegetable farming</li>
                                                 <li>Aquaculture farming</li>
                                             </ul>}
                            />
                        </div>
                        <div className="px-lg-5 ml-lg-5 pt-lg-5">
                            <SectionText icon={squareServicesIcon} descType={'list'}
                                         textAlign={'left'}
                                         title={'Services'}
                                         description={
                                             <ul className={'list-unstyled px-lg-0'}>
                                                 <li>Value -added products</li>
                                                 <li> Sales and distribution</li>
                                             </ul>}
                            />
                        </div>
                    </Col>
                    <Col lg={{span: 6}}>
                        <div className="mt-lg-5 pt-lg-5">
                            <SectionText icon={squareNetworkIcon} descType={'list'}
                                         textAlign={'left'} title={'Supply Network'}
                                         description={
                                             <ul className={'list-unstyled px-lg-0'}>
                                                 <li>Primary processing</li>
                                                 <li>Merchandising</li>
                                                 <li>Logistics</li>
                                                 <li>Recycling</li>
                                             </ul>
                                         }
                            />
                        </div>

                    </Col>
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30 py-lg-5 '}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6}}>
                        <TextLabel positionClass={'my-lg-5 justify-content-center'} text={'STRATEGY'}/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green text-center'} text={'How we work'}/>
                        <img src={triLeafImg} className='img-fluid' alt="green leaf image"/>
                    </Col>
                    <Col lg={{span: 6}}>
                        <img src={agriCommodity} className='img-fluid' alt="agri commodity"/>
                        <ParagraphText className={'fs-1-2'} text={['Patec Group is an ',
                            <strong>integrated agribusiness</strong>, ' model that \n' +
                            'encompasses the entire value chain of the agricultural \n' +
                            'commodity business, from cultivation, processing,\n' +
                            'merchandising to manufacturing of a wide range of \n' +
                            'agricultural products. Through scale, integration and the \n' +
                            'logistical advantages of its business model, it is an advocate\n' +
                            'of sustainable growth and is committed to its role as a \n',
                            <strong>responsible corporate citizen. </strong>, <br/>,
                            <img src={threeCircleIcon} className={'my-3'} alt="three circles"/>, <br/>,
                            'Patec Group is able to extract margins at every step of the \n' +
                            'value chain, thereby reaping  operational synergies and \n' +
                            'cost efficiencies.  \n']}/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-patek-light-green py-lg-5 '}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 12}}>
                        <TextLabel positionClass={'my-lg-5 justify-content-lg-center'} text={'DIRECTORS'}/>
                        <HeaderText className={'mt-lg-3 mb-lg-5 fs-2-5 patek-deep-green text-lg-center'}
                                    text={'Our Board of Directors'}/>
                        <SectionGrid>
                            <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>
                            <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>
                            <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>
                            <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>
                            <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>
                            <SectionGridItem text={'OPERATIONS'} title={'Ikenna Strange'}/>
                        </SectionGrid>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-patek-light-green  py-lg-5 '}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6}}>
                        <TextLabel positionClass={'my-5'} text={'Products'}/>
                        <HeaderText className={'my-3 mb-5 mb-lg-3 fs-2-5 position-relative z-index-1 patek-deep-green '}
                                    text={['Patec\'s products &', <br/>, '\nServices']}
                        />
                        <Button className={'position-relative z-index-1'} text={'See Products'}/>
                    </Col>
                </Row>
                <img src={aboutLeaf} className='position-absolute w-75 d-none d-lg-block left-left' alt="meet me background"/>
            </Section>

            <CareerSection header={'Meet the Team'} button={'Meet Us'} />

            <SubscriptionSection/>
            <Footer/>
        </>
    );
};

export default About;