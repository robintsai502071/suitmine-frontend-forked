import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Login from './routes/login/login.component';
import Register from './routes/register/register.component';
import ProductList from './routes/product-list/productList.component';
import BookingMap from './routes/silent-pages/booking-map/bookingMap.component';
import ShoppingCart from './routes/shopping-cart/shoppingCart.component';
import Checkout from './routes/checkout/checkout.component';
import OrderFinshed from './routes/order-finished/orderFinished.component';
import Measurement from './routes/silent-pages/measurement/measurement.component';
import CustomizedShow from './routes/silent-pages/customized-show/customizeShow.component';
import Member from './routes/member/member.component';
import ProductDetail from './routes/product-detail/productDetail.component';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="Shopping-cart" element={<ShoppingCart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-finished/:orderId" element={<OrderFinshed />} />
        <Route path="member" element={<Member />} />
        <Route path="product-detail/:productId" element={<ProductDetail />} />

        <Route path="booking-map" element={<BookingMap />} />
        <Route path="measurement" element={<Measurement />} />
        <Route path="customized-show" element={<CustomizedShow />} />
      </Route>
    </Routes>
  );
}

export default App;
