import styled from 'styled-components';

interface ISubTitleContainer {
    themeApp: 'primary' | 'secondary';
}

export const ContainerCheckout = styled.div``;

const ContainerBase = styled.div`
    background-color: ${({ theme }) => theme['base-card']};
    padding: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1.2rem;
`;

export const DeliveryContainerCheckout = styled(ContainerBase)``;

export const TitleCheckout = styled.h2`
    font-family: 'Baloo 2', cursive;
    margin-bottom: 1.2rem;
`;

export const FormCheckout = styled.form``;

export const SubtitleBase = styled.p`
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.1rem;
    margin-bottom: 10px;
`;

export const SubTitleContainer = styled.div<ISubTitleContainer>`
    display: flex;
    gap: 0.5rem;

    svg {
        transform: translateY(-10%);
        color: ${({ themeApp, theme }) => (themeApp === 'secondary' ? theme['yellow-dark'] : theme.purple)};
    }
`;

export const SubTitleCheckout = styled(SubtitleBase)``;

export const DescriptionCheckout = styled.p`
    font-size: 0.95rem;
    color: ${({ theme }) => theme['base-subtitle']};
`;

export const InputsContainerCheckout = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 3rem;
`;

export const Row = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
`;

export const RowFirst = styled(Row)``;

export const RowSecond = styled(Row)`
    input {
        width: 100%;
    }
`;

export const RowThird = styled(Row)`
    input {
        &:nth-child(2) {
            width: 100%;
        }
    }
`;

export const RowFourth = styled(Row)`
    input {
        &:nth-child(2) {
            width: 68%;
        }

        &:nth-child(3) {
            width: 12%;
        }
    }
`;

export const PayContainerCheckout = styled.div`
    background-color: ${({ theme }) => theme['base-card']};
    padding: 2.5rem;
    margin-bottom: 1.2rem;

    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const PayButtonsContainerCheckout = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1rem;
`;

export const customStyledButton = {
  height: '3.5rem',
  width: '35%',
  fontSize: '0.9rem',
};
