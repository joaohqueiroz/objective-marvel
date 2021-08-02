import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    width: 100%;
`;

export const Main = styled.div`
    width: 100%;

    padding: 4rem 11.3rem 1.6rem;

    @media only screen and (max-width: 600px) {
        padding: 4rem 2.4rem 1.6rem;
    }
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

    @media only screen and (max-width: 600px) {
        font-size: 24px;
        justify-content: center;
        margin-bottom: 2.4rem;
    }
`;

export const Search = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    margin-bottom: 4rem;

    p {
        font-family: 'PT Sans Caption';
        font-weight: bold;
        font-size: 16px;

        margin-bottom: .8rem;
    }

    @media only screen and (max-width: 600px) {
        align-items: center;
    }
`;

export const InputWrapper = styled.div`
    width: 29.5rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .4rem .8rem;
    height: 3.2rem;

    input {
        font-family: 'PT Sans';
        font-size: 14px;
        font-style: italic;

        width: 100%;
        padding: .4rem .8rem;
        border: none;
        outline: none;
    }

    button {
        width: 2.4rem;
        height: 2.4rem;
        margin: 0 .8rem;
        border: none;
        background-color: white;
        cursor: pointer;
        color: #555555;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const ListTitle = styled.div`
    font-family: "PT Sans";
    font-size: 12px;
    color: #8E8E8E;
    padding: 0 2.4rem;
    margin-bottom: .9rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    @media screen and (max-width: 800px) {
        span.hide {
            display: none;
        }
    }
`;

export const ItemsList = styled.div`
`;