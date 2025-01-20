import styled from "styled-components";

const CardContainer = styled.a`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.01);
  }
`;

const Thumbnail = styled.img`
  width: 120px;
  height: 100px;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const SourceName = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const NewsTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Author = styled.span`
  font-style: italic;
  font-size: 0.9rem;
`;

const NewsCard = ({ article }) => {
    return (
        <CardContainer href={article.url}>
            {article.urlToImage && <Thumbnail src={article.urlToImage} alt={article.title} />}
            <Info>
                <SourceName>{article.source.name}</SourceName>
                <NewsTitle>{article.title}</NewsTitle>
                <Author>{article.author ? `by ${article.author}` : 'No author'}</Author>
            </Info>
        </CardContainer>
    )
};

export default NewsCard;
