import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationContainer = styled.nav`
  display: flex;
  gap: 12px;
  padding: 16px;
  background-color: #000000;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;

  &:hover {
    background-color: #555;
  }
`;

const CATEGORIES = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

const HeaderNavigation = () => {
  return (
    <NavigationContainer>
      <StyledLink to="/">전체</StyledLink>
      {CATEGORIES.map((category) => (
        <StyledLink key={category} to={`/${category}`}>{category}</StyledLink>
      ))}
    </NavigationContainer>
  );
};

export default HeaderNavigation;
