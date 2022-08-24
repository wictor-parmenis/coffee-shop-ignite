import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: ${({ theme }) => theme['base-card']};
    padding: 2rem 0rem;
    height: 10rem;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-content: flex-start;

    border-bottom: 1px solid ${({ theme }) => theme['base-button']};
`;

export const LeftCardContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    img {
        width: 6rem;
        padding-right: 1rem;
    }
`;

export const MainCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    height: 100%;
`;

export const ControlsCard = styled.div`
    display: flex;
    gap: 1rem;
`;

export const SubTitleCard = styled.p`
    font-size: 1.1rem;
`;

export const RigthCardContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    height: 100%;
`;

export const PriceDescription = styled.p`
    font-weight: bold;
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.2rem;
`;
