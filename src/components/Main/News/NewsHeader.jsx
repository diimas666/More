import style from './News.module.scss';
import Button from '../About/Button';
import { newsArr } from './news';
const NewsHeader = ({ title, btnText, setNews }) => {
  const handleAllNews = () => setNews(newsArr);
  return (
    <div className={style['news-header']}>
      <h2>{title}</h2>
      <Button onClick={handleAllNews}>{btnText}</Button>
    </div>
  );
};

export default NewsHeader;
