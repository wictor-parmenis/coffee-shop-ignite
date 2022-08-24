import React from 'react';
import Button from '../../../../components/Button';
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

// import { Container } from './styles';

const ProductsSelected: React.FC = () => (
  <ContainerProducts>
    <TitleProducts>Cafés selecionados</TitleProducts>
    <MainProducts>
      <CardProductsContainer>{/* cards */}</CardProductsContainer>
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
