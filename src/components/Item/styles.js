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
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    align-items: center;
`;