import React from 'react';
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import Footer from "../../Components/Commons/Footer/Footer";
import SecondaryNav from "../../Components/Commons/Navbar/SecondaryNav";
import ContentViewer from "../../Components/Commons/ContentViewer/ContentViewer";
import {useGetArticle, useGetArticles} from "../../Effects/Effects";
import Section from "../../Components/Commons/Section/Section";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import ArticleLayout from "../../Components/Commons/ArticleLayout/ArticleLayout";
import {Col, Row} from "react-bootstrap";
import {Empty} from "antd";
import image from '../../assets/img/headr-article-img@2x.png';
import ArticleBio from "../../Components/Commons/ArticleBio/ArticleBio";
import ArticleHeader from "../../Components/Commons/ArticleHeader/ArticleHeader";
import './articleViewer.css';
import GridLiner from "../../Components/Commons/GridLines/GridLiner";
import {IMAGE_URL} from "../../Api/api";
import {getFirstThreeArticles, getImageFromArticle} from "../../Facades/Facade";


const ArticleViewer = ({match: {params}}) => {
    const [article] = useGetArticle(params.id);
    const [allArticles, loading] = useGetArticles();
    const threeArticles = getFirstThreeArticles(allArticles);
    return (
        <div className={'bg-patek-light-green position-relative'}>
            <ArticleHeader>
                <Row>
                    <Col>
                        <div className="text-center pt-lg-5 mt-lg-5 ">
                            <div
                                className="px-2 py-2 text-white d-inline-block ls-0-5 fs-0-7 text-uppercase bg-black w-150px">
                                {article && article.category ? article.category.name : 'no category'}
                            </div>
                            <HeaderText className='fs-lg-2 mb-lg-5' text={article ? article.title : 'no title'}/>
                            <img src={getImageFromArticle(article)} className='article-header-image' alt="article image"/>
                        </div>
                    </Col>
                </Row>
            </ArticleHeader>
            <GridLiner/>
            <SecondaryNav className={'bg-patek-light-green mt-lg-10'} type={'blog'}/>
            <ContentViewer content={article && article.description ? article.description : 'no Content'}/>
            <ArticleBio/>
            <Section className={'bg-patek-light-green'} rightBgImg>
                <TextLabel text={'In the News'}/>
                <HeaderText text={'Similar News'}/>
                <Row>
                    {
                        threeArticles ?
                            threeArticles.map((a,i)=>{
                                return (
                                    <Col key={i} lg={{span: 4}}>
                                        <ArticleLayout
                                            type={'blog'}
                                            text={a.preview}
                                            category={a.category.name}
                                            topic={a.title}
                                            date={a.date}
                                            link={'/view/' + a.id}
                                            img={getImageFromArticle(a)}
                                        />
                                    </Col>
                                )
                            })
                            :
                            <div className="d-flex justify-content-between">
                                <Empty description={'no article'}/>
                                <Empty description={'no article'}/>
                                <Empty description={'no article'}/>
                            </div>
                    }
                </Row>
            </Section>
            <SubscriptionSection/>
            <Footer/>
        </div>
    );
};

export default ArticleViewer;