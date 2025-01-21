import { NewsImageContainer } from './NewsImage.styles';
import NewsImageSkeleton from './NewsImageSkeleton';
import PropTypes from 'prop-types';

const NewsImage = ({ imageUrl }) => {
  return (
    <NewsImageContainer>
      {imageUrl ? (
        <img src={imageUrl} width={200} height={150} alt="news" />
      ) : (
        <NewsImageSkeleton>No Image</NewsImageSkeleton>
      )}
    </NewsImageContainer>
  );
};

export default NewsImage;

NewsImage.propTypes = {
  imageUrl: PropTypes.string,
};
