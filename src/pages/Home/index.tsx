import React, { useState } from 'react';
import { IProduct } from '../../contexts/productsContext';
import Cover from './components/Cover';
import ProductList from './components/ProductList';
import { Container } from './styles';

// import { Container } from './styles';

const productsList = [
  {
    id: '1',
    amount: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
    img: '../../assets/american-express.png',
    price: 9.9,
    title: 'American Express',
  },
  {
    id: '2',
    amount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/arabe.png',
    price: 10.9,
    title: 'Arabe',
  },
  {
    id: '3',
    amount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/capuccino.png',
    price: 10.9,
    title: 'Capuccino',
  },
  {
    id: '4',
    amount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/cover.png',
    price: 8.9,
    title: 'Cover',
  },
  {
    id: '5',
    amount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/creamy-express.png',
    price: 8.9,
    title: 'Creamy Express',
  },

  {
    id: '6',
    amount: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/creamy-express.png',
    price: 8.9,
    title: 'Creamy Express',
  },
  {
    id: '7',
    amount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/cubano.png',
    price: 8.9,
    title: 'Cubano',
  },
  {
    id: '8',
    amount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/havaiano.png',
    price: 12.9,
    title: 'Havaiano',
  },
  {
    id: '9',
    amount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/hot-chocolate.png',
    price: 11.9,
    title: 'Chocolate Quente',
  },
  {
    id: '10',
    amount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/iced-express.png',
    price: 11.9,
    title: 'Iced Express',
  },
  {
    id: '11',
    amount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/irlandes.png',
    price: 14.9,
    title: 'Irlandes',
  },
  {
    id: '12',
    amount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/latte.png',
    price: 12.9,
    title: 'Latte',
  },
  {
    id: '13',
    amount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/mocaccino.png',
    price: 11.9,
    title: 'Mocaccino',
  },
  {
    id: '14',
    amount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/tradicional-express.png',
    price: 8.9,
    title: 'Tradicional Express',
  },
  {
    id: '15',
    amount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/white-coffee.png',
    price: 9.9,
    title: 'White Coffee',
  },
  {
    id: '16',
    amount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    img: '../../assets/macchiato.png',
    price: 11.9,
    title: 'Macchiato',
  },
];

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>(productsList);

  // get products of fake api

  const formattedProducts = products.map((product) => ({
    ...product,
    price: String(product.price).replace('.', ','),
  }));

  return (
    <Container>
      <Cover />
      <ProductList products={formattedProducts} />
    </Container>
  );
};

export default Home;
