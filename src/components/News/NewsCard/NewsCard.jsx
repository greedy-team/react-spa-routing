import NewsHeader from '../NewsHeader/NewsHeader';
import NewsImage from '../NewsImageContainer/NewsImage';
import { NewsCardContainer } from './NewsCard.styles';
import PropTypes from 'prop-types';

const NewsCard = ({ news }) => {
  return (
    <NewsCardContainer>
      <NewsImage imageUrl={news.urlToImage} />
      <NewsHeader newsContent={news} />
    </NewsCardContainer>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  news: PropTypes.object,
};
