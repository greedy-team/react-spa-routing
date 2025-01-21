import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.25rem;
  padding: 3rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 0.2rem solid ${({ theme }) => theme.primary};
  }

  h3 {
    text-transform: capitalize;
  }
`;
