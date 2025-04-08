import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme/theme';
import { RootState, store } from './State/Store/store';
import { useSelector } from 'react-redux';
import { selectThemeMode } from './State/Selectors/themeSelector';

const ThemedApp = () => {
  const mode = useSelector(selectThemeMode);  // Use custom selector
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemedApp />
  </Provider>
);
