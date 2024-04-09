import { Box, Button, Divider, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import CartData from '../../../pages/CartPage/Cart/CartStorage';
import SnowWhite from '../../../assets/WeeklyPicked/SnowWhite.jpeg';
import Technic from '../../../assets/WeeklyPicked/Technic.jpeg';
import Senna from '../../../assets/WeeklyPicked/Senna.jpeg';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { useOrderContext } from '../CartContext';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity:number
}

const Cart: React.FC = () => {

  const initialCartData: CartItem[] = JSON.parse(localStorage.getItem('CartData')) || CartData;
  const [cartData, setCartData] = useState(initialCartData);
  const { OrderCost, updateOrderCost } = useOrderContext();
  const [TotalCost, setTotalCost] = useState(0);

  useEffect(() => {
    localStorage.setItem('CartData', JSON.stringify(cartData));
  }, [cartData]);

  useEffect(() => {
    const cost = cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
    setTotalCost(cost);
  }, [cartData, setTotalCost]);

// updateOrderCost(TotalCost);

const increaseQuantity = (itemId: number) => {
  const updatedItems = cartData.map((item) =>
    item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
  );
  setCartData(updatedItems);
};

const decreaseQuantity = (id: number) => {
  const itemToUpdate = cartData.find((item) => item.id === id);
  if (itemToUpdate) {
    if (itemToUpdate.quantity === 1) {
      removeFromCart(id);
    } else {
      const updatedItems = cartData.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartData(updatedItems);
    }
  }
};

// Funkcja do dodawania nowego produktu do koszyka
const addToCart = (newItem: CartItem) => {
  const existingItem = cartData.find((item) => item.id === newItem.id);
  if (existingItem) {
    increaseQuantity(existingItem.id);
  } else {
    setCartData([...cartData, { ...newItem, quantity: 1 }]);
  }
};

  const removeFromCart = (id: number) => {
    const newCartData = cartData.filter((item) => item.id !== id);
    setCartData(newCartData);
  };

  const setOrderCost = () => {
    const newOrderCost = 100; // Przykładowa nowa wartość
    updateOrderCost(newOrderCost);
  };

  return (
    <ul>
      <button onClick={() => addToCart({ id: 1, name: 'Autuch', price: 10, image: Technic, quantity: 1})}>Add to Cart 1</button>
      <button onClick={() => addToCart({ id: 2, name: 'Auto', price: 20, image: Senna, quantity: 1})}>Add to Cart 2</button>
      <button onClick={() => addToCart({ id: 3, name: 'Domek', price: 30, image: SnowWhite, quantity: 1})}>Add to Cart 3</button>
      {/* <button onClick={() => setOrderCost()}>update</button> */}
      {cartData.map((item: CartItem) => (
            <Box
            key={item.id}
            sx={{
              bgcolor: 'white',
              width: 'flex',
              marginBottom: '2rem',
            }}
          >
        <li key={item.id}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <img src={item.image} alt={item.name} style={{ width: '14rem', height: 'auto' }} />
          </Grid>
          <Grid item xs={9}>
                <Grid container justifyContent="space-between">
                  <Grid item xs={11}>
                    <p style={{ textAlign: 'left', marginBottom: '2rem', color: 'black', fontFamily:'monospace', fontSize:31 }}>{item.name}</p>
                    <p style={{ textAlign: 'left', marginBottom: '1rem', color: 'black' }}>{item.price} gold</p>
                    <Grid container justifyContent="space-between" xs={3} alignItems="center">
                     <Button variant="outlined" onClick={() => decreaseQuantity(item.id)}>-</Button>
                     <p style={{ textAlign: 'left', margin: 0, color: 'black' }}>{item.quantity}</p>
                     <Button variant="outlined" color="primary" onClick={() => increaseQuantity(item.id)}>+</Button>
                    </Grid>
                    {/* <p style={{ textAlign: 'left', margin: 0, color: 'black' }}>{TotalCost}</p>
                    <p style={{ textAlign: 'left', margin: 0, color: 'black' }}>{OrderCost}</p> */}
                  </Grid>
                  <Grid item xs={1}>
                  <Button startIcon={<DeleteSharpIcon />} sx={{ alignSelf: 'flex-start' }} onClick={() => removeFromCart(item.id)}></Button>
                  </Grid>
                </Grid>
          </Grid>
        </Grid>
      </li>
      <Divider color="black"/>
      </Box>
      ))}
    </ul>
  );
};

export default Cart;
