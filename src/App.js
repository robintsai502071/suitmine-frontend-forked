import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Login from './routes/login/login.component';
import Register from './routes/register/register.component';
import ProductList from './routes/product-list/productList.component';
import BookingMap from './routes/booking-map/bookingMap.component';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="booking-map" element={<BookingMap />} />
      </Route>
    </Routes>
  );
}

export default App;
