import styled, {css} from 'styled-components';

export const HeaderTitle = styled.p`
    color: #222;
    padding: 1.5rem;

    ${(large) => large && 
        css`
            font-size: 3rem;
        `
    }

    ${(medium) => medium && 
        css`
            font-size: 1.5rem;
        `
    }



`;

