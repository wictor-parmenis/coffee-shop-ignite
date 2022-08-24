import React from 'react';
import Button from '../../../../components/Button';
import CheckoutProductCard from '../../../../components/Card/CheckoutProductCard';
import { IFormattedProduct } from '../../../../contexts/productsContext';
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

const ProductsSelected: React.FC<IProductsSelected> = ({ products }) => (
  <ContainerProducts>
    <TitleProducts>Cafés selecionados</TitleProducts>
    <MainProducts>
      <CardProductsContainer>
        {products.map((product) => (
          <CheckoutProductCard
            product={product}
            handleLess={() => console.log('less')}
            handleMore={() => console.log('more')}
          />
        ))}
      </CardProductsContainer>
      <PricingContainer>
        <RowPricing>
          <DescriptionPrice>Total de Itens</DescriptionPrice>
          <DescriptionPrice>R$ 29,70</DescriptionPrice>
        </RowPricing>

        <RowPricing>
          <DescriptionPrice>Entrega</DescriptionPrice>
          <BoldDescriptionPrice>R$ 3,50</BoldDescriptionPrice>
        </RowPricing>

        <RowPricing>
          <BoldDescriptionPrice>Total</BoldDescriptionPrice>
          <BoldDescriptionPrice>R$ 33,20</BoldDescriptionPrice>
        </RowPricing>
        <FooterPricingContainer>
          <Button style={customStyledButtom}>confirmar pedido</Button>
        </FooterPricingContainer>
      </PricingContainer>
    </MainProducts>
  </ContainerProducts>
);

export default ProductsSelected;
