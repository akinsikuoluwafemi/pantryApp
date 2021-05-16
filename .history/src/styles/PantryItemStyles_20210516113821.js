import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PantryItemSection = styled(Link)`
    color: inherit;
    width: inherit;
    &:hover {
        color: inherit;
    }
    & + div:last-of-type{
        display: none;
    }
`;

export const PantryItemWrapper = styled.section`
    display: grid!important;
    grid-template-columns: 1.7fr 2fr 1fr!important;
    grid-template-rows: 1fr;
    // background: pink;
    align-items: center!important;
    justify-content: center;

`;

export const PantryListValues = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    align-items: start;

    ${({ space }) => space && `
	    margin: 2rem 0;

    `}

    ${({ center }) => center && `
	    align-items: center;

    `}

    ${({ start }) => start && `
	    align-items: start;

    `}

    
`
