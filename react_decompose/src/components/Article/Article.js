import React from 'react';
import './Article.css';

import { ArticleParagraph } from './ArticleParagraph/ArticleParagraph';
import { Paragraph } from './ArticleParagraph/ArticleParagraph.content';

export default function Article() {
    

    return (
        <article className="article">
            <h1 className="article__title">Headline</h1>
            <ArticleParagraph content={Paragraph.first} />
            <ArticleParagraph content={Paragraph.second} />
            <ArticleParagraph content={Paragraph.third} />
            <ArticleParagraph content={Paragraph.fourth} />
            <ArticleParagraph content={Paragraph.fifth} />
        </article>
    );
}