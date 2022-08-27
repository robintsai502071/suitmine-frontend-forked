import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Login from './routes/login/login.component';
import Register from './routes/register/register.component';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
