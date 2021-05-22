import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NewPantrySection = styled(motion.div)`
	

	
`;

export const SubmitButton = styled.button`
	
	width: 100%;
	padding: 1rem 0;
	border: none;
	outline: none;

	${({ notfilled, filled }) => notfilled ? `
    	background: #FDC039!important;

	`}

	${({ filled }) => filled && `
    	background: #FDC039!important;
		opacity: 0.75;
	`}


`;