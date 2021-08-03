import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 2rem 11.3rem 1.6rem;

    a {
        text-decoration: none;
        color: inherit;
        width: 100%;
    }

    @media only screen and (max-width: 800px) {
        padding: 2rem 2.4rem 1.6rem;
    }
`;

export const Avatar = styled.img`
    height: 20rem;
    width: 20rem;
    border-radius: 4px;
    margin-bottom: 1.6rem;

    @media only screen and (max-width: 600px) {
        height: 14rem;
        width: 14rem;
    }
`;

export const Title = styled.span`
    font-family: 'PT Sans Caption';
    font-weight: bold;
    font-size: 32px;
    width: 100%;

    display:flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 600px) {
        font-size: 24px;
        margin-bottom: 2.4rem;
    }
`;

export const Char = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 2.4rem;
`;

export const Button = styled.div`
    width: ${props => props.left ? '100%' : ''};
    margin-bottom: 1rem;
    cursor: pointer;

    display: flex;
    align-items: center;

    font-family: "PT Sans";
    font-size: 18px;
    font-weight: bold;
`;

export const Content = styled.div`
    width: 100%;
    border-radius: 4px;
    background-color: white;
    margin-top: 2.4rem;
    padding: 2rem 1rem; 
    box-shadow: 0px 0px 5px #00000033;
    transition: 1.5s;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    margin-top: .4rem;
    margin-bottom: 1.6rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-row-gap: 2.4rem;
    align-items: center;

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 400px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ContentItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentImg = styled.img`
    border-radius: 4px;
    margin-bottom: .8rem;
`;

export const ContentName = styled.span`
    font-family: 'PT Sans Caption';
    font-size: 16px;
    width: 100%;

    display:flex;
    align-items: center;
    justify-content: center;
`;