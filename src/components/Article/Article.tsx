import React from 'react';
import styles from './Article.module.scss'
import AutorizationBlock from "../AutorizationBlock/AutorizationBlock";

interface ArticleProps {
    title: string;
    subtitle: string;
}

const Article: React.FC<ArticleProps> = ({subtitle, title}) => {
    return (
        <article className={styles.article}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>

            <AutorizationBlock />
        </article>
    );
};

export default Article;