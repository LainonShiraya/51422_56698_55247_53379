import './styles/App.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Theme } from './styles/MaterialUI/Theme';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import AccountPage from './pages/AccountPage/AccountPage';
import SettingsPage from './pages/AccountPage/SettingsPage/SettingsPage';
import ShopPage from './pages/ShopPage/ShopPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/cart'
            element={<CartPage />}
          />
          <Route
            path='/shop/sortCategory?/:sortCategory?'
            element={<ShopPage />}
          />
          <Route
            path='/account/*'
            element={<AccountPage />}
          />
          <Route
            path='/settings'
            element={<SettingsPage />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
