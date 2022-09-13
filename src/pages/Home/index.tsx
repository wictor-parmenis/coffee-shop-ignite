import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IProductsContext, ProductsContext } from '../../contexts/productsContext';

import { formatPrice } from '../../utils/formatUtils';
import Cover from './components/Cover';
import ProductList from './components/ProductList';
import { Container } from './styles';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { products, getListProducts } = useContext<IProductsContext>(
        ProductsContext as React.Context<IProductsContext>,
  );
  useEffect(() => {
    setLoading(true);
    try {
      getListProducts();
    } catch (error) {
      toast.error('Ocorreu um erro na consulta de produtos disponíveis.');
    } finally {
      setLoading(false);
    }
  }, []);

  const formattedProducts = products.map((product) => ({
    ...product,
    price: formatPrice(product.price).replace('R$', ''),
  }));

  if (loading) {
    return <div />;
    // render spinner
  }

  return (
    <Container>
      <Cover />
      <ProductList products={formattedProducts} />
    </Container>
  );
};

export default Home;
