import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DarkModeButton from './darkModeButton.jsx';

const NavigationContainer = styled.nav`
  display: flex;
  gap: 12px;
  padding: 16px;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;

  &:hover {
    opacity: 0.7;
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
      <DarkModeButton />
    </NavigationContainer>
  );
};

export default HeaderNavigation;
