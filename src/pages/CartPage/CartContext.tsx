// import React, { createContext, useContext, useState } from 'react';

// interface CartContextType {
//   OrderCost: number;
//   updateOrderCost: (cost: number) => void;
// }

// const CartContext = createContext<CartContextType>({
//   OrderCost: 5,
//   updateOrderCost: () => {},
// });

// export const useCartContext = () => useContext(CartContext);


// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const CartProvider: React.FC = (children) => {
//   const [OrderCost, setOrderCost] = useState(0);

//   const updateOrderCost = (cost: number) => {
//     setOrderCost(cost);
//   };

//   return (
//     <CartContext.Provider value={{ OrderCost, updateOrderCost }}>
//       children
//     </CartContext.Provider>
//   );
// };

// import React, { createContext, useContext, useState } from 'react';

// interface CartContextType {
//   OrderCost: number;
//   setOrderCost: React.Dispatch<React.SetStateAction<number>>;
// }

// const CartContext = createContext<CartContextType>({
//   OrderCost: 0,
//   setOrderCost: () => {}
// });

// // eslint-disable-next-line react-refresh/only-export-components
// export const useCartContext = () => useContext(CartContext);

// export const CartProvider: React.FC = () => {
//   const [OrderCost, setOrderCost] = useState(0);

//   return (
//     <CartContext.Provider value={{ OrderCost, setOrderCost }}>
      
//     </CartContext.Provider>
//   );
// };

// import React, { createContext, useContext, useState, useEffect } from 'react';

// interface CartContextType {
//   OrderCost: number;
//   setOrderCost: React.Dispatch<React.SetStateAction<number>>;
// }

// const CartContext = createContext<CartContextType>({
//   OrderCost: 0,
//   setOrderCost: () => {}
// });

// export const useCartContext = () => useContext(CartContext);

// export const CartProvider: React.FC = ({ children }) => {
//   const [OrderCost, setOrderCost] = useState(0);

//   useEffect(() => {
//     // Ta funkcja zostanie wywołana za każdym razem, gdy TotalCost się zmieni
//     // i zaktualizuje OrderCost na nową wartość TotalCost
//     setOrderCost(TotalCost);
//   }, [TotalCost]);

//   return (
//     <CartContext.Provider value={{ OrderCost, setOrderCost }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// OrderContext.tsx
import React, { useState, ReactNode } from 'react';

interface OrderContextType {
  OrderCost: number;
  updateOrderCost: React.Dispatch<React.SetStateAction<number>>;
}

const defaultOrderContext: OrderContextType = {
  OrderCost: 6,
  updateOrderCost: () => {},
};

const OrderContext = React.createContext<OrderContextType>(defaultOrderContext);

// eslint-disable-next-line react-refresh/only-export-components
export const useOrderContext = () => React.useContext(OrderContext);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [OrderCost, updateOrderCost] = useState(0);

  return (
    <OrderContext.Provider value={{ OrderCost, updateOrderCost }}>
      {children}
    </OrderContext.Provider>
  );
};