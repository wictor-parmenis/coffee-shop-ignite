import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import IconTextButton from '../../../../components/Button/IconTextButton';
import ErrorMessage from '../../../../components/ErrorMessage';
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

const CompletingCheckoutForm: React.FC = () => {
  const {
    setValue,
    formState: { errors },
    watch,
    getValues,
  } = useFormContext();

  const formErrorsMessage = () => {
    const keysErrors = Object.keys(errors);
    let errorForShow: any;

    keysErrors.forEach((err) => {
      if (errors[err] && errors[err]?.message && err !== 'typePayment') {
        errorForShow = errors[err]?.message;
      }
      return false;
    });

    return errorForShow;
  };

  watch();

  return (
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
              <Input
                placeholder="CEP"
                id="cep"
                onChange={(event) => {
                  setValue('cep', event.target.value);
                }}
              />
            </RowFirst>
            <RowSecond>
              <Input
                placeholder="Rua"
                id="street"
                onChange={(event) => {
                  setValue('street', event.target.value);
                }}
              />
            </RowSecond>
            <RowThird>
              <Input
                placeholder="Número"
                id="number"
                onChange={(event) => {
                  setValue('number', event.target.value);
                }}
              />
              <Input
                placeholder="Complemento"
                id="complement"
                onChange={(event) => {
                  setValue('complement', event.target.value);
                }}
              />
            </RowThird>
            <RowFourth>
              <Input
                placeholder="Bairro"
                id="neighborhood"
                onChange={(event) => {
                  setValue('neighborhood', event.target.value);
                }}
              />
              <Input
                placeholder="Cidade"
                id="city"
                onChange={(event) => {
                  setValue('city', event.target.value);
                }}
              />
              <Input
                placeholder="UF"
                id="state"
                onChange={(event) => {
                  setValue('state', event.target.value);
                }}
              />
            </RowFourth>
          </InputsContainerCheckout>
          {formErrorsMessage() && <ErrorMessage>{formErrorsMessage()}</ErrorMessage>}
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
            type="button"
            style={customStyledButton}
            themeButton="secondary"
            icon="credit-card"
            selected={getValues('typePayment') === 'credit_card'}
            onClick={() => {
              setValue('typePayment', 'credit_card');
            }}
          >
            Cartão de crédito
          </IconTextButton>
          <IconTextButton
            type="button"
            selected={getValues('typePayment') === 'debit_card'}
            style={customStyledButton}
            themeButton="secondary"
            icon="bank"
            onClick={() => {
              setValue('typePayment', 'debit_card');
            }}
          >
            Cartão de débito
          </IconTextButton>
          <IconTextButton
            type="button"
            style={customStyledButton}
            themeButton="secondary"
            icon="money"
            selected={getValues('typePayment') === 'money'}
            onClick={() => {
              setValue('typePayment', 'money');
            }}
          >
            Dinheiro
          </IconTextButton>
        </PayButtonsContainerCheckout>
        <ErrorMessage>{errors?.typePayment?.message || ''}</ErrorMessage>
      </PayContainerCheckout>
    </ContainerCheckout>
  );
};

export default CompletingCheckoutForm;
