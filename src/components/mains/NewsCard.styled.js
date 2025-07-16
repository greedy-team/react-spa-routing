import styled from "styled-components";

export const CardLinkWrapper = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.cardBorder};
  border-radius: 8px;
  background-color: ${(props) => props.theme.cardBg};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardWrapper = styled.article`
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 8px;
  padding: 15px;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  margin-top: 0;
  color: ${({ theme }) => theme.cardTitleColor};
  font-size: 1.2em;
  line-height: 1.4;
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.cardDescriptionColor};
  font-size: 0.9em;
  line-height: 1.5;
  margin-bottom: 15px;
`;
