import React, { useContext, useMemo } from 'react';

import {
  Coffee, Package, ShoppingCart, Timer,
} from 'phosphor-react';
import { ThemeContext } from 'styled-components';
import {
  CoverContainer,
  DescriptionCover,
  GridTopics,
  ImageCoverContainer,
  LeftCover,
  RightCover,
  TitleCover,
  Topic,
} from './styles';
import CoverImage from '../../../../assets/cover.png';

const sizeDefaultTopicItems = 28;
const Cover: React.FC = () => {
  const themeApplication = useContext(ThemeContext);
  const topics = useMemo(
    () => [
      {
        text: 'Compra simples e segura',
        icon: <ShoppingCart size={sizeDefaultTopicItems} />,
        color: themeApplication['yellow-dark'],
      },
      {
        text: 'Entrega rápida e rastreada',
        icon: <Timer size={sizeDefaultTopicItems} />,
        color: themeApplication.yellow,
      },
      {
        text: 'Embalagem mantém o café intacto',
        icon: <Package size={sizeDefaultTopicItems} />,
        color: themeApplication['base-text'],
      },
      {
        text: 'O café chega fresquinho até você',
        icon: <Coffee size={sizeDefaultTopicItems} />,
        color: themeApplication['purple-dark'],
      },
    ],
    [],
  );
  return (
    <CoverContainer>
      <LeftCover>
        <TitleCover>Encontre o café perfeito </TitleCover>
        <TitleCover>para qualquer hora do dia</TitleCover>
        <DescriptionCover>
          Com o Coffee Delivery você recebe seu café onde estiver, a
          <br />
          {' '}
          qualquer hora
        </DescriptionCover>
        <GridTopics>
          {topics.map((content) => (
            <Topic backgroundColor={content.color}>
              {content.icon}
              <p>{content.text}</p>
            </Topic>
          ))}
        </GridTopics>
      </LeftCover>
      <RightCover>
        <ImageCoverContainer>
          <img src={CoverImage} alt="Café no copo" />
        </ImageCoverContainer>
      </RightCover>
    </CoverContainer>
  );
};

export default Cover;
