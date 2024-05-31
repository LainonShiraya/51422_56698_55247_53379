import { Route, Routes } from 'react-router-dom';
import MyOrders from './MyOrders/MyOrders';
import MyAddress from './MyAddress/MyAddress';
import AccountPageTemplate from './AccountPageTemplate';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import WishList from './WishList/WishList';
import AccFoot from './AccountFoot';

const AccountPage = () => {
  return (
    <AccountPageTemplate>
          <Routes>
            <Route path="/" element={<GeneralInfo />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/address" element={<MyAddress />} />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>
          <AccFoot/>
    </AccountPageTemplate>

  );
};

export default AccountPage;
