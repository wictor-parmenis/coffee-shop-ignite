import React from 'react';
import ProductCard from '../../../../components/Card/ProductCard';
import { IProduct } from '../../../../contexts/productsContext';

import { ProductListContainer } from './styles';

interface IProductList {
    products: IProduct[];
}

const ProductList: React.FC<IProductList> = ({ products }) => (
  <ProductListContainer>
    {products.map((product) => (
      <ProductCard key={product.id} />
    ))}
  </ProductListContainer>
);

export default ProductList;
