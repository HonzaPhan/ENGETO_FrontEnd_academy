import { ThemeProvider } from '@emotion/react';
import theme from './themes/Theme';
import FullScreenModal from './components/Modals/Modal';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FullScreenModal />
    </ThemeProvider>
  );
}

export default App;
