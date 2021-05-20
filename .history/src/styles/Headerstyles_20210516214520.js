import styled from 'styled-components';

export const Header = styled.div`
	background: #fff;
	padding: 0.8rem 0;
	overflow: hidden;
	position: fixed; /* Set the navbar to fixed position */
	top: 30px; /* Position the navbar at the top of the page */
	width: 100%; /* Full width */

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
    // background: red;
    


    & > input {
        font-size: 3rem!important;
    }
`

export const HeaderWrapper = styled.nav`
	display: grid;
	align-items: center;
	// grid-template-columns: 3fr 1fr;
	
`;