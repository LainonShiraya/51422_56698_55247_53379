import React, { createContext, useState, useContext, ReactNode } from 'react';

interface OrderContextType {
  OrderCost: number;
  updateOrderCost: (newCost: number) => void;
}

const defaultOrderContext: OrderContextType = {
  OrderCost: 0,
  updateOrderCost: () => {},
};

const OrderContext = createContext<OrderContextType>(defaultOrderContext);

// eslint-disable-next-line react-refresh/only-export-components
export const useOrderContext = () => useContext(OrderContext);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [OrderCost, updateOrderCost] = useState<number>(0);

  return (
    <OrderContext.Provider value={{ OrderCost, updateOrderCost }}>
      {children}
    </OrderContext.Provider>
  );
};
