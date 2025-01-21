import { HeaderContainer, StyledNavLink } from './Header.styles';
import ThemeButton from '../Button/ThemeButton';
import useDarkmode from '../../hooks/useDarkmode';

const HEADER_ITEMS = [
  'all',
  'business',
  'enterTainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

const Header = () => {
  const { theme } = useDarkmode();

  return (
    <HeaderContainer theme={theme}>
      {HEADER_ITEMS.map((item) => (
        <StyledNavLink
          key={item}
          to={`/${item}`}
          theme={theme}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <h3>{item.charAt(0).toUpperCase() + item.slice(1)}</h3>
        </StyledNavLink>
      ))}
      <ThemeButton />
    </HeaderContainer>
  );
};

export default Header;
