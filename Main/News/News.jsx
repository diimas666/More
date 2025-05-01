import style from "./News.module.scss";
import { NewsHeader } from "./NewsHeader";
import { NewsCard } from "./NewsCard";
import { newsArr } from "./news";
import { useState } from "react";

export const News = () => {
  const dispayedNews = newsArr.slice(0, 4);
  const [news, setNews] = useState(dispayedNews);
  return (
    <section className={style.news}>
      <NewsHeader setNews={setNews} title="Новости" btnText="Все новости" />
      <NewsCard news={news} />
    </section>
  );
};
