import React, {useEffect, useState} from 'react';
import Section from "../Section/Section";
import leafBGImg from "../../../assets/img/green-leaf-bg-right.svg";
import {Col, Row} from "react-bootstrap";
import TextLabel from "../TextLabel/TextLabel";
import threeCircleIcon from "../../../assets/img/three-circle-icon.svg";
import HeaderText from "../HeaderText/HeaderText";
import ArticleLayout from "../ArticleLayout/ArticleLayout";
import {blog, event, news} from "../../../routes/routes";
import {getBlogArticle, getEventArticle, getImageFromArticle, getNewsArticle} from "../../../Facades/Facade";
import {IMAGE_URL} from "../../../Api/api";
import {Empty, Skeleton} from "antd";
import Pagination from "../../Pagination/Pagination";


const ArticleSectionLayout = ({pathname, articles}) => {


    const [posts, setPosts] = useState([]);
    const [subTitle, setSubTitle] = useState('');
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);


    const setupSection = (pname, a) => {
        let title, subTitle;
        let articles = [];

        if (pname == news) {
            subTitle = 'In the News';
            title = 'News';
            articles = getNewsArticle(a);
            console.log('News articles', articles);
        } else if (pname == event) {
            subTitle = 'In Event';
            title = 'Event';
            articles = getEventArticle(a);
            console.log('event articles', articles, a);
        } else if (pname == blog) {
            subTitle = 'Our Blog';
            title = 'Blog';
            articles = getBlogArticle(a);
            console.log('blog articles', articles);
        }
        return [title, subTitle, articles]
    };

    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => {
        const [title, subTitle, content] = setupSection(pathname, articles);
        setPosts(content);
        setTitle(title);
        setSubTitle(subTitle);
    }, [articles]);

    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const next = () => {
        if (currentPage > 0 && currentPage < Math.ceil(posts.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };


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
                {loading ? <>
                        <Skeleton className={'green-skeleton'} loading={loading}/>
                        <Skeleton className={'green-skeleton'} loading={loading}/>
                        <Skeleton className={'green-skeleton'} loading={loading}/>
                        <Skeleton className={'green-skeleton'} loading={loading}/>
                    </> :
                    currentPosts && currentPosts.length > 0 ?
                        <>
                            { currentPosts.map((a, i) => {
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
                            })}
                        </>
                        :
                        <div className="d-flex justify-content-center mb-5 flex-grow-1">
                            <Empty description={'No article Available'} className={'justify-content-center'}/>
                        </div>
                }
            </Row>
            <Row>
                <Col lg={{span: 12}}>
                    {
                        currentPosts && currentPosts.length > 0 ?
                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={posts.length}
                                paginate={paginate}
                                next={next}
                                prev={prev}
                            />
                            :
                            null
                    }
                </Col>
            </Row>
        </Section>
    );
};


export default ArticleSectionLayout;