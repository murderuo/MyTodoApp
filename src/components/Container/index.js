import Theme from '../Theme/Theme';
import Input from '../Input/Input';
import List from '../List/List';

import { useTheme } from '../../context/ThemeContext';
function Container() {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div style={{ backgroundColor: theme }}>
      <Theme />
      <Input />
      <hr />
      <List />
    </div>
  );
}

export default Container;
