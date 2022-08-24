import React from 'react';
import { CounterButtonProduct, CounterContainer, CounterLabelProduct } from './styles';

interface ICounter {
    onLess: () => void;
    onMore: () => void;
    currentQuantity: number;
}

const Counter: React.FC<ICounter> = ({ currentQuantity = 1, onLess, onMore }) => (
  <CounterContainer>
    <CounterButtonProduct onClick={onLess}>
      <p>_</p>
    </CounterButtonProduct>
    <CounterLabelProduct>{currentQuantity}</CounterLabelProduct>
    <CounterButtonProduct onClick={onMore}>+</CounterButtonProduct>
  </CounterContainer>
);

export default Counter;
