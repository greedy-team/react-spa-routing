import styled from "styled-components";

export const PageContainer = styled.main`
  padding: 20px;
  max-width: 900px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const HeaderTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.textColor};
  grid-column: 1 / -1;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  grid-column: 1 / -1;
`;

export const LoadingMessage = styled.p`
  text-align: center;
  padding: 20px;
  font-size: 1.1em;
  color: #555;
  grid-column: 1 / -1;
`;

export const NoResultsMessage = styled.p`
  text-align: center;
  padding: 20px;
  color: #777;
  grid-column: 1 / -1;
`;

export const NotFoundPageContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const NotFoundPageButton = styled.a`
  text-align: center;
  display: inline-block;
  padding: 20px 40px;
  margin-top: 200px;
  background-color: #5e11caff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #5a29a4ff;
  }
`;
