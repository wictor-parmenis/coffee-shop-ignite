import React from 'react';
import CompletingCheckout from './components/CompletingCheckout';
import ProductsSelected from './components/ProductsSelected';
import { CheckoutContainer, LeftContainer, RigthContainer } from './styles';

// import { Container } from './styles';

const Checkout: React.FC = () => (
  <CheckoutContainer>
    <LeftContainer>
      <CompletingCheckout />
    </LeftContainer>
    <RigthContainer>
      <ProductsSelected />
    </RigthContainer>
  </CheckoutContainer>
);

export default Checkout;
