import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '../components/layouts/DefaultLayout';
import Checkout from '../pages/Checkout';
// import DefaultLayout from '../components/layouts/DefaultLayout';
import Home from '../pages/Home';
import Success from '../pages/Success';

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </Route>
  </Routes>
);

export { Router };
