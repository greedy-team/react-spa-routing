import { StyledButton } from './ThemeButton.styles';
import useDarkmode from '../../hooks/useDarkmode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const ThemeButton = () => {
  const { theme, toggleDarkmode } = useDarkmode();

  return (
    <StyledButton theme={theme} onClick={toggleDarkmode}>
      {theme.type === 'darkTheme' ? (
        <LightModeOutlinedIcon />
      ) : (
        <DarkModeOutlinedIcon />
      )}
    </StyledButton>
  );
};

export default ThemeButton;
