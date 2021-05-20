import styled from 'styled-components';

export const HeaderTitle = styled.h3`
    color: #222;
    padding: 1.5rem;
    margin-top: 8rem;

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

