import React from 'react';
import {Col, Row} from "react-bootstrap";
import Button from "../Commons/Button/Button";

// const Pagination = ({data}) => {
//
//     const pg = useState({currentPage: 1, articlePerPage: 5}) ;
//
//     // Logic for displaying current pages
//     const indexOfLastArticle = pg.currentPage * pg.articlePerPage;
//     const indexOfFirstArticle = indexOfLastArticle - pg.articlePerPage;
//     const currentArticles = data.slice(indexOfFirstArticle, indexOfLastArticle);
//     return (
//         <Row>
//             <Col lg={{span: 12}}>
//                 <div className="d-flex justify-content-between">
//                     <Button className={'bg-patek-green'} text={'Prev Page'}/>
//                     <Button className={'bg-patek-green'} text={'Next Page'}/>
//                 </div>
//
//             </Col>
//         </Row>
//     );
// }
//
// export default Pagination;

const Pagination = ({postsPerPage, totalPosts, paginate, prev, next}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <Row>
                <Col lg={{span: 12}}>
                    <div className="d-flex justify-content-between">
                        <Button onClick={prev} className={'bg-patek-green paginate-btn'} text={'Prev Page'}/>
                        <Button  onClick={next} className={'bg-patek-green paginate-btn'} text={'Next Page'}/>
                    </div>
                </Col>
            </Row>
            {/*<ul className='pagination'>*/}
            {/*    <li>*/}
            {/*        <a onClick={(e) => {*/}
            {/*            e.preventDefault();*/}
            {/*            prev()*/}
            {/*        }} className='page-link'>*/}
            {/*            prev*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*    {pageNumbers.map(number => (*/}
            {/*        <li key={number} className='page-item'>*/}
            {/*            <a onClick={(e) => {*/}
            {/*                e.preventDefault();*/}
            {/*                paginate(number)*/}
            {/*            }} className='page-link'>*/}
            {/*                {number}*/}
            {/*            </a>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*    <li>*/}
            {/*        <a onClick={(e) => {*/}
            {/*            e.preventDefault();*/}
            {/*            next()*/}
            {/*        }} className='page-link'>*/}
            {/*            next*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*</ul>*/}
        </nav>
    );
};

export default Pagination;