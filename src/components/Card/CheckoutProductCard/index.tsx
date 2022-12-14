import React from 'react';
import { IFormattedProduct, IProduct } from '../../../contexts/productsContext';
import IconTextButton from '../../Button/IconTextButton';
import Counter from '../../Counter';
import {
  CardContainer,
  ControlsCard,
  LeftCardContainer,
  MainCardContainer,
  PriceDescription,
  RigthCardContainer,
  SubTitleCard,
} from './styles';
import Image from '../../../assets/american-express.png';

interface ICheckoutProductCard {
    handleLess: () => void;
    handleMore: () => void;
    handleRemove: () => void;
    product: IFormattedProduct;
}

const CheckoutProductCard: React.FC<ICheckoutProductCard> = ({
  product: {
    price, amount, img, title,
  },
  handleLess,
  handleMore,
  handleRemove,
}) => (
  <CardContainer>
    <LeftCardContainer>
      <img src={img || Image} alt={title} />
    </LeftCardContainer>
    <MainCardContainer>
      <SubTitleCard>{title}</SubTitleCard>
      <ControlsCard>
        <Counter currentQuantity={amount} onLess={handleLess} onMore={handleMore} />
        <IconTextButton themeButton="secondary" icon="trash" onClick={handleRemove}>
          Remover
        </IconTextButton>
      </ControlsCard>
    </MainCardContainer>
    <RigthCardContainer>
      <PriceDescription>{price}</PriceDescription>
    </RigthCardContainer>
  </CardContainer>
);

export default CheckoutProductCard;
