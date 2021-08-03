import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 8.8rem;
    border-radius: 4px;
    box-shadow: 0px 0px 5px #00000033;
    padding: 2rem 2.4rem;
    background-color: white;
    margin-bottom: .8rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    align-items: center;

    :hover {
        cursor: pointer;
        border: 2px solid #8E8E8E;
        padding: 1.8rem 2.2rem;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

export const Img = styled.img`
    border-radius: 4px;
    width: 4.8rem;
    height: 4.8rem;
    margin-right: 2.4rem;
`;

export const Name = styled.span`
    font-family: "PT Sans";
    font-size: 16px;
    font-weight: bold;
`;

export const Char = styled.div`
    display: flex;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    overflow: hidden;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const Text = styled.p`
    font-family: "PT Sans";
    font-size: 1.4rem;
`;