import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useOrderContext, OrderProvider } from './CartContext';

// Testowy komponent do sprawdzania kontekstu
const TestComponent = () => {
  const { OrderCost, updateOrderCost } = useOrderContext();

  return (
    <div>
      <span data-testid="order-cost">{OrderCost}</span>
      <button onClick={() => updateOrderCost(100)}>Update Cost</button>
    </div>
  );
};

describe('OrderContext', () => {
  it('provides the default OrderCost value', () => {
    render(
      <OrderProvider>
        <TestComponent />
      </OrderProvider>
    );

    const orderCost = screen.getByTestId('order-cost');
    expect(orderCost).toHaveTextContent('0');
  });

  it('updates the OrderCost value when updateOrderCost is called', async () => {
    render(
      <OrderProvider>
        <TestComponent />
      </OrderProvider>
    );

    const orderCost = screen.getByTestId('order-cost');
    const button = screen.getByRole('button', { name: /update cost/i });

    // Sprawdź, czy domyślna wartość OrderCost to 0
    expect(orderCost).toHaveTextContent('0');

    // Kliknij przycisk, aby zaktualizować koszt
    fireEvent.click(button);

    // Poczekaj na zaktualizowanie wartości OrderCost
    await waitFor(() => {
      expect(orderCost).toHaveTextContent('100');
    });
  });
});