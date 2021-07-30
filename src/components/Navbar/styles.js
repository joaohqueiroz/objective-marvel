import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    width: 100%;
    height: 6.4rem;
    padding: 2rem 2.4rem;
`;

export const Logo = styled.div`
    img {
        max-height: 2.4rem;
        max-width: 9.6rem;
    }
`;

export const Name = styled.span`
    font-family: "PT Sans Caption";
    font-weight: bold;
    font-size: 1.4rem;
    color: #555555;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
`;

export const TextInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }
`;

export const Description = styled.span`
    font-family: "PT Sans Caption";
    font-size: 1.4rem;
    color: #555555;
`;

export const Avatar = styled.img`
    margin-left: 2.274rem;
    max-height: 3.2rem;
    max-width: 3.2rem;
    border-radius: 4px;
`;