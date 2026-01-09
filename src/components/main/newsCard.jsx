import { useState } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

const CardContainer = styled.div`
  max-width: 400px;
  border: 1px solid #000000ff;
  border-radius: 8px;
  padding: 16px;
  background-color: #ffffff;
  display: inline-block;
  margin: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 8px #ccc; 
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const CardTitle = styled.div`
  margin: 0 0 8px 0;
  font-size: 1rem;
`;

const CardDescription = styled.div`
  font-size: 0.8rem;
  opacity: 0.5; 
`;

const StyledMasonry = styled(Masonry)`
  display: flex;
  padding: 16px;

  .masonry-column {
    display: flex;
    flex-direction: column;
  }
`;

const ArticleCard = ({ article }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <CardContainer onClick={() => window.open(article.url, '_blank')}>
      {!imageError && article.urlToImage && (
        <CardImage
          src={article.urlToImage}
          alt={article.title}
          onError={() => setImageError(true)}
        />
      )}
      <CardTitle>{article.title}</CardTitle>
      <CardDescription>{article.description}</CardDescription>
    </CardContainer>
  );
};

const NewsCard = ({ articles }) => {
  const breakpointCols = {
    default: 4,
    1200: 3,
    900: 2,
    600: 1,
  };

  return (
    <StyledMasonry
      breakpointCols={breakpointCols}
      columnClassName="masonry-column"
    >
      {articles.map((article) => (
        <ArticleCard key={article.url} article={article} />
      ))}
    </StyledMasonry>
  );
};

export default NewsCard;
