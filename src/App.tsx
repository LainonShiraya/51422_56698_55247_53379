import './styles/App.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Theme } from './styles/MaterialUI/Theme';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/cart"
            element={<CartPage />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;