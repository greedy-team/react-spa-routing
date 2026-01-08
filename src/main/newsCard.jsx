import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #070707;
  border-radius: 8px;
  padding: 16px;
  background-color: #ffffff;

`;

const NewsCard = ({ articles }) => {

  return (
    articles.map((article) => (
      <CardContainer key={article.url}>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </CardContainer>
    ))
  );
};

export default NewsCard;
