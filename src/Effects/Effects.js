import {useEffect, useState} from "react";
import {getArticle, getArticles, getCategories, getDirectors, getHomes, getJobs, getPrinciples} from "../Api/api";
import {message} from "antd";
import axios from "axios";

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
    return [articles, loading];
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
    return [principles, loading];
};

export const useGetDirectors = () => {
    const [directors, setDirectors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getDirectors().then(result => {
            if (result) {
                setDirectors(result.data);
                setLoading(false);
            }
        }).catch(err => {
            setLoading(false);
            message.error('unable to get directors!', 3);
        });
    }, []);
    return [directors, loading];
};

export const useGetHomes = () => {
    const [homes, setHomes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getHomes().then(result => {
            if (result) {
                setHomes(result.data);
                setLoading(false);
            }
        }).catch(err => {
            setLoading(false);
            message.error('unable to get homes!', 3);
        });
    }, []);
    return [homes, loading];
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
                console.log('results', result);
                setJobs(result.data);
            }
        }).catch(err => {
            message.error('unable to get jobs!', 3);
        });
    }, []);

    return [jobs, setJobs];
};

export const useApi = (url, config = {method: 'get'}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(true);
    useEffect(() => {
        axios(url, config).then(result => {
            setLoading(false);
            if (result) {
                console.log('results', result);
                setData(result.data);
            }
        }).catch(err => {
            setLoading(false);
            setErr(err);
            message.error('unable to get data at the moment!', 3);
        });
    }, []);

    return [data, loading, err, setData, setLoading];
};