import React from 'react';
import Section from "../Section/Section";
import leafBGImg from "../../../assets/img/green-leaf-bg-right.svg";
import {Col, Row} from "react-bootstrap";
import TextLabel from "../TextLabel/TextLabel";
import threeCircleIcon from "../../../assets/img/three-circle-icon.svg";
import HeaderText from "../HeaderText/HeaderText";
import ArticleLayout from "../ArticleLayout/ArticleLayout";
import Button from "../Button/Button";
import {blog, event, news, view} from "../../../routes/routes";
import {getBlogArticle, getEventArticle, getNewsArticle} from "../../../Facades/Facade";
import {IMAGE_URL} from "../../../Api/api";

const ArticleSectionLayout = ({pathname, articles}) => {

    const setupSection = (pname, a) => {
        let title, subTitle;
        let articles = [];

        if (pname == news) {
            subTitle = 'In the News';
            title = 'News';
            articles = getNewsArticle(a);
            console.log('articles', articles);
        } else if (pname == event) {
            subTitle = 'In Event';
            title = 'Event';
            articles = getEventArticle(a);
            console.log('event', articles);
        } else if (pname == blog) {
            subTitle = 'Our Blog';
            title = 'Blog';
            articles = getBlogArticle(a);
            console.log('blog', articles);
        }

        return [title, subTitle, articles]
    };


    const [title, subTitle, content] = setupSection(pathname, articles);

    return (
        <Section className={'bg-patek-light-green'}
                 rightBgImg={leafBGImg}>
            <Row className='pt-lg-5 mt-5'>
                <Col lg={{span: 4}}>
                    <TextLabel className='patek-green' icon={threeCircleIcon}
                               text={subTitle ? subTitle : 'In the News'}
                    />
                    <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '}
                                text={title ? title : 'News'}
                    />
                </Col>
            </Row>
            <Row className={'mt-5'}>
                {
                    content && content.length > 0 ?
                        content.map((a) => {
                            return (
                                <Col lg={{span: 4}}>
                                    <ArticleLayout
                                        type={'blog'}
                                        text={a.preview}
                                        category={a.category.name}
                                        topic={a.title}
                                        date={a.date}
                                        link={'/view/'+a.id}
                                        img={`${IMAGE_URL}${a.image[0].url}`}
                                    />
                                </Col>
                            )
                        }) : ''
                }
            </Row>
            <Row>
                <Col lg={{span: 4}}>
                    <Button className={'bg-patek-green'} text={'See More'}/>
                </Col>
            </Row>
        </Section>
    );
};

export default ArticleSectionLayout;