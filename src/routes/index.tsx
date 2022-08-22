import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '../components/layouts/DefaultLayout';
// import DefaultLayout from '../components/layouts/DefaultLayout';
import Home from '../pages/Home';

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  </Routes>
);

export { Router };
