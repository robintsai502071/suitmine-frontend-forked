import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainForm from './components/robin/Member/user/MainForm';
import Blog from './pages/Blog';
import BookingDate from './pages/BookingDate';
import BookingMap from './pages/BookingMap';
import CustomerService from './pages/CustomerService';
import Customize from './pages/Customize';
import GiftCard from './pages/GiftCard';
import Home from './pages/Home';
import Measurement from './pages/Measurement';
import Member from './pages/Member/Member';
import MemberMobileView from './pages/Member/MemberMobileView';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import ChangePassword from './pages/Member/ChangePassword';
import OrderList from './pages/Member/OrderList';
import MyGiftCard from './pages/Member/MyGiftCard';
import MyFavorites from './pages/Member/MyFavorites';
import OrderDetail from './pages/Member/OrderDetail';
import CustomizeSlient from './pages/CustomizeSlient';
// import ShoppingCart from './pages/ShoppingCart';
import Register from './pages/Register';
import MeasurementTeaching from './pages/MeasurementTeaching';
import ShoppingCartChecking from './pages/ShoppingCartChecking';
import ShoppingCartPayment from './pages/ShoppingCartPayment';
import ShoppingCartConsumerDetail from './pages/ShoppingCartConsumerDetail';
import ShoppingCartFinish from './pages/ShoppingCartFinish';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/member/user/change-password">
          <ChangePassword />
        </Route>

        <Route path="/member/my-favorites">
          <MyFavorites />
        </Route>

        <Route path="/member/my-gift-card">
          <MyGiftCard />
        </Route>

        <Route path="/member/my-order/detail">
          <OrderDetail />
        </Route>

        <Route path="/member/my-order">
          <OrderList />
        </Route>

        <Route path="/member/m.user">
          <MainForm />
        </Route>

        <Route path="/member/user/:memberId">
          <Member />
        </Route>

        <Route path="/customize-silent">
          <CustomizeSlient />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="/measurement-teaching">
          <MeasurementTeaching />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/booking-date">
          <BookingDate />
        </Route>

        <Route path="/shopping-cart-checking">
          <ShoppingCartChecking />
        </Route>

        <Route path="/shopping-cart-payment">
          <ShoppingCartPayment />
        </Route>

        <Route path="/shopping-cart-consumerdetail">
          <ShoppingCartConsumerDetail />
        </Route>

        <Route path="/shopping-cart-finish">
          <ShoppingCartFinish />
        </Route>

        <Route path="/booking-map">
          <BookingMap />
        </Route>

        <Route path="/customer-service">
          <CustomerService />
        </Route>

        <Route path="/customize">
          <Customize />
        </Route>

        <Route path="/gift-card">
          <GiftCard />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/measurement">
          <Measurement />
        </Route>

        <Route path="/product-detail">
          <ProductDetail />
        </Route>

        <Route path="/product-list">
          <ProductList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
