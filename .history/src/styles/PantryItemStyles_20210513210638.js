import styled from 'styled-components';

export const PantryItemSection = styled.section`


`;

export const PantryItemWrapper = styled.section`
    display: grid!important;
    grid-template-columns: 1fr 2fr 1fr!important;
    grid-template-rows: 1fr;
    background: pink;
    align-items: center;

`;

export const PantryListValues = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    align-items: start;

    ${({ center }) => center && `
	    align-items: center;

    `}

    ${({ center }) => center && `
	    align-items: center;

    `}

    
`
export const PantryListQuantityNum = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 1.2rem;
	align-items: center;
`;