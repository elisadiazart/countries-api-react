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

const StyledCard = styled.div`
	margin: 2rem 4rem;
	background-color: #FFFFFF;
	box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
	border-radius: 5px;
	padding-bottom: 2rem;
`

const StyledFlag = styled.img`
	border-radius: 5px 5px 0 0;
	margin-bottom: 1.5rem;
`

const StyledName = styled.h3`
	padding: 0 2rem;
	margin-bottom: 1rem;
`

const StyledText = styled.p`
	padding: 0 2rem;
	margin-bottom: .4rem;
	font-weight: 700;
`

const StyledSpan = styled.span`
	font-weight: 300;
`

export { StyledForm, StyledInput, StyledSelect, StyledCard, StyledFlag, StyledName, StyledText, StyledSpan };
