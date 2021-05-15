import styled from 'styled-components';

export const HeaderTitle = styled.p`
    color: #222;
    padding: 1.5rem;

    ${(large) => large && (
        `
            font-size: 3rem;
        `
    )}

    ${(medium) => large && (
        `
            font-size: 3rem;
        `
    )}



`;

