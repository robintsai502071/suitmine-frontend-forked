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
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="/booking-date">
          <BookingDate />
        </Route>

        <Route path="/shopping-cart">
          <ShoppingCart />
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
