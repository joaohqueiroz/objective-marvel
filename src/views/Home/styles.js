import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Main = styled.div`
    height: 100%;
    width: 100%;

    padding: 4rem 11.3rem 2.4rem;
`;

export const Title = styled.div`
    font-family: 'PT Sans Caption';
    font-weight: bold;
    font-size: 32px;
    width: 100%;
    margin-bottom: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: start;
`;

export const Search = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;

    p {
        font-family: 'PT Sans Caption';
        font-weight: bold;
        font-size: 16px;

        margin-bottom: .8rem;
    }

    input {
        font-family: 'PT Sans';
        font-size: 14px;
        font-style: italic;

        min-width: 29.5rem;
        height: 3.2rem;
        padding: .8rem 1.6rem;
        border: none;
    }
`;