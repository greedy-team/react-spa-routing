import {
  NavContainer,
  StyledNavLink,
  NavList,
  ThemeSwitchContainer,
  Slider,
  IconWrapper,
  SunIcon,
  MoonIcon,
} from "./Gnb.styled";
import useThemeStore from "../../stores/themeStore.js";

function Gnb() {
  const { theme, toggleTheme } = useThemeStore();
  const isDarkMode = theme === "dark";
  const categories = [
    { name: "All", path: "general" },
    { name: "Business", path: "business" },
    { name: "Entertainment", path: "entertainment" },
    { name: "Health", path: "health" },
    { name: "Science", path: "science" },
    { name: "Sports", path: "sports" },
    { name: "Technology", path: "technology" },
  ];

  return (
    <NavContainer>
      <NavList>
        {categories.map((categoryItem) => (
          <li key={categoryItem.path}>
            <StyledNavLink to={`/news/${categoryItem.path}`}>
              {categoryItem.name}
            </StyledNavLink>
          </li>
        ))}
      </NavList>
      <ThemeSwitchContainer onClick={toggleTheme}>
        <IconWrapper>
          <SunIcon $isDarkMode={isDarkMode} />
          <MoonIcon $isDarkMode={isDarkMode} />
        </IconWrapper>
        <Slider $isDarkMode={isDarkMode} />
      </ThemeSwitchContainer>
    </NavContainer>
  );
}

export default Gnb;
