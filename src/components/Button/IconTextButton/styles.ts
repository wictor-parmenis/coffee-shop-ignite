import styled, { css } from 'styled-components';

export type IThemeIconTextButton = 'primary' | 'secondary';

export interface IIconTextButtonContainer {
    themeButton: IThemeIconTextButton;
}

const iconTextButtonThemeColor = {
  primary: css`
        background-color: ${({ theme }) => theme['purple-ligth']};
        color: ${({ theme }) => theme['purple-dark']} !important;
    `,
  secondary: css`
        background-color: ${({ theme }) => theme['base-button']};
        color: ${({ theme }) => theme['base-text']};
        text-transform: uppercase;
    `,
};

export const IconTextButtonContainer = styled.button<IIconTextButtonContainer>`
    ${(props) => iconTextButtonThemeColor[props.themeButton]};

    display: flex;
    gap: 0.8rem;

    border-radius: 8px;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition-duration: 0.3s;
    cursor: pointer;
    border: none;
    color: ${({ theme }) => theme['base-text']};
    height: 2.5rem;
    padding: 0 1rem;

    &:hover {
        background-color: ${(props) => (props.themeButton !== 'secondary'
    ? props.theme['purple-ligth']
    : props.theme['base-hover'])};
    }

    svg {
        color: ${({ theme, themeButton }) => (themeButton !== 'primary' ? theme['yellow-dark'] : theme.white)};
    }
`;
