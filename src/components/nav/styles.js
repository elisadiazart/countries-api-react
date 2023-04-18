import styled from 'styled-components';

const StyledUl = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
	padding: 2rem 2rem;
`;

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

const StyledH1 = styled.h1`
	cursor: pointer;
`;

export { StyledUl, StyledDiv, StyledH1 };
