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

    width: 23%;
    height: 25rem;

    margin: auto;
    margin-top: 4rem;

    position: relative;
`;

export const ImageProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 10rem;
    height: 4rem;

    img {
        transform: translateY(10%);
    }
`;

export const MainProductCard = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const TagProduct = styled.span`
    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    padding: 0.4rem 0.6rem;
    border-radius: 15px;

    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: bold;

    margin-top: 1rem;
`;

export const TitleProduct = styled.h3`
    font-family: 'Baloo 2', cursive;
    font-size: 1.8rem;
    color: ${({ theme }) => theme['base-text']};
`;

export const DescriptionProduct = styled.p`
    margin-top: 1rem;

    text-align: center;

    color: ${({ theme }) => theme['base-label']};
`;

export const FooterProductCard = styled.div`
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    bottom: 1rem;

    width: 90%;
    margin: auto;
`;

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    p:nth-child(1) {
        transform: translateY(-25%);
        font-weight: 400;
    }
`;

export const CountDownContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const PriceProduct = styled.p`
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    color: ${({ theme }) => theme['base-text']};
`;

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CounterButtonProduct = styled.button`
    height: 2.5rem;
    width: 1.5rem;
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme['base-button']};
    color: ${({ theme }) => theme['purple-dark']};
    font-size: 1.1rem;

    cursor: pointer;

    &:nth-child(1) {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }

    &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;

        /* up less signal */
    }
`;

export const CounterLabelProduct = styled.label`
    background-color: ${({ theme }) => theme['base-button']};
    height: 2.5rem;
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
`;
