import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background-color: ${({ theme }) => theme.yellow};
    border-radius: 8px;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    text-transform: uppercase;
    transition-duration: 0.3s;
    cursor: pointer;
    border: none;
    color: ${({ theme }) => theme.white};
    padding: 1rem 2.5rem;

    &:hover {
        background-color: ${({ theme }) => theme['yellow-dark']};
    }
`;
