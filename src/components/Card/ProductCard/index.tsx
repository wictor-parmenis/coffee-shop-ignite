import React from 'react';
import ShoppingCartButton from '../../Button/ShoppingCartButton';

import {
  CounterButtonProduct,
  CounterContainer,
  CounterLabelProduct,
  DescriptionProduct,
  FooterProductCard,
  ImageProductContainer,
  MainProductCard,
  PriceProduct,
  ProductCardContainer,
  TagProduct,
  TitleProduct,
} from './styles';

const ProductCard: React.FC = () => (
  <ProductCardContainer>
    <ImageProductContainer>
      <img src="" alt="" />
    </ImageProductContainer>

    <MainProductCard>
      <TagProduct>ótimo</TagProduct>
      <TitleProduct>Mock</TitleProduct>
      <DescriptionProduct>excelente</DescriptionProduct>
    </MainProductCard>

    <FooterProductCard>
      <PriceProduct>10,99</PriceProduct>
      <CounterContainer>
        <CounterButtonProduct>+</CounterButtonProduct>
        <CounterLabelProduct>1</CounterLabelProduct>
        <CounterButtonProduct>-</CounterButtonProduct>
      </CounterContainer>

      <ShoppingCartButton theme="primary" />
    </FooterProductCard>
  </ProductCardContainer>
);

export default ProductCard;
