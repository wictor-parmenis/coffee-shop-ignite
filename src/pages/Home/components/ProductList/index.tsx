import React, { useContext } from 'react';
import ProductCard from '../../../../components/Card/ProductCard';
import {
  IFormattedProduct,
  IProductsContext,
  ProductsContext,
} from '../../../../contexts/productsContext';

import { ProductListContainer, ProductListMain, TitleProductList } from './styles';

interface IProductList {
    products: IFormattedProduct[];
}

const ProductList: React.FC<IProductList> = ({ products }) => {
  const { cart } = useContext<IProductsContext>(
        ProductsContext as React.Context<IProductsContext>,
  );

  // eslint-disable-next-line max-len
  const quantityCurrentProduct = (productId: string) => (cart.filter((item) => item.id === productId).length > 0
    ? cart.filter((item) => item.id === productId)[0].amount
    : 0);
  return (
    <ProductListContainer>
      <TitleProductList>Nossos Cafés</TitleProductList>
      <ProductListMain>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            quantityCartItem={quantityCurrentProduct(product.id)}
          />
        ))}
      </ProductListMain>
    </ProductListContainer>
  );
};

export default ProductList;
