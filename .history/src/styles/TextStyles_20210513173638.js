import styled, {css} from 'styled-components';

export const HeaderTitle = styled.p`
    color: #222;
    padding: 1.5rem;

    ${(large) => large && 
        `
            font-size: 3rem;
        `
    }

    ${(medium) => medium && (
        `
            font-size: 1.5rem;
        `
    )}



`;

