import React, { useState } from 'react';
import { IProduct } from '../../contexts/productsContext';
import Cover from './components/Cover';
import ProductList from './components/ProductList';

// import { Container } from './styles';

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  // get products of fake api

  return (
    <>
      <Cover />
      <ProductList products={products} />
    </>
  );
};

export default Home;
