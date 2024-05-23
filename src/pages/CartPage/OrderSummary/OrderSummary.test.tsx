import { render, screen, fireEvent } from '@testing-library/react';
import OrderSummary from './OrderSummary';
import { OrderProvider } from '../CartContext';

describe('OrderSummary', () => {
  it('displays the initial order cost and total cost', () => {
    render(
      <OrderProvider>
        <OrderSummary />
      </OrderProvider>
    );

    // Sprawdź, czy domyślna wartość DeliveryCost to 0
    const deliveryCost = screen.getByText(/dostawa/i).nextSibling;
    expect(deliveryCost).toHaveTextContent('0 gold');

    // Sprawdź, czy domyślna wartość TotalCost to 0
    const totalCost = screen.getByText(/łączna wartość zamówienia/i).nextSibling;
    expect(totalCost).toHaveTextContent('0.00 gold');
  });

  it('updates the delivery cost and total cost when a delivery option is selected', () => {
    render(
      <OrderProvider>
        <OrderSummary />
      </OrderProvider>
    );

    // Kliknij, aby otworzyć opcje dostawy
    fireEvent.click(screen.getByText(/opcje dostawy/i));

    // Kliknij opcję dostawy "Courier (100)"
    fireEvent.click(screen.getByText(/courier \(100\)/i));

    // Sprawdź, czy wartość DeliveryCost to 100
    const deliveryCost = screen.getByText(/dostawa/i).nextSibling;
    expect(deliveryCost).toHaveTextContent('100 gold');

    // Sprawdź, czy wartość TotalCost to 100 (ponieważ OrderCost jest 0)
    const totalCost = screen.getByText(/łączna wartość zamówienia/i).nextSibling;
    expect(totalCost).toHaveTextContent('100.00 gold');
  });

  it('updates the total cost when both order cost and delivery cost are set', () => {
    render(
      <OrderProvider>
        <OrderSummary />
      </OrderProvider>
    );

    // Sprawdź, czy domyślna wartość OrderCost to 0
    let totalCost = screen.getByText(/łączna wartość zamówienia/i).nextSibling;
    expect(totalCost).toHaveTextContent('0.00 gold');

    // Kliknij, aby otworzyć opcje dostawy
    fireEvent.click(screen.getByText(/opcje dostawy/i));

    // Kliknij opcję dostawy "Boxmat (10)"
    fireEvent.click(screen.getByText(/boxmat \(10\)/i));

    // Sprawdź, czy wartość DeliveryCost to 10
    const deliveryCost = screen.getByText(/dostawa/i).nextSibling;
    expect(deliveryCost).toHaveTextContent('10 gold');

    // Sprawdź, czy wartość TotalCost to 10 (ponieważ OrderCost jest 0)
    totalCost = screen.getByText(/łączna wartość zamówienia/i).nextSibling;
    expect(totalCost).toHaveTextContent('10.00 gold');
  });
});