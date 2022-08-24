import styled from 'styled-components';

export const InputContainer = styled.input`
    background-color: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};

    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 4px;

    display: flex;
    flex-wrap: wrap;
    padding-left: 10px;
    height: 3rem;

    &:focus {
        border: 1px solid ${({ theme }) => theme['yellow-dark']};
    }

    &:hover {
        color: inherit;
    }
`;
