import styled from 'styled-components';


export const PantryChipRow = styled.div`
	padding: 2rem 0;
	display: flex;
	overflow-x: auto;

	&::-webkit-scrollbar {
		display: none;
	}

	& > button {
		margin-right: 15px;
		text-transform: capitalize;
	}
	.not-active {
		background: #fdc03963;
	}

	active {
		background: #fdc039;
	}
`;
