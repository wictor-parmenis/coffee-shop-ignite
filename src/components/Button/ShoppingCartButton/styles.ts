import styled, { css } from 'styled-components';

export type IThemeShoppingCartButton = 'primary' | 'secondary';

interface IShoppingCartButtonContainer {
    themeButton: IThemeShoppingCartButton;
}

const iconButtonThemeColor = {
  primary: css`
        background-color: ${({ theme }) => theme['purple-dark']};
    `,
  secondary: css`
        background-color: ${({ theme }) => theme['yellow-light']};
    `,
};

export const ShoppingCartButtonContainer = styled.button<IShoppingCartButtonContainer>`
    ${(props) => (props.themeButton === 'secondary'
    ? iconButtonThemeColor.secondary
    : iconButtonThemeColor.primary)};

    border-radius: 8px;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    color: ${({ theme }) => theme.white};
    width: 2.5rem;
    height: 2.5rem;
    transition-duration: 0.3s;

    &:hover {
        background-color: ${(props) => props.themeButton !== 'secondary' && props.theme.purple};
    }

    svg {
        color: ${({ theme, themeButton }) => (themeButton !== 'primary' ? theme['yellow-dark'] : theme.white)};
    }
`;

export const NumberIcon = styled.span`
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    background-color: ${({ theme }) => theme['yellow-light']};
    text-transform: uppercase;
    font-weight: bold;
`;
