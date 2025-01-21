import NewsItems from '../../components/News/NewsItems/NewsItems';
import { MainLayout } from '../main/Main.styles';
import PropTypes from 'prop-types';

const getNewsItems = ({ newsItems }) => {
  if (newsItems && newsItems.length !== 0) {
    return <NewsItems NewsData={newsItems.articles} />;
  }
};

getNewsItems.propTypes = {
  newsItems: PropTypes.object,
};

const NewsMain = ({ children, newsItems }) => {
  return (
    <MainLayout>
      {children}
      {getNewsItems({ newsItems })}
    </MainLayout>
  );
};

export default NewsMain;
