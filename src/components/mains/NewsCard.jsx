import {
  CardLinkWrapper,
  CardWrapper,
  CardImage,
  CardTitle,
  CardDescription,
} from "./NewsCard.styled";

function NewsCard({ article }) {
  if (!article.content) {
    return null;
  }

  const { title, description, url, urlToImage } = article;

  return (
    <CardLinkWrapper href={url} target="_blank" rel="noopener noreferrer">
      <CardWrapper>
        {urlToImage && <CardImage src={urlToImage} alt={title} />}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardWrapper>
    </CardLinkWrapper>
  );
}

export default NewsCard;
