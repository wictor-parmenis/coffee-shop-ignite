import React from 'react';
import { IFormattedProduct, IProduct } from '../../../contexts/productsContext';
import ShoppingCartButton from '../../Button/ShoppingCartButton';
import CoffeeImage from '../../../assets/american-express.png';

import {
  CountDownContainer,
  DescriptionProduct,
  FooterProductCard,
  ImageProductContainer,
  MainProductCard,
  PriceContainer,
  PriceProduct,
  ProductCardContainer,
  TagProduct,
  TitleProduct,
} from './styles';
import Counter from '../../Counter';

interface IProductCard {
    product: IFormattedProduct;
}

const ProductCard: React.FC<IProductCard> = ({ product: { description, price, title } }) => (
  <ProductCardContainer>
    <ImageProductContainer>
      <img src={CoffeeImage} alt={title} />
    </ImageProductContainer>

    <MainProductCard>
      <TagProduct>ótimo</TagProduct>
      <TitleProduct>{title}</TitleProduct>
      <DescriptionProduct>{description}</DescriptionProduct>
    </MainProductCard>

    <FooterProductCard>
      <PriceContainer>
        <DescriptionProduct>R$</DescriptionProduct>
        <PriceProduct>{price}</PriceProduct>
      </PriceContainer>

      <CountDownContainer>
        <Counter
          currentQuantity={1}
          onLess={() => console.log('1')}
          onMore={() => console.log('2')}
        />
        <ShoppingCartButton theme="primary" />
      </CountDownContainer>
    </FooterProductCard>
  </ProductCardContainer>
);

export default ProductCard;
