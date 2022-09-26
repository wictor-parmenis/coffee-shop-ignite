/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  DescriptionSuccess,
  GradientCard,
  IconSuccessContainer,
  LeftContainer,
  MainSuccess,
  RightContainer,
  SubtitleSuccess,
  SuccessContainer,
  TitleSuccess,
  TopicDescriptionContainer,
  TopicInfoProduct,
} from './styles';
import Delivery from '../../assets/delivery.png';
import { ICheckoutFormValidator } from '../Checkout';
import storageAlias from '../../config/storageConfig';
import { formatTypePayment } from '../../utils/formatUtils';

const Success: React.FC = () => {
  const themeApplication = useContext(ThemeContext);
  const [userData, setUserData] = useState({} as ICheckoutFormValidator);

  useEffect(() => {
    const storageDataForm = localStorage.getItem(storageAlias.formBasic);
    const parsedAddress: ICheckoutFormValidator = storageDataForm
      ? JSON.parse(storageDataForm)
      : {};
    setUserData(parsedAddress);
  }, []);

  if (!userData) {
    return <p>loading</p>;
  }

  return (
        <SuccessContainer>
            <TitleSuccess>Uhu! Pedido confirmado</TitleSuccess>
            <SubtitleSuccess>Agora é só aguardar que logo o café chegará até você</SubtitleSuccess>
            <MainSuccess>
                <LeftContainer>
                    <GradientCard>
                        <TopicInfoProduct>
                            <IconSuccessContainer>
                                <MapPin />
                            </IconSuccessContainer>
                            <TopicDescriptionContainer>
                                <DescriptionSuccess>
                                    {/* eslint-disable-next-line max-len */}
                                    {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                                    Entrega em{' '}
                                    <b>
                                        {' '}
                                        Rua {userData.street},{userData.number}
                                    </b>
                                </DescriptionSuccess>
                                <DescriptionSuccess>
                                    {userData.neighborhood} - {userData.city},{userData.state}
                                </DescriptionSuccess>
                            </TopicDescriptionContainer>
                        </TopicInfoProduct>

                        <TopicInfoProduct>
                            <IconSuccessContainer backgroundColor={themeApplication.yellow}>
                                <Timer />
                            </IconSuccessContainer>
                            <TopicDescriptionContainer>
                                <DescriptionSuccess>Previsão de entrega</DescriptionSuccess>
                                <DescriptionSuccess bold>20 min - 30 min </DescriptionSuccess>
                            </TopicDescriptionContainer>
                        </TopicInfoProduct>

                        <TopicInfoProduct>
                            <IconSuccessContainer backgroundColor={themeApplication['yellow-dark']}>
                                <CurrencyDollar />
                            </IconSuccessContainer>
                            <TopicDescriptionContainer>
                                <DescriptionSuccess>Pagamento na entrega</DescriptionSuccess>
                                <DescriptionSuccess bold>
                                    {formatTypePayment({ typePayment: userData.typePayment || '' })}
                                </DescriptionSuccess>
                            </TopicDescriptionContainer>
                        </TopicInfoProduct>
                    </GradientCard>
                </LeftContainer>
                <RightContainer>
                    <img src={Delivery} alt="Imagem de entregador" />
                </RightContainer>
            </MainSuccess>
        </SuccessContainer>
  );
};

export default Success;
