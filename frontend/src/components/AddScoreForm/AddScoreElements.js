import styled from 'styled-components';
import colours from '../../colours';

const { grey, yellow } = colours;

export const InputScoresForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ClimbNumInput = styled.input`
	background-color: transparent;
	border-radius: 3px;
	border: 0.1rem solid ${yellow};
	color: ${yellow};
	font-size: 1rem;
	font-weight: bold;
	height: 5rem;
	margin: 1.5rem;
	padding: 0.25rem 1rem;
	text-align: center;
	width: 5rem;
	:focus,
	:active {
		border: 0.2rem solid ${yellow};
		outline: none;
		color: ${yellow};
	}
`;

export const AddScoreContainer = styled.div`
	width: 95%;
	max-width: 500px;
`;

export const RadioLabel = styled.label`
	color: ${grey};
`;

export const RadioInput = styled.input`
	color: ${grey};
	margin-left: 0.25rem;
`;

export const ChooseScoreGrid = styled.div`
	margin: auto;
	padding: 0.5rem 2rem 1rem;
	text-align: center;
`;

export const ChooseScoreBtn = styled.button`
	background-color: #fff;
	border: 0.2rem solid ${yellow};
	border-radius: 5px;
	color: ${yellow};
	height: 5rem;
	margin: 0.25rem;
	overflow: hidden;
	width: 45%;
	max-width: 250px;

	@media (min-width: 768px) {
		margin: 0.5rem;
	}
`;
