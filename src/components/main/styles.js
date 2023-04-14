import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	gap: 2rem;
	flex-direction: column;
	margin: 2rem;
	position: relative;

	&::after {
		content: '';
		background-image: url(/public/search.svg);
		width: 20px;
		height: 20px;
		background-repeat: no-repeat;
		background-size: 100%;
		position: absolute;
		top: 1rem;
		left: 1.5rem;
	}
`;

const StyledInput = styled.input`
	font-family: 'Nunito Sans', sans-serif;
	padding: 1rem;
	padding-left: 4rem;
	border: none;
	box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
	border-radius: 5px;
`;

const StyledSelect = styled.select`
	font-family: 'Nunito Sans', sans-serif;
	width: 200px;
	border: none;
	box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
	border-radius: 5px;
	padding: 1rem;
	padding-right: 2rem;
`;

export { StyledForm, StyledInput, StyledSelect };
