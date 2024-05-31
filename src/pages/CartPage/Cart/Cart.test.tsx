import { render, screen } from '@testing-library/react';
import Cart from './Cart';
import { useQuery, useMutation } from 'convex/react';
import { useOrderContext } from '../CartContext';

// Mockowanie useQuery
jest.mock('convex/react', () => ({
  useQuery: jest.fn(),
  useMutation: jest.fn(),
}));

// Mockowanie useOrderContext
jest.mock('../CartContext', () => ({
  useOrderContext: jest.fn(),
}));

describe('Cart component', () => {
  const mockCartData = [
    {
      id: '1',
      name: 'Product 1',
      price: 10,
      count: 2,
      url: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Product 2',
      price: 15,
      count: 1,
      url: 'https://via.placeholder.com/150',
    },
  ];

  beforeEach(() => {
    // Mockowanie danych koszyka
    (useQuery as jest.Mock).mockReturnValue(mockCartData);

    // Mockowanie mutacji
    (useMutation as jest.Mock).mockReturnValue(jest.fn());

    // Mockowanie kontekstu zamówienia
    (useOrderContext as jest.Mock).mockReturnValue({
      updateOrderCost: jest.fn(),
    });
  });

  it('renders Cart component', () => {
    render(<Cart />);
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
  });

  it('displays the correct price and count for each product', () => {
    render(<Cart />);
    expect(screen.getByText('10 gold')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('15 gold')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders buttons for increasing and decreasing product quantity', () => {
    render(<Cart />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(6); 
  });
});