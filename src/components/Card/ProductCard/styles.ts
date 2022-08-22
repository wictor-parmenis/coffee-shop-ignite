import styled from 'styled-components';

export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.5rem 0.5rem 0.5rem;
    background-color: ${({ theme }) => theme['base-card']};

    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;

    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;

export const ImageProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);

    width: 10rem;
`;

export const MainProductCard = styled.div`
    margin-top: 1rem;
`;

export const TagProduct = styled.span`
    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};

    text-transform: uppercase;
    font-weight: bold;

    margin-top: 1rem;
`;

export const TitleProduct = styled.h3`
    font-family: 'Baloo 2', cursive;
`;

export const DescriptionProduct = styled.p`
    margin-top: 1rem;

    color: ${({ theme }) => theme['base-label']};
`;

export const FooterProductCard = styled.div`
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PriceProduct = styled.p``;

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.3rem;
`;

export const CounterButtonProduct = styled.button``;

export const CounterLabelProduct = styled.label``;
