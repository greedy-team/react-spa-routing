import { useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext.jsx';
import styled from 'styled-components';

const Button = styled.button`
  padding: 4px 8px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  background-color: ${props => props.theme.card};
  color: ${props => props.theme.text};
  cursor: pointer;
`;

function DarkModeButton() {
  const { isDarkMode: isDark, toggleTheme } = useContext(DarkModeContext);

  return (
    <Button onClick={toggleTheme}>
      {isDark ? '라이트모드' : '다크모드'}
    </Button>
  );
}

export default DarkModeButton;
