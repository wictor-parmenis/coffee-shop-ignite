import styled from 'styled-components';

export const TitleProducts = styled.h2`
    font-family: 'Baloo 2', cursive;
    margin-bottom: 1.2rem;
`;

export const ContainerProducts = styled.div`
    width: 100%;
`;

export const MainProducts = styled.div`
    background-color: ${({ theme }) => theme['base-card']};

    width: 100%;
    padding: 2.5rem;
    margin-bottom: 1.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;

    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;

export const CardProductsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const PricingContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-top: 2rem;
`;

export const RowPricing = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DescriptionPrice = styled.p`
    color: ${({ theme }) => theme['base-text']};
`;

export const BoldDescriptionPrice = styled.p`
    color: ${({ theme }) => theme['base-subtitle']};
    font-weight: bold;
`;

export const FooterPricingContainer = styled.div`
    margin-top: 2rem;
`;

export const customStyledButtom = {
  width: '100%',
};
