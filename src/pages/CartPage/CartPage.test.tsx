import { render, screen } from '@testing-library/react';
import CartPage from './CartPage';
import { useOrderContext } from './CartContext';
import { useQuery, useMutation } from 'convex/react';

// Mockowanie komponentów używanych wewnątrz CartPage
jest.mock('./Cart/Cart', () => () => <div>Mocked Cart Component</div>);
jest.mock('./OrderSummary/OrderSummary', () => () => <div>Mocked OrderSummary Component</div>);
jest.mock('../PageTemplate/PageTemplate', () => ({ children }: { children: React.ReactNode }) => <div>{children}</div>);

// Mockowanie hooków używanych wewnątrz CartPage
jest.mock('convex/react', () => ({
  useQuery: jest.fn(),
  useMutation: jest.fn(),
}));

jest.mock('./CartContext', () => ({
  useOrderContext: jest.fn(),
  OrderProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('CartPage component', () => {
  beforeEach(() => {
    // Mockowanie kontekstu zamówienia
    (useOrderContext as jest.Mock).mockReturnValue({
      updateOrderCost: jest.fn(),
    });

    // Mockowanie query
    (useQuery as jest.Mock).mockReturnValue([]);

    // Mockowanie mutacji
    (useMutation as jest.Mock).mockReturnValue(jest.fn());
  });

  it('renders CartPage component with necessary elements', () => {
    render(<CartPage />);

    expect(screen.getByText(/Mój koszyk/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked Cart Component/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked OrderSummary Component/i)).toBeInTheDocument();
  });
});