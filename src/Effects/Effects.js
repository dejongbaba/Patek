import {useEffect, useState} from "react";
import {getArticle, getArticles, getCategories, getJobs, getPrinciples} from "../Api/api";
import {message} from "antd";
import {getBlogArticle, getEventArticle, getNewsArticle} from "../Facades/Facade";

export const useGetArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getArticles().then(result => {
            if (result) {
                setArticles(result.data);
                setLoading(false);
            }
        }).catch(err => {
            setLoading(false);
            message.error('unable to get articles!', 3);
        });
    }, []);
    return [articles,loading];
};

export const useGetPrinciples = () => {
    const [principles, setPrinciples] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getPrinciples().then(result => {
            if (result) {
                setPrinciples(result.data);
                setLoading(false);
            }
        }).catch(err => {
            setLoading(false);
            message.error('unable to get articles!', 3);
        });
    }, []);
    return [principles,loading];
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

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        getJobs().then(result => {
            if (result) {
                console.log('results',result);
                setJobs(result.data);
            }
        }).catch(err => {
            message.error('unable to get jobs!', 3);
        });
    }, []);

    return [jobs, setJobs];
};