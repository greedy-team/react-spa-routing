import styled from 'styled-components';

export const NewsHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40rem;

  h3 {
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  p {
    display: flex;
    height: 50px;
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;

    color: ${({ theme }) => theme.secondary};
  }

  span {
    color: ${({ theme }) => theme.secondary};
    font-size: 0.8rem;
  }
`;
