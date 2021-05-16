import styled from 'styled-components';


export const MainLayout = styled.main`
	position: relative;

	& > a {
		position: absolute;
		bottom: 8%;
		left: 75%;

		@media (min-width: 500px) {
			left: 84%;
		}
	}
`;