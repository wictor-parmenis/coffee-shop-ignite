import React, { useState } from 'react';
import { IProduct } from '../../contexts/productsContext';
import { formatCurrency } from '../../utils/currency';
import { productsList } from '../Home';
import CompletingCheckout from './components/CompletingCheckout';
import ProductsSelected from './components/ProductsSelected';
import { CheckoutContainer, LeftContainer, RigthContainer } from './styles';

const Checkout: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>(productsList);

  const formattedProducts = products.map((product) => ({
    ...product,
    // price: String(product.price).replace('.', ','),
    price: String(product.price),
  }));

  console.log(formatCurrency(1), 'price');
  return (
    <CheckoutContainer>
      <LeftContainer>
        <CompletingCheckout />
      </LeftContainer>
      <RigthContainer>
        <ProductsSelected products={formattedProducts.slice(0, 2)} />
      </RigthContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
