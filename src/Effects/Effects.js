import {useEffect, useState} from "react";
import {getArticle, getArticles, getDirectors, getJobs, getPrinciples, getSocialLinks} from "../Api/api";
import axios from "axios";
import {getDataOrFetch} from "../Facades/Facade";

export const useGetArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getDataOrFetch("articles", setArticles, () => {
            setLoading(true);
            getArticles().then(result => {
                if (result) {
                    setLoading(false);
                    storeData('articles', setArticles, result.data);
                }
            }).catch(err => {
                setLoading(false);
            })
        })

    }, []);
    return [articles, loading];
};


export const useGetPrinciples = () => {
    const [principles, setPrinciples] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {

        getDataOrFetch("principles", setPrinciples, () => {
            setLoading(true);
            getPrinciples().then(result => {
                setLoading(false);
                if (result) {
                    storeData("principles", setPrinciples, result.data);
                }
            }).catch(err => {
                setLoading(false);
                // message.error('unable to get articles!', 3);
            })
        });

    }, []);
    return [principles, loading];
};

export const useGetDirectors = () => {
    const [directors, setDirectors] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {

        getDataOrFetch("directors", setDirectors, () => {
            setLoading(true);
            getDirectors().then(result => {
                setLoading(false);
                if (result) {
                    storeData('directors', setDirectors, result.data);
                }
            }).catch(err => {
                setLoading(false);
                // message.error('unable to get directors!', 3);
            });
        });

    }, []);
    return [directors, loading];
};
export const useScrollToTop = () => {
    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);
};


export const useGetArticle = (id) => {
    const [article, setArticle] = useState([]);
    useEffect(() => {
        getDataOrFetch("article", setArticle, () => {
            getArticle(id).then(result => {
                if (result) {
                    storeData('article', setArticle, result.data);
                }
            }).catch(err => {
                // message.error('unable to get article!', 3);
            });
        });

    }, []);

    return [article];
};


export const useSocialLinks = () => {

    const [socialLinks, setSocialLinks] = useState([]);
    useEffect(() => {
        getDataOrFetch("socialLinks", setSocialLinks, () => {
            getSocialLinks().then(result => {
                if (result) {
                    storeData('socialLinks', setSocialLinks, result.data);
                }
            }).catch(err => {
                // message.error('unable to get article!', 3);
            });
        });
    }, []);
    return [socialLinks, setSocialLinks];
};

export function storeData(key, setData, data) {
    setData(data);
    localStorage.setItem(key, JSON.stringify(data));
}

export const useGetJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {

        getDataOrFetch("jobs", setJobs, () => {
            getJobs().then(result => {
                if (result) {
                    storeData('jobs', setJobs, result.data);
                }
            }).catch(err => {
                // message.error('unable to get article!', 3);
            });
        });
    }, []);

    return [jobs, setJobs];
};

export const useApi = (url, config, key) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(true);

    if (!config) {
        config = {method: 'get'}
    }

    useEffect(() => {
        getDataOrFetch(key,
            setData, () => {
                setLoading(true);
                axios(url, config).then(result => {
                    setLoading(false);
                    console.log('result',result);
                    if (result) {
                        storeData(key, setData, result.data);
                    }
                }).catch(err => {
                    console.log('err',err);
                    setLoading(false);
                    setErr(err);
                });
            });

    }, []);

    return [data, loading, err, setData, setLoading];
};