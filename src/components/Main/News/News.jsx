import style from './News.module.scss';
import  NewsHeader  from './NewsHeader';
import  NewsCard  from './NewsCard';

import { newsArr } from './news';
import { useState } from 'react';

const News = () => {
  const displayedNews = newsArr.slice(0, 4);
  const [news, setNews] = useState(displayedNews);
  return (
    <section className={style.news}>
      <NewsHeader setNews={setNews} title={'Новости'} btnText={'Все новости'} />
      <NewsCard news={news} />
    </section>
  );
};

export default News;
