import React from 'react';
import {
  ContainerCheckout,
  DeliveryContainerCheckout,
  DescriptionCheckout,
  FormCheckout,
  InputsContainerCheckout,
  PayButtonsContainerCheckout,
  PayContainerCheckout,
  SubTitleCheckout,
  SubTitleContainerCheckout,
  TitleCheckout,
} from './styles';

const CompletingCheckout: React.FC = () => (
  <ContainerCheckout>
    <TitleCheckout>Complete seu pedido</TitleCheckout>
    <DeliveryContainerCheckout>
      <FormCheckout>
        <SubTitleContainerCheckout>
          {/* icon */}
          <div>
            <SubTitleCheckout>Endereço de entrega</SubTitleCheckout>
            <DescriptionCheckout>
              Informe o endereço onde deseja receber seu pedido
            </DescriptionCheckout>
          </div>
          <InputsContainerCheckout>{/* inputs */}</InputsContainerCheckout>
        </SubTitleContainerCheckout>
      </FormCheckout>
    </DeliveryContainerCheckout>
    <PayContainerCheckout>
      <SubTitleContainerCheckout>
        {/* icon */}
        <div>
          <SubTitleCheckout>Pagamento</SubTitleCheckout>
          <DescriptionCheckout>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </DescriptionCheckout>
        </div>
        <InputsContainerCheckout>{/* inputs */}</InputsContainerCheckout>
      </SubTitleContainerCheckout>
      <PayButtonsContainerCheckout>{/* buttons */}</PayButtonsContainerCheckout>
    </PayContainerCheckout>
  </ContainerCheckout>
);

export default CompletingCheckout;
