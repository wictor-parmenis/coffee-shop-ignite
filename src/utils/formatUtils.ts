import { IProduct } from '../contexts/productsContext';
import { ITypePayment } from '../pages/Checkout';

export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

type KeyProduct = keyof IProduct;

interface IFormatListProducts {
    listProducts: IProduct[];
    newValue: any;
    keysForUpdate: KeyProduct[];
}
export const formatListProducts = ({
  listProducts,
  newValue,
  keysForUpdate,
}: IFormatListProducts) => {
  keysForUpdate.forEach((keyUpdating) => {
    listProducts.map((product) => ({
      ...product,
      [keyUpdating]: newValue,
    }));
  });

  return listProducts;
};

interface IFormatTypePayment {
    typePayment: ITypePayment;
}

export const formatTypePayment = ({ typePayment }: IFormatTypePayment) => {
  switch (typePayment) {
    case 'credit_card':
      return 'Cartão de crédito';
    case 'debit_card':
      return 'Cartão de débito';
    case 'money':
      return 'Dinheiro';
    default:
      return 'Não identificado';
  }
};
