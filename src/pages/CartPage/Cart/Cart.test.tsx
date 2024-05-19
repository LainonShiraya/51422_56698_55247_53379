import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from './Cart'; 
import { useOrderContext } from '../CartContext';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

// Mockowanie kontekstu zamówienia
jest.mock('../CartContext', () => ({
  useOrderContext: jest.fn(),
}));

// Mockowanie hooków z Convex
jest.mock('convex/react', () => ({
  useQuery: jest.fn(),
  useMutation: jest.fn(),
}));

describe('Cart Component', () => {
  const mockUpdateOrderCost = jest.fn();
  const mockIncreaseQuantity = jest.fn();
  const mockDecreaseQuantity = jest.fn();
  const mockRemoveProductFromCart = jest.fn();

  beforeEach(() => {
    // Resetowanie mocków przed każdym testem
    (useOrderContext as jest.Mock).mockReturnValue({
      updateOrderCost: mockUpdateOrderCost,
    });
    (useQuery as jest.Mock).mockReturnValue([
      {
        id: '1',
        name: 'Product 1',
        price: 10,
        count: 1,
        url: 'http://example.com/product1.png',
      },
      {
        id: '2',
        name: 'Product 2',
        price: 20,
        count: 2,
        url: 'http://example.com/product2.png',
      },
    ]);
    (useMutation as jest.Mock).mockImplementation((fn) => {
      if (fn === api.products.increaseProductCountInCart) return mockIncreaseQuantity;
      if (fn === api.products.decreaseProductCountInCart) return mockDecreaseQuantity;
      if (fn === api.products.removeProductInCart) return mockRemoveProductFromCart;
    });
  });

  test('should handle increase quantity', () => {
    render(<Cart />);
    const increaseButton = screen.getAllByText('+')[0];
    fireEvent.click(increaseButton);
    expect(mockIncreaseQuantity).toHaveBeenCalledWith({ productIdToIncrease: '1' });
  });

  test('should handle decrease quantity', () => {
    render(<Cart />);
    const decreaseButton = screen.getAllByText('-')[0];
    fireEvent.click(decreaseButton);
    expect(mockDecreaseQuantity).toHaveBeenCalledWith({ productIdToIncrease: '1' });
  });

  test('should handle remove product from cart', () => {
    render(<Cart />);
    const removeButton = screen.getAllByRole('button', { name: /delete/i })[0];
    fireEvent.click(removeButton);
    expect(mockRemoveProductFromCart).toHaveBeenCalledWith({ productIdToIncrease: '1' });
  });
});
