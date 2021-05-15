import styled from 'styled-components';


export const PantryChipRow = styled.div`
	background: pink;
	padding: 2rem 0;
	display: flex;
	overflow-x: auto;

    &::-webkit-scrollbar{
        display: none;
    } 

    &>span {
        margin-right: 15px;
    }
`;
export const PantryChipRowItem = styled.span 