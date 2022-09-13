import React, { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { ICheckoutFormValidator } from '../..';
import Button from '../../../../components/Button';
import CheckoutProductCard from '../../../../components/Card/CheckoutProductCard';
import {
  IFormattedProduct,
  IProductsContext,
  ProductsContext,
} from '../../../../contexts/productsContext';
import { formatPrice } from '../../../../utils/formatUtils';
import {
  BoldDescriptionPrice,
  CardProductsContainer,
  ContainerProducts,
  customStyledButtom,
  DescriptionPrice,
  FooterPricingContainer,
  MainProducts,
  PricingContainer,
  RowPricing,
  TitleProducts,
} from './styles';

interface IProductsSelected {
    products: IFormattedProduct[];
}

const ProductsSelected: React.FC<IProductsSelected> = () => {
  const {
    cart, removeProductOfCart, updateCartProducts, quantityTotalProducts,
  } = useContext<IProductsContext>(ProductsContext as React.Context<IProductsContext>);

  const formattedProducts = cart.map((product) => ({
    ...product,
    price: formatPrice(product.price).replace('R$', ''),
  }));

  const totalPriceWithoutDelivery = cart.reduce((accumulator, current) => {
    accumulator += current.price;
    return accumulator;
  }, 0);
  const totalPriceDelivery = quantityTotalProducts() ? quantityTotalProducts() * 3.5 : 0;
  const totalPriceFull = totalPriceDelivery + totalPriceWithoutDelivery;

  return (
    <ContainerProducts>
      <TitleProducts>Cafés selecionados</TitleProducts>
      <MainProducts>
        <CardProductsContainer>
          {formattedProducts.map((product) => (
            <CheckoutProductCard
              product={product}
              handleLess={() => updateCartProducts({
                amount: product.amount - 1,
                productId: product.id,
              })}
              handleMore={() => updateCartProducts({
                amount: product.amount + 1,
                productId: product.id,
              })}
              handleRemove={() => removeProductOfCart(product.id)}
            />
          ))}
        </CardProductsContainer>
        <PricingContainer>
          <RowPricing>
            <DescriptionPrice>Total de Itens</DescriptionPrice>
            <DescriptionPrice>
              {formatPrice(totalPriceWithoutDelivery)}
            </DescriptionPrice>
          </RowPricing>

          <RowPricing>
            <DescriptionPrice>Entrega</DescriptionPrice>
            <BoldDescriptionPrice>
              {formatPrice(totalPriceDelivery)}
            </BoldDescriptionPrice>
          </RowPricing>

          <RowPricing>
            <BoldDescriptionPrice>Total</BoldDescriptionPrice>
            <BoldDescriptionPrice>{formatPrice(totalPriceFull)}</BoldDescriptionPrice>
          </RowPricing>
          <FooterPricingContainer>
            <Button type="submit" style={customStyledButtom}>
              confirmar pedido
            </Button>
          </FooterPricingContainer>
        </PricingContainer>
      </MainProducts>
    </ContainerProducts>
  );
};

export default ProductsSelected;
