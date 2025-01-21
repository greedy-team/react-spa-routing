import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  width: 3rem;
  height: 3rem;

  svg {
    color: ${({ theme }) => theme.text};
  }

  &:hover {
    border-radius: 100px;
    background: ${({ theme }) => theme.toggleBackground};
  }
`;
