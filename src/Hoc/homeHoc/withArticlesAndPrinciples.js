import React from 'react';
import {useGetArticles, useGetPrinciples} from "../../Effects/Effects";
import {getFirstFourArticles} from "../../Facades/Facade";

const withArticlesAndPrinciples = (component) => (props) => {
    const RenderComponent = component;
    const [allArticles, articleLoading] = useGetArticles();
    const [principles, isPrinciplesLoading] = useGetPrinciples();
    const firstFourArticles = getFirstFourArticles(allArticles);
    return <RenderComponent
                articleLoading={articleLoading}
                firstFourArticles={firstFourArticles}
                principles={principles}
                isPrinciplesLoading={isPrinciplesLoading}
                allArticles={allArticles}
                {...props}
            />;
};

export default withArticlesAndPrinciples;