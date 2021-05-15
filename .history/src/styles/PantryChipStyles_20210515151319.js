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
		border: 1px solid rgba(0, 0, 0, 0.23);
        display: inline;
        height: 32px;
        font-size: 1rem;
	}
	.not-active {
		background: #fdc03963;
	}

	active {
		background: #fdc039;
	}
`;
