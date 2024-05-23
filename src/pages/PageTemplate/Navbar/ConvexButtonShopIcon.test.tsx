import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useQuery } from 'convex/react';
import ConvexButtonShopIcon from './ConvexButtonShopIcon';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('convex/react', () => ({
  useQuery: jest.fn(),
}));

const mockUserInfo = {
  cart: [1, 2, 3],
};
// Test sprawdzający, czy ikona koszyka wyświetla poprawną liczbę elementów
describe('ConvexButtonShopIcon', () => {
  it('renders the shopping cart icon with the correct badge count', () => {
    (useQuery as jest.Mock).mockReturnValue(mockUserInfo);

    render(
      <Router>
        <ConvexButtonShopIcon />
      </Router>
    );

    const badge = screen.getByText('3');
    expect(badge).toBeInTheDocument();
  });

  it('renders the shopping cart icon with no badge if cart is empty', () => {
    (useQuery as jest.Mock).mockReturnValue({ cart: [] });

    render(
      <Router>
        <ConvexButtonShopIcon />
      </Router>
    );

    const badge = screen.queryByText('0');
    expect(badge).toBeNull();
  });

  it('renders the shopping cart icon with no badge if userInfo is undefined', () => {
    (useQuery as jest.Mock).mockReturnValue(undefined);

    render(
      <Router>
        <ConvexButtonShopIcon />
      </Router>
    );

    const badge = screen.queryByText('0');
    expect(badge).toBeNull();
  });
});