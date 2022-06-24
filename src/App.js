import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from './pages/Blog';
import BookingDate from './pages/BookingDate';
import BookingMap from './pages/BookingMap';
import CustomerService from './pages/CustomerService';
import Customize from './pages/Customize';
import GiftCard from './pages/GiftCard';
import Home from './pages/Home';
import Measurement from './pages/Measurement';
import Member from './pages/Member';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
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

        <Route path="/member">
          <Member />
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
