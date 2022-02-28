import './App.css';
import Container from './components/Container';

import ListProvider from './context/ListContext';
import ThemeProvider from './context/ThemeContext';


function App() {
  // const { theme, setTheme } = useTheme();
  // console.log(theme);
  return (
    <div className="App">
      <div>this is App </div>
      <hr />
      <div>
        <ThemeProvider>
          <ListProvider>
            <Container />
          </ListProvider>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
