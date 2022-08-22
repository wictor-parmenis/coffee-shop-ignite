import styled from 'styled-components';

interface ITopicStyle {
    backgroundColor: string;
}

export const CoverContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 7rem;
    justify-content: space-between;
`;

export const LeftCover = styled.div``;

export const RightCover = styled.div``;

export const TitleCover = styled.h2`
    font-size: 3.6rem;
    font-weight: bold;
    line-height: 3.6rem;
    font-family: 'Baloo 2', cursive;
`;

export const DescriptionCover = styled.h3`
    margin-top: 2rem;
    font-weight: 400;
    line-height: 2rem;
`;

export const GridTopics = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 1rem;
    column-gap: 3rem;

    margin-top: 5rem;
`;

export const Topic = styled.ul<ITopicStyle>`
    display: flex;
    align-items: center;

    gap: 1rem;
    margin-bottom: 1rem;

    svg {
        background-color: ${({ backgroundColor }) => backgroundColor};
        color: ${({ theme }) => theme.white};

        width: 2.5rem;
        height: 2.5rem;
        padding: 0.5rem;
        border-radius: 50%;
    }
`;

export const ImageCoverContainer = styled.div`
    display: flex;
    align-items: flex-end;

    img {
        width: 38rem;
        margin: auto;
        margin-right: 0;
    }
`;
