import styled from 'styled-components';


// export const MainLayout = styled.main`
// 	position: relative;

// 	& > a {
// 		position: absolute;
// 		bottom: 4%;
// 		left: 75%;

// 		@media (min-width: 500px) {
// 			left: 84%;
// 		}
// 	}
// `;

export const MainLayout = styled.main`

	& > a {
			position: fixed;
			width: 60px;
			height: 60px;
			bottom: 40px;
			right: 40px;
			// background-color: #25d366;
			color: #fff;
			border-radius: 50px;
			text-align: center;
			font-size: 30px;
			// box-shadow: 2px 2px 3px #999;
			z-index: 100;

			&>button {
			}
		}

		
	}
`;