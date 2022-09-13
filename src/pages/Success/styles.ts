import styled from 'styled-components';

export interface IDescriptionSuccess {
    bold?: boolean;
}
export interface IIconSuccessContainer {
    backgroundColor?: string;
}

export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 6rem;
`;
export const MainSuccess = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
`;

export const LeftContainer = styled.div`
    flex: 50%;
`;

export const RightContainer = styled.div`
    flex: 50%;
    img {
        width: 90%;
    }
`;

export const TitleSuccess = styled.h2`
    font-family: 'Baloo 2', cursive;
    color: ${({ theme }) => theme['yellow-dark']};
    font-size: 1.8rem;

    margin-bottom: 1.5rem;
`;

export const SubtitleSuccess = styled.h3`
    color: ${({ theme }) => theme['base-subtitle']};
    font-weight: 400;
`;

export const IconSuccessContainer = styled.div<IIconSuccessContainer>`
    svg {
        width: 2.5rem;
        height: 2.5rem;
        color: white;
        background-color: ${({ theme, backgroundColor }) => backgroundColor || theme.purple};
        border-radius: 50%;

        padding: 0.5rem;
    }
`;

export const GradientCard = styled.div`
    padding: 2.5rem;
    margin-top: 5rem;
    width: 90%;
    height: 18rem;
    display: inline-block;

    aspect-ratio: 1;
    position: relative;
    z-index: 0;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    --b: 1px;
    /* border width*/
    /* border: 1px solid ${({ theme }) => theme.purple};

    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;

    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px; */

    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        inset: 0;
        background: var(--c, linear-gradient(to right, #dbac2c, #8047f8));
        padding: var(--b);
        border-bottom-left-radius: 20px;
        border-top-right-radius: 20px;

        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
    }
`;

export const TopicInfoProduct = styled.ul`
    display: flex;
    gap: 1rem;
`;

export const TopicDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DescriptionSuccess = styled.p<IDescriptionSuccess>`
    font-weight: ${({ bold }) => (bold ? 'bold' : '400')};
    color: ${({ theme }) => theme['base-text']};
`;
