import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;

    position: relative;
`;

export const LeftContainer = styled.div`
    width: 12rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const RightContainer = styled.div`
    width: 12rem;

    gap: 1rem;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        height: 1.3rem;
        width: 1.3rem;

        position: absolute;

        right: -10px;
        top: 12px;

        background-color: ${({ theme }) => theme['yellow-dark']};

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        p {
            color: ${({ theme }) => theme.white};
            margin: auto;
            transform: translateY(5%);
            font-weight: 500;
        }
    }
`;
