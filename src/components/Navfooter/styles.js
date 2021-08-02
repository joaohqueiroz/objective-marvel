import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 9rem;
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const List = styled.ul`
    list-style: none;
    display: flex;

    li + li {
        margin-left: 1.6rem;
    }
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        font-family: "PT Sans";
        font-size: 14px;
        color: #555555;
        height: 3.2rem;
        width: 4rem;
        background: #F5F5F5;
        border: 1px solid #E5E5E5;
        border-radius: 4px;

        :hover:not(.selected) {
            background: #5DAFFF;
            color: white;
            cursor: pointer;
        }

        &.selected {
            background: #167ABC;
            border: 1px solid #167ABC;
            color: white;
        }
    }
`;

export const ActionItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        font-size: 14px;
        color: #555555;
        cursor: pointer;

        :hover {
            color: #5DAFFF;
        }
    }
`;