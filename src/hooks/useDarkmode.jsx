import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeContext';

const useDarkmode = () => {
  const themeContext = useContext(ThemeContext);

  return themeContext;
};

export default useDarkmode;
