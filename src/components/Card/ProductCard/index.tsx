import React, { useContext } from 'react';
import {
  IFormattedProduct,
  IProductsContext,
  ProductsContext,
} from '../../../contexts/productsContext';
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
    quantityCartItem: number;
}

const ProductCard: React.FC<IProductCard> = ({
  product: {
    description, price, title, id, img,
  },
  quantityCartItem,
}) => {
  const { addProductOnCart, updateCartProducts } = useContext<IProductsContext>(
        ProductsContext as React.Context<IProductsContext>,
  );

  return (
    <ProductCardContainer>
      <ImageProductContainer>
        <img src={img || CoffeeImage} alt={title} />
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
            currentQuantity={quantityCartItem}
            onLess={() => updateCartProducts({ amount: quantityCartItem - 1, productId: id })}
            onMore={() => addProductOnCart(id)}
          />
          <ShoppingCartButton theme="primary" />
        </CountDownContainer>
      </FooterProductCard>
    </ProductCardContainer>
  );
};

export default ProductCard;
