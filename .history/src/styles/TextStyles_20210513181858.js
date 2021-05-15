import styled from 'styled-components';

export const HeaderTitle = styled.`
    color: #222;
    padding: 1.5rem;

    ${({ large }) => large &&
        `
            font-size: 2.3rem;
        `
    };

    ${({ medium }) => medium &&
        `
            font-size: 1.4rem;
        `
    };



`;

