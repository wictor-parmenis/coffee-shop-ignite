import React, { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { IProductsContext, ProductsContext } from '../../contexts/productsContext';
import CompletingCheckoutForm from './components/CompletingCheckoutForm';
import ProductsSelected from './components/ProductsSelected';
import {
  CheckoutContainer, LeftContainer, MainContainer, RigthContainer,
} from './styles';
import { formatPrice } from '../../utils/formatUtils';
import storageAlias from '../../config/storageConfig';

const checkoutFormValidator = yup.object().shape({
  cep: yup.string().length(8, 'Informe um CEP válido'),
  street: yup.string().required('Informe uma rua'),
  number: yup.string().required('Informe um número residencial'),
  city: yup.string().required('Informe sua cidade'),
  state: yup.string().length(2, 'Insira um estado válido').required('Informe seu estado'),
  complement: yup.string(),
  neighborhood: yup.string().required('Informe um bairro válido'),
  typePayment: yup
    .string()
    .oneOf(['credit_card', 'debit_card', 'money'], 'Informe uma forma de pagamento')
    .required('Informe uma forma de pagamento válida'),
});

export type ITypePayment = 'credit_card' | 'debit_card' | 'money' | '';
export interface ICheckoutFormValidator {
    cep: string;
    city: string;
    number: string;
    street: string;
    state: string;
    complement: string;
    neighborhood: string;
    typePayment: ITypePayment;
}

const Checkout: React.FC = () => {
  const { products, clearCart } = useContext<IProductsContext>(
        ProductsContext as React.Context<IProductsContext>,
  );
  const navigate = useNavigate();

  const formattedProducts = products.map((product) => ({
    ...product,
    price: formatPrice(product.price).replace('R$', ''),
  }));

  const checkoutForm = useForm<ICheckoutFormValidator>({
    resolver: yupResolver(checkoutFormValidator),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      number: '',
      state: '',
      street: '',
      neighborhood: '',
      typePayment: '',
    },
  });

  const handleCheckoutSubmit = (values: ICheckoutFormValidator) => {
    localStorage.setItem(storageAlias.formBasic, JSON.stringify(values));
    clearCart();
    navigate('/success');
  };

  const { handleSubmit } = checkoutForm;

  return (
    <CheckoutContainer>
      <form action="" onSubmit={handleSubmit(handleCheckoutSubmit)}>
        <FormProvider {...checkoutForm}>
          <MainContainer>
            <LeftContainer>
              <CompletingCheckoutForm />
            </LeftContainer>
            <RigthContainer>
              <ProductsSelected products={formattedProducts.slice(0, 2)} />
            </RigthContainer>
          </MainContainer>
        </FormProvider>
      </form>
    </CheckoutContainer>
  );
};

export default Checkout;
