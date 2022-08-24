import styled from 'styled-components';

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

        p {
            content: '_';
            transform: translateY(-25%);
        }
    }

    &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
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
