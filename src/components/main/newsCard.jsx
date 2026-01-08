import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
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

const CardGrid = styled.div`
  padding: 16px;
`;

const NewsCard = ({ articles }) => {
  return (
    <CardGrid>
      {articles.map((article) => (
        <CardContainer key={article.url} onClick={() => window.open(article.url, '_blank')}>
          <CardImage
            src={article.urlToImage || '/no-image.png'}
            alt={article.title}
            onError={(e) => { e.target.src = '/no-image.png'; }}
          />
          <CardTitle>{article.title}</CardTitle>
          <CardDescription>{article.description}</CardDescription>
        </CardContainer>
      ))}
    </CardGrid>
  );
};

export default NewsCard;
