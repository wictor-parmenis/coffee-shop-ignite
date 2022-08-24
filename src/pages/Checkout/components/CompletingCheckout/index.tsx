import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import IconTextButton from '../../../../components/Button/IconTextButton';
import Input from '../../../../components/Input';
import {
  ContainerCheckout,
  customStyledButton,
  DeliveryContainerCheckout,
  DescriptionCheckout,
  FormCheckout,
  InputsContainerCheckout,
  PayButtonsContainerCheckout,
  PayContainerCheckout,
  RowFirst,
  RowFourth,
  RowSecond,
  RowThird,
  SubTitleCheckout,
  SubTitleContainer,
  TitleCheckout,
} from './styles';

const CompletingCheckout: React.FC = () => (
  <ContainerCheckout>
    <TitleCheckout>Complete seu pedido</TitleCheckout>
    <DeliveryContainerCheckout>
      <FormCheckout>
        <SubTitleContainer themeApp="secondary">
          <MapPinLine size={24} />
          <div>
            <SubTitleCheckout>Endereço de entrega</SubTitleCheckout>
            <DescriptionCheckout>
              Informe o endereço onde deseja receber seu pedido
            </DescriptionCheckout>
          </div>
        </SubTitleContainer>
        <InputsContainerCheckout>
          <RowFirst>
            <Input placeholder="CEP" />
          </RowFirst>
          <RowSecond>
            <Input placeholder="Rua" />
          </RowSecond>
          <RowThird>
            <Input placeholder="Número" />
            <Input placeholder="Complemento" />
          </RowThird>
          <RowFourth>
            <Input placeholder="Bairro" />
            <Input placeholder="Cidade" />
            <Input placeholder="UF" />
          </RowFourth>
        </InputsContainerCheckout>
      </FormCheckout>
    </DeliveryContainerCheckout>
    <PayContainerCheckout>
      <SubTitleContainer themeApp="primary">
        <CurrencyDollar size={24} />
        <div>
          <SubTitleCheckout>Pagamento</SubTitleCheckout>
          <DescriptionCheckout>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </DescriptionCheckout>
        </div>
      </SubTitleContainer>
      <PayButtonsContainerCheckout>
        <IconTextButton
          style={customStyledButton}
          themeButton="secondary"
          icon="credit-card"
        >
          Cartão de crédito
        </IconTextButton>
        <IconTextButton style={customStyledButton} themeButton="secondary" icon="bank">
          Cartão de débito
        </IconTextButton>
        <IconTextButton style={customStyledButton} themeButton="secondary" icon="money">
          Dinheiro
        </IconTextButton>
      </PayButtonsContainerCheckout>
    </PayContainerCheckout>
  </ContainerCheckout>
);

export default CompletingCheckout;
