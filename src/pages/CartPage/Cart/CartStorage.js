import SnowWhite from '../../../assets/WeeklyPicked/SnowWhite.jpeg';
import Technic from '../../../assets/WeeklyPicked/Technic.jpeg';
import Senna from '../../../assets/WeeklyPicked/Senna.jpeg';


const CartData = [
    { id: 1, name: 'Autuch', price: 10, image: Technic, quantity: 1 },
    { id: 2, name: 'Auto', price: 20, image: Senna, quantity: 1 },
    { id: 3, name: 'Domek', price: 30, image: SnowWhite, quantity: 1 }
  ];
  export default CartData;
  
  // Zapisanie danych do Local Storage
  localStorage.setItem('cart', JSON.stringify(CartData));
  
  // Pobranie danych z Local Storage
  const retrievedCartData = JSON.parse(localStorage.getItem('cart'));
  
  // Wyświetlenie danych
  console.log(retrievedCartData);
