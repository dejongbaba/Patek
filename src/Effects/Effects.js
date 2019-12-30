import {useEffect, useState} from "react";
import {getArticle, getArticles, getCategories, getJobs} from "../Api/api";
import {message} from "antd";
import {getBlogArticle, getEventArticle, getNewsArticle} from "../Facades/Facade";

export const useGetArticles = () => {

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        getArticles().then(result => {
            if (result) {
                setArticles(result.data);
            }
        }).catch(err => {
            message.error('unable to get articles!', 3);
        });
    }, []);
    return [articles];
};

export const useGetArticle = (id) => {
    const [article, setArticle] = useState([]);
    useEffect(() => {
        getArticle(id).then(result => {
            if (result) {
                setArticle(result.data);
            }
        }).catch(err => {
            message.error('unable to get article!', 3);
        });
    }, []);

    return [article];
};

export const useGetCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories().then(result => {
            if (result) {
                setCategories(result.data);
            }
        }).catch(err => {
            message.error('unable to get categories!', 3);
        });
    }, []);

    return [categories, setCategories];
};

export const useGetCareers = () => {

    const [careers, setCareers] = useState([]);
    useEffect(() => {
        getCategories().then(result => {
            if (result) {
                setCareers(result.data);
            }
        }).catch(err => {
            message.error('unable to get careers!', 3);
        });
    }, []);
    return [careers, setCareers];
};



export const useGetJobs = () => {

    const [careers, setCareers] = useState([]);
    useEffect(() => {
        getJobs().then(result => {
            if (result) {
                setCareers(result.data);
            }
        }).catch(err => {
            message.error('unable to get jobs!', 3);
        });
    }, []);

    return [careers, setCareers];
};