import NewsCard from '../NewsCard/NewsCard';
import { NewsItemsContainer } from './NewsItmes.styled';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const NewsItems = ({ NewsData }) => {
  const { category } = useParams();

  const newsCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <NewsItemsContainer>
      <h3>
        {category !== 'all' && <span>Top Headline </span>}
        {newsCategory} News
      </h3>
      {NewsData.map((news) => {
        if (news.source.name === '[Removed]') {
          return;
        }
        return <NewsCard key={uuidv4()} news={news} />;
      })}
    </NewsItemsContainer>
  );
};

export default NewsItems;

NewsItems.propTypes = {
  NewsData: PropTypes.array,
};
