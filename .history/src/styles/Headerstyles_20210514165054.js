import styled from 'styled-components';

export const Header = styled.div`
	background: #fff;
	padding: .8rem 0;

	.header-wrapper {
		display: flex;
		align-items: center;
        align-content: center;
	}
`;

export const Headerlist = styled.ul`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    font-size: 'initial';

    & > input {
        font-size: 3rem!important;
    }
`

export const HeaderWrapper = styled.nav`
    display: grid;
    grid-template-columns: 2fr 1fr;
    background: red;

`