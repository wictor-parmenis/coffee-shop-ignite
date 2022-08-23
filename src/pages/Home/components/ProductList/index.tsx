import React from 'react';
import ProductCard from '../../../../components/Card/ProductCard';
import { IFormattedProduct, IProduct } from '../../../../contexts/productsContext';

import { ProductListContainer, ProductListMain, TitleProductList } from './styles';

interface IProductList {
    products: IFormattedProduct[];
}

const ProductList: React.FC<IProductList> = ({ products }) => (
  <ProductListContainer>
    <TitleProductList>Nossos Cafés</TitleProductList>
    <ProductListMain>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListMain>
  </ProductListContainer>
);

export default ProductList;
