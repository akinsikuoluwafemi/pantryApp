import styled from 'styled-components';


export const PantryChipRow = styled.div`
	background: pink;
	padding: 2rem 0;
	display: flex;
	overflow-x: auto;

    &::-webkit-scrollbar{
        display: none;
    } 

    &>div {
        margin-right: 15px;
        display: flex;  
    }
`;