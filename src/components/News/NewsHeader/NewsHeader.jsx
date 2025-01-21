import { Link } from 'react-router-dom';
import { NewsHeaderContainer } from './NewsHeader.styles';
import useDarkmode from '../../../hooks/useDarkmode';
import PropTypes from 'prop-types';

const NewsHeader = ({ newsContent }) => {
  const { theme } = useDarkmode();

  return (
    <NewsHeaderContainer theme={theme}>
      <Link to={newsContent.url || '#'}>
        <h3>{newsContent.title || 'No Title'}</h3>
      </Link>
      <p>{newsContent.description || 'No Description'}</p>
      <span>{newsContent.author || 'No Author'}</span>
    </NewsHeaderContainer>
  );
};

export default NewsHeader;

NewsHeader.propTypes = {
  newsContent: PropTypes.object,
};
