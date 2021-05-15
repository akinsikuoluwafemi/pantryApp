import styled from 'styled-components';

export const PantryItemSection = styled.section`


`;

export const PantryItemWrapper = styled.section`
    display: grid!important;
    grid-template-columns: repeat(3, 1fr)!important;
    grid-template-rows: 1fr;
    background: pink;
    align-items: center;

`;

export const PantryListValues = styled.div`
    display: flex;
    flex-direction: column;

    &:first-child
`